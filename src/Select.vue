<template>
  <div v-el:select :class="classes">
    <button type="button" class="form-control dropdown-toggle"
      :disabled="disabled || !hasParent"
      :readonly="readonly"
      @click="toggle()"
      @keyup.esc="show = false"
    >
      <span class="btn-content" v-html="loading ? text.loading : showPlaceholder || selected"></span>
      <span v-if="clearButton&&values.length" class="close" @click="clear()">&times;</span>
    </button>
    <select v-el:sel v-model="value" v-show="show" name="{{name}}" class="secret" :multiple="multiple" :required="required" :readonly="readonly" :disabled="disabled">
      <option v-if="required" value=""></option>
      <option v-for="option in options" :value="option[optionsValue]||option">{{ option[optionsLabel]||option }}</option>
    </select>
    <ul class="dropdown-menu">
      <template v-if="options.length">
        <li v-if="canSearch" class="bs-searchbox">
          <input type="text" placeholder="{{searchText||text.search}}" class="form-control" autocomplete="off"
            v-el:search
            v-model="searchValue"
            @keyup.esc="show = false"
          />
          <span v-show="searchValue" class="close" @click="clearSearch">&times;</span>
        </li>
        <li v-if="required&&!clearButton"><a @mousedown.prevent="clear() && blur()">{{ placeholder || text.notSelected }}</a></li>
        <li v-for="option in options | filterBy searchValue" :id="option[optionsValue]||option">
          <a @mousedown.prevent="select(option[optionsValue],option)">
            <span v-html="option[optionsLabel]||option"></span>
            <span class="glyphicon glyphicon-ok check-mark" v-show="isSelected(option[optionsValue])"></span>
          </a>
        </li>
      </template>
      <slot></slot>
      <div v-if="showNotify && !closeOnSelect" class="notify in" transition="fadein">{{limitText}}</div>
    </ul>
    <div v-if="showNotify && closeOnSelect" class="notify out" transition="fadein"><div>{{limitText}}</div></div>
  </div>
</template>

<script>
import {getJSON, coerce, translations} from './utils/utils.js'
import $ from './utils/NodeList.js'

