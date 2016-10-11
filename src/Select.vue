<template>
  <div ref="select" :class="classes">
    <button type="button" class="form-control dropdown-toggle"
      :disabled="disabled || !hasParent"
      :readonly="readonly"
      @click="toggle()"
      @keyup.esc="show = false"
    >
      <span class="btn-content">{{ loading ? text.loading : showPlaceholder || selected }}</span>
      <span v-if="clearButton&&values.length" class="close" @click="clear()">&times;</span>
    </button>
    <select ref="sel" :value="value" @input="this.$emit('input',$event.target.value)" v-show="show" :name="name" class="secret" :multiple="multiple" :required="required" :readonly="readonly" :disabled="disabled">
      <option v-if="required" value=""></option>
      <option v-for="option in options" :value="option[optionsValue]||option">{{ option[optionsLabel]||option }}</option>
    </select>
    <ul class="dropdown-menu">
      <template v-if="options.length">
        <li v-if="canSearch" class="bs-searchbox">
          <input type="text" :placeholder="searchText||text.search" class="form-control" autocomplete="off" ref="search"
            v-model="searchValue"
            @keyup.esc="show = false"
          />
          <span v-show="searchValue" class="close" @click="clearSearch">&times;</span>
        </li>
        <li v-if="required&&!clearButton"><a @mousedown.prevent="clear() && blur()">{{ placeholder || text.notSelected }}</a></li>
        <li v-for="option in filteredOptions" :id="option[optionsValue]||option">
          <a @mousedown.prevent="select(option[optionsValue],option)">
            <span v-html="option[optionsLabel]||option"></span>
            <span class="glyphicon glyphicon-ok check-mark" v-show="isSelected(option[optionsValue]||option)"></span>
          </a>
        </li>
      </template>
      <slot></slot>
      <transition v-if="showNotify && !closeOnSelect" name="fadein"><div class="notify in">{{limitText}}</div></transition>
    </ul>
    <transition v-if="showNotify && closeOnSelect" name="fadein"><div class="notify out"><div>{{limitText}}</div></div></transition>
  </div>
</template>

<script>
import {getJSON, translations} from './utils/utils.js'
import $ from './utils/NodeList.js'
// let coerce = {
//   clearButton: 'boolean',
//   closeOnSelect: 'boolean',
//   disabled: 'boolean',
//   limit: 'number',
//   minSearch: 'number',
//   multiple: 'boolean',
//   readonly: 'boolean',
//   required: 'boolean',
//   search: 'boolean'
// }

var timeout = {}
export default {
  props: {
    clearButton: {type: Boolean, default: false},
    closeOnSelect: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    lang: {type: String, default: navigator.language},
    limit: {type: Number, default: 1024},
    minSearch: {type: Number, default: 0},
    multiple: {type: Boolean, default: false},
    name: {type: String, default: null},
    options: {type: Array, default () { return [] }},
    optionsLabel: {type: String, default: 'label'},
    optionsValue: {type: String, default: 'value'},
    parent: {default: true},
    placeholder: {type: String, default: null},
    readonly: {type: Boolean, default: null},
    required: {type: Boolean, default: null},
    search: {type: Boolean, default: false},
    searchText: {type: String, default: null},
    url: {type: String, default: null},
    value: null
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
    canSearch () { return this.minSearch ? this.options.length >= this.minSearch : this.search },
    classes () { return [{open: this.show, disabled: this.disabled}, this.class, this.isLi ? 'dropdown' : this.inInput ? 'input-group-btn': 'btn-group'] },
    filteredOptions: function () {
      var search = this.searchValue && this.searchValue.toLowerCase()
      return !search ? this.options : this.options.filter(el => {
        return !!~el[this.optionsValue].toLowerCase().search(search)
      })
    },
    hasParent () { return this.parent instanceof Array ? this.parent.length : this.parent },
    inInput () { return this.$parent._input },
    isLi () { return this.$parent._navbar || this.$parent.menu || this.$parent._tabset },
    limitText () { return this.text.limit.replace('{{limit}}', this.limit) },
    selected () {
      if (this.options.length === 0) { return '' }
      let foundItems = []
      for (var item of this.values) {
        if (~['number', 'string'].indexOf(typeof item)) {
          let option = null
          if (this.options.some(o => {
            if (o instanceof Object ? o[this.optionsValue] === item : o === item ) {
              option = o
              return true
            }
          })) { foundItems.push(option[this.optionsLabel] || option) }
        }
      }
      return foundItems.join(', ')
    },
    showPlaceholder () { return (this.values.length === 0 || !this.hasParent) ? (this.placeholder || this.text.notSelected) : null },
    text () { return translations(this.lang) },
    values () { return this.value instanceof Array ? this.value : this.value !== null && this.value !== undefined ? [this.value] : [] }
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
        this.$refs.sel.focus()
        this.$refs.search && this.$refs.search.focus()
      }
    },
    url () {
      this.update()
    },
    valid (val, old) {
      this.$emit('isvalid', val)
      this.$emit(!val ? 'invalid' : 'valid')
      if (val !== old && this._parent) this._parent.validate()
    },
    value (val) {
      this.$emit('change', val)
      this.$emit('input', val)
      this.$emit('selected', this.selected)
      if (this.value instanceof Array && val.length > this.limit) {
        this.showNotify = true
        if (timeout.limit) clearTimeout(timeout.limit)
        timeout.limit = setTimeout(() => {
          timeout.limit = false
          this.showNotify = false
        }, 1500)
      }
      this.checkMultiple()
      this.valid = this.validate()
    }
  },
  methods: {
    blur () {
      this.show = false
    },
    checkMultiple () {
      if (this.multiple) {
        if (this.limit < 1) { this.limit = 1 }
        if (!(this.value instanceof Array)) {
          this.value = (this.value === null || this.value === undefined) ? [] : [this.value]
        }
        if (this.values.length > this.limit) {
          this.value = this.value.slice(0, this.limit)
        }
      }
    },
    clear () {
      if (this.disabled || this.readonly) { return }
      this.value = this.value instanceof Array ? [] : null
      this.toggle()
    },
    clearSearch () {
      this.searchValue = ''
      this.$refs.search.focus()
    },
    isSelected (v) {
      return this.values.indexOf(v) > -1
    },
    select (v, alt) {
      if (this.value instanceof Array) {
        if (~this.value.indexOf(v)) {
          var index = this.value.indexOf(v)
          this.value.splice(index, 1)
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
        for (let opc of data) {
          if (opc[this.optionsValue] !== undefined && opc[this.optionsLabel] !== undefined) options.push(opc)
        }
        this.options = options
        if (!options.length) { this.value = this.value instanceof Array ? [] : null }
      }).always(() => {
        this.loading = false
        this.checkMultiple()
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
    this.checkMultiple()
    if (this.url) this.update()
    let parent = this.$parent
    while (parent && !parent._formGroup) { parent = parent.$parent }
    if (parent && parent._formGroup) {
      this._parent = parent
    }
  },
  mounted () {
    if (this._parent) this._parent.children.push(this)
    $(this.$refs.select).onBlur(e => { this.show = false })
  },
  beforeDestroy () {
    if (this._parent) {
      var index = this._parent.children.indexOf(this)
      this._parent.children.splice(index, 1)
    }
    $(this.$refs.select).offBlur()
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
