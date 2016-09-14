<template>
<div v-el:select :class="{'btn-group btn-group-justified': justified, 'btn-select': !justified}">
  <slot name="before"></slot>
  <div :class="{open:show,dropdown:!justified}">
    <select v-el:sel v-model="value" v-show="show" name="{{name}}" class="secret" :multiple="multiple" :required="required" :readonly="readonly" :disabled="disabled">
      <option v-if="required" value=""></option>
      <option v-for="option in options" :value="option.value||option">{{ option.label||option }}</option>
    </select>
    <button type="button" class="form-control dropdown-toggle"
      :disabled="disabled || !hasParent"
      :readonly="readonly"
      @click="toggle()"
      @keyup.esc="show = false"
    >
      <span class="btn-content">{{ loading ? text.loading : showPlaceholder || selectedItems }}</span>
      <span class="caret"></span>
      <span v-if="clearButton&&values.length" class="close" @click="clear()">&times;</span>
    </button>
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
        <li v-for="option in options | filterBy searchValue" :id="option.value||option">
          <a @mousedown.prevent="select(option.value||option)">
            {{ option.label||option }}
            <span class="glyphicon glyphicon-ok check-mark" v-show="isSelected(option.value||option)"></span>
          </a>
        </li>
      </template>
      <slot v-else></slot>
      <div v-if="showNotify && !closeOnSelect" class="notify in" transition="fadein">{{limitText}}</div>
    </ul>
    <div v-if="showNotify && closeOnSelect" class="notify out" transition="fadein"><div>{{limitText}}</div></div>
  </div>
  <slot name="after"></slot>
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
    justified: {
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
    // },
    // cache: { // save old data -- not working yet (experimental)
    //   type: Array,
    //   default: true
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
    selectedItems () {
      if (this.options.length === 0) { return '' }
      let foundItems = []
      for (var item of this.values) {
        if (~['number', 'string'].indexOf(typeof item)) {
          let option = null
          if (this.options.some(o => {
            if (o instanceof Object ? o.value === item : o === item ) {
              option = o
              return true
            }
          })) { foundItems.push(option.label || option) }
        }
      }
      return foundItems.join(', ')
    },
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
        for (let i in options) {
          if (!(options[i] instanceof Object)) {
            options[i] = {label: options[i], value: options[i]}
            changed = true
          }
        }
      }
      if (changed) this.options = options
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
    select (v) {
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
        this.value = v
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
        for (let opc of data) {
          if (opc.value !== undefined && opc.label !== undefined) options.push(opc)
        }
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
.btn-select { display: inline-block; }
.btn-select>.btn-group>.dropdown-menu>li { position:relative; }
.btn-select>.btn-group>.dropdown-menu>li>a { cursor:pointer; }
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
.btn-group.btn-group-justified .dropdown-menu { width: 100%; }
span.caret {
  float: right;
  margin-top: 9px;
  margin-left: 5px;
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
.bs-searchbox input:focus,
.secret:focus + button {
  outline: 0;
  border-color: #66afe9 !important;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
}
</style>