var timeout = {}
export default {
  props: {
    value: {
      twoWay: true
    },
    options: {
      type: Array,
      default () { return [] }
    },
    multiple: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    clearButton: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    closeOnSelect: { // only works when multiple
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    lang: {
      type: String,
      default: navigator.language
    },
    limit: {
      type: Number,
      coerce: coerce.number,
      default: 1024
    },
    name: {
      type: String,
      default: null
    },
    optionsLabel: {
      type: String,
      default: 'label'
    },
    optionsValue: {
      type: String,
      default: 'value'
    },
    parent: {
      default: true
    },
    placeholder: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      coerce: coerce.boolean,
      default: null
    },
    required: {
      type: Boolean,
      coerce: coerce.boolean,
      default: null
    },
    minSearch: {
      type: Number,
      coerce: coerce.number,
      default: 0
    },
    search: { // Allow searching (only works when options are provided)
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    searchText: {
      type: String,
      default: null
    },
    url: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      loading: null,
      searchValue: null,
      show: false,
      showNotify: false,
      valid: null
    }
  },
  computed: {
    selected () {
      if (this.options.length === 0) { return '' }
      let foundItems = []
      this.values.forEach(item => {
        if (~['number', 'string'].indexOf(typeof item)) {
          let option = null
          if (this.options.some(o => {
            if (o instanceof Object ? o[this.optionsValue] === item : o === item ) {
              option = o
              return true
            }
          })) { foundItems.push(option[this.optionsLabel] || option) }
        }
      })
      return foundItems.join(', ')
    },
    classes () {
      return [{open: this.show, disabled: this.disabled}, this.class, this.isLi ? 'dropdown' : this.inInput ? 'input-group-btn': 'btn-group']
    },
    inInput () { return this.$parent._input },
    isLi () { return this.$parent._navbar || this.$parent.menu || this.$parent._tabset },
    canSearch () {
      return this.minSearch ? this.options.length >= this.minSearch : this.search
    },
    limitText () {
      return this.text.limit.replace('{{limit}}', this.limit)
    },
    showPlaceholder () {
      return (this.values.length === 0 || !this.hasParent) ? (this.placeholder || this.text.notSelected) : null
    },
    text () {
      return translations(this.lang)
    },
    hasParent () {
      return this.parent instanceof Array ? this.parent.length : this.parent
    },
    values () {
      return this.value instanceof Array ? this.value : this.value !== null && this.value !== undefined ? [this.value] : []
    }
  },
  watch: {
    options (options) {
      let changed = false
      if (options instanceof Array && options.length) {
        options.map(el => {
          if (!(el instanceof Object)) {
            let obj = {}
            obj[this.optionsLabel] = el
            obj[this.optionsValue] = el
            changed = true
            return obj
          }
          return el
        })
      }
      if (changed) { this.options = options }
    },
    show (val) {
      if (val) {
        this.$els.sel.focus()
        this.$els.search && this.$els.search.focus()
      }
    },
    url () {
      this.update()
    },
    value (val) {
      this.$emit('change', val)
      this.$emit('selected', this.selected)
      if (this.value instanceof Array && val.length > this.limit) {
        this.showNotify = true
        if (timeout.limit) clearTimeout(timeout.limit)
        timeout.limit = setTimeout(() => {
          timeout.limit = false
          this.showNotify = false
        }, 1500)
      }
      this.checkValue()
      this.valid = this.validate()
    },
    valid (val, old) {
      if (val === old) { return }
      this._parent && this._parent.validate()
    }
  },
  methods: {
    blur () {
      this.show = false
    },
    clear () {
      if (this.disabled || this.readonly) { return }
      this.value = this.value instanceof Array ? [] : null
      this.toggle()
    },
    clearSearch () {
      this.searchValue = ''
      this.$els.search.focus()
    },
    checkValue () {
      if (this.multiple && !(this.value instanceof Array)) {
        this.value = (this.value === null || this.value === undefined) ? [] : [this.value]
      }
      if (!this.multiple && this.value instanceof Array) {
        this.value = this.value.length ? this.value.pop() : null
      }
      if (this.limit < 1) { this.limit = 1 }
      if (this.values.length > this.limit) {
        this.value = this.value.slice(0, this.limit)
      }
    },
    isSelected (v) {
      return this.values.indexOf(v) > -1
    },
    select (v, alt) {
      if (this.value instanceof Array) {
        if (~this.value.indexOf(v)) {
          this.value.$remove(v)
        } else {
          this.value.push(v)
        }
        if (this.closeOnSelect) {
          this.toggle()
        }
      } else {
        this.value = !~['', null, undefined].indexOf(v) ? v : alt
        this.toggle()
      }
    },
    toggle () {
      this.show = !this.show
    },
    update () {
      if (!this.url) return
      this.loading = true
      getJSON(this.url).then(data => {
        let options = []
        data.forEach(opc => {
          if (opc[this.optionsValue] !== undefined && opc[this.optionsLabel] !== undefined) options.push(opc)
        })
        this.options = options
        if (!options.length) { this.value = this.value instanceof Array ? [] : null }
      }).always(() => {
        this.loading = false
        this.checkValue()
      })
    },
    validate () {
      return !this.required ? true : this.value instanceof Array ? this.value.length > 0 : this.value !== null
    }
  },
  created () {
    this._select = true
    if (this.value === undefined || !this.parent) { this.value = null }
    if (!this.multiple && this.value instanceof Array) {
      this.value = this.value.shift()
    }
    this.checkValue()
    if (this.url) this.update()
    let parent = this.$parent
    while (parent && !parent._formGroup) { parent = parent.$parent }
    if (parent && parent._formGroup) {
      parent.children.push(this)
      this._parent = parent
    }
  },
  ready () {
    $(this.$els.select).onBlur(e => { this.show = false })
  },
  beforeDestroy () {
    if (this._parent) this._parent.children.$remove(this)
    $(this.$els.select).offBlur()
  }
}
</script>

<style scoped>
button.form-control.dropdown-toggle{
  height: auto;
  padding-right: 24px;
}
button.form-control.dropdown-toggle:after{
  content: ' ';
  position: absolute;
  right: 13px;
  top: 50%;
  margin: -1px 0 0;
  border-top: 4px dashed;
  border-top: 4px solid \9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.bs-searchbox {
  position: relative;
  margin: 4px 8px;
}
.bs-searchbox .close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
}
.bs-searchbox input:focus,
.secret:focus + button {
  outline: 0;
  border-color: #66afe9 !important;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
}
.secret {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
button>.close { margin-left: 5px;}
.notify.out { position: relative; }
.notify.in,
.notify>div {
  position: absolute;
  width: 96%;
  margin: 0 2%;
  min-height: 26px;
  padding: 3px 5px;
  background: #f5f5f5;
  border: 1px solid #e3e3e3;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  pointer-events: none;
}
.notify>div {
  top: 5px;
  z-index: 1;
}
.notify.in {
  opacity: .9;
  bottom: 5px;
}
.btn-group-justified .dropdown-toggle>span:not(.close) {
  width: calc(100% - 18px);
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: -4px;
}
.btn-group-justified .dropdown-menu { width: 100%; }
</style>
