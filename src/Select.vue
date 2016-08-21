<template>
<select v-model="value" name="{{name}}" class="secret" :multiple="multiple" :required="required" :readonly="readonly" @focus="focus()">
  <option v-if="required" value=""></option>
  <option v-for="option in options" :value="option.value||option" :selected="isSelected(option.value||option)">{{ option.label||option }}</option>
</select>
<div :class="{'btn-group btn-group-justified': justified, 'btn-select': !justified}" @click="unblur">
  <slot name="before"></slot>
  <div class="btn-group" :class="{open: show}">
    <button v-el:btn type="button" class="form-control dropdown-toggle"
      :disabled="disabled || !hasParent"
      :readonly="readonly"
      @click="toggleDropdown()"
      @blur="search ? null : blur()"
      @keyup.esc="blur()"
    >
      <span class="btn-content">{{ loading ? text.loading : showPlaceholder || selectedItems }}</span>
      <span class="caret"></span>
      <span v-if="clearButton&&values.length" class="close" @click="clear()">&times;</span>
    </button>
    <ul class="dropdown-menu">
      <template v-if="options.length">
        <li v-if="search" class="bs-searchbox">
          <input type="text" placeholder="{{searchText||text.search}}" class="form-control" autocomplete="off"
            v-el:search
            v-model="searchValue"
            @blur="blur()"
            @keyup.esc="blur()"
          />
        </li>
        <li v-for="option in options | filterBy searchValue" :id="option.value||option">
          <a @mousedown.prevent="select(option.value||option)">
            {{ option.label||option }}
            <span class="glyphicon glyphicon-ok check-mark" v-show="isSelected(option.value||option)"></span>
          </a>
        </li>
      </template>
      <slot v-else></slot>
      <div v-if="showNotify && !closeOnSelect" class="notify" transition="fadein">{{limitText}}</div>
    </ul>
    <div v-if="showNotify && closeOnSelect" class="notify" transition="fadein"><div>{{limitText}}</div></div>
  </div>
  <slot name="after"></slot>
</div>
</template>

<script>
import callAjax from './utils/callAjax.js'
import coerceBoolean from './utils/coerceBoolean.js'
import coerceNumber from './utils/coerceNumber.js'
import translations from './translations.js'

var timeout = {}
export default {
  props: {
    value: {
      twoWay: true
    },
    options: {
      twoWay: true,
      type: Array,
      default () { return [] }
    },
    multiple: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    clearButton: {
      type: Boolean,
      default: false
    },
    closeOnSelect: { // only works when multiple
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    disabled: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    justified: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    lang: {
      type: String,
      default: navigator.language
    },
    limit: {
      type: Number,
      coerce: coerceNumber,
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
      coerce: coerceBoolean,
      default: null
    },
    required: {
      type: Boolean,
      coerce: coerceBoolean,
      default: null
    },
    search: { // Allow searching (only works when options are provided)
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    searchText: {
      type: String,
      default: null
    },
    url: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    cache: { // save old data -- not working yet (experimental)
      type: Array,
      default: true
    }
  },
  ready () {
    if (this.value === undefined || !this.parent) { this.value = null }
    if (!this.multiple && this.value instanceof Array) {
      this.value = this.value.shift()
    }
    this.checkValue()
    if (this.url) this.update()
  },
  data () {
    return {
      loading: null,
      searchValue: null,
      show: false,
      showNotify: false
    }
  },
  computed: {
    selectedItems () {
      let foundItems = []
      let value = this.values
      if (value.length) {
        for (var item of value) {
          if (this.options.length === 0) {
            foundItems = value
          } else {
            if (~['number', 'string'].indexOf(typeof item)) {
              let option
              this.options.some(o => {
                if ((o instanceof Object && o.value === item) || o === item ) {
                  option = o
                  return true
                }
              })
              if (option) foundItems.push(option.label || option)
            }
          }
        }
      }
      return foundItems.join(', ')
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
    value (val) {
      if (this.value instanceof Array && val.length > this.limit) {
        this.showNotify = true
        if (timeout.limit) clearTimeout(timeout.limit)
        timeout.limit = setTimeout(() => {
          timeout.limit = false
          this.showNotify = false
        }, 1500)
      }
      this.label = this.selectedItems
      this.checkValue()
    },
    multiple () {
      this.checkValue()
    },
    show (val) {
      if (val) this.focus()
    },
    url () {
      this.update()
    }
  },
  methods: {
    select (v) {
      if (this.value instanceof Array) {
        if (~this.value.indexOf(v)) {
          this.value.$remove(v)
        } else {
          this.value.push(v)
        }
        if (this.closeOnSelect) {
          this.toggleDropdown()
        }
      } else {
        this.value = v
        this.toggleDropdown()
      }
    },
    clear () {
      this.value = this.value instanceof Array ? [] : null
      this.toggleDropdown()
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
    toggleDropdown () {
      this.show = !this.show
      this.unblur()
    },
    blur () {
      timeout.hide = setTimeout(() => {
        timeout.hide = false
        this.show = false
      }, 100)
    },
    unblur () {
      if (timeout.hide) {
        clearTimeout(timeout.hide)
        timeout.hide = false
      }
    },
    focus () {
      if (this.show) {
        (this.$els.search || this.$els.btn).focus()
      } else {
        this.$els.btn.focus()
      }
    },
    update () {
      if (!this.url) return
      this.loading = true
      callAjax(this.url, (data) => {
        let options = []
        for (let opc of data) {
          if (opc.value !== undefined && opc.label !== undefined) options.push({value: opc.value, label: opc.label})
        }
        this.options = options
        if (!options.length) { this.value = this.value instanceof Array ? [] : null }
      }).always(() => {
        this.loading = false
        this.checkValue()
      })
    }
  }
}
</script>

<style scoped>
.btn-select {
  display: inline-block;
}
.btn-select>.btn-group>.dropdown-menu>li {
  position:relative;
}
.btn-select>.btn-group>.dropdown-menu>li>a {
  cursor:pointer;
}
.bs-searchbox {
  padding: 4px 8px;
}
.bs-searchbox input {
  border-color: #66afe9 !important;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6) !important;
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6) !important;
}
button>.close {
  margin-left: 5px;
}
.btn-group>.notify {
  position: relative;
}
.btn-group .dropdown-menu .notify,
.btn-group .notify > div {
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
.btn-group .notify > div {
  top: 5px;
  z-index: 1;
}
.btn-group .dropdown-menu .notify {
  opacity: .9;
  bottom: 5px;
}
.btn-group.btn-group-justified .dropdown-menu {
  width:100%;
}
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
</style>
