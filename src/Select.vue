<template>
<select v-if="name && (required || value.length)" name="{{name}}" class="secret" :multiple="multiple" :required="required" @focus="focus()">
  <option v-if="!value.length" value=""></option>
  <option v-else v-for="val in value" value="{{val}}" selected>{{val}}</option>
</select>
<div class="btn-select" :class="{'btn-group btn-group-justified': justified}" @click="unblur">
  <div class="btn-group" :class="{open: show}">
    <button v-el:btn type="button" class="form-control dropdown-toggle"
      :disabled="disabled"
      @click="toggleDropdown()"
      @blur="search ? null : blur()"
      @keyup.esc="show = false"
    >
      <span class="btn-placeholder" v-show="!ajax && showPlaceholder">{{placeholder || text.notSelected}}</span>
      <span class="btn-content" v-show="!ajax">{{ selectedItems }}</span>
      <span class="btn-loader" v-show="ajax">{{text.loading}}</span>
      <span class="caret"></span>
      <span v-if="showResetButton&&value.length" class="close" @click="clear()">&times;</span>
    </button>
    <ul class="dropdown-menu">
      <template v-if="options.length">
        <li v-if="search" class="bs-searchbox">
          <input type="text" placeholder="{{searchText||text.search}}" class="form-control" autocomplete="off"
            v-el:search
            v-model="searchValue"
            @blur="blur()"
            @keyup.esc="show = false"
          />
        </li>
        <li v-for="option in options | filterBy searchValue" :id="option.value">
          <a @mousedown.prevent="select(option.value)">
            {{ option.label }}
            <span class="glyphicon glyphicon-ok check-mark" v-show="isSelected(option.value)"></span>
          </a>
        </li>
      </template>
      <slot v-else></slot>
      <div class="notify" v-if="!closeOnSelect" v-show="showNotify" transition="fadein">{{limitText}}</div>
    </ul>
    <div class="notify" v-if="closeOnSelect" v-show="showNotify" transition="fadein"><div>{{limitText}}</div></div>
  </div>
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
    label: {
      type: String,
      default: null
    },
    multiple: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    search: { // Allow searching (only works when options are provided)
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    disabled: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    required: {
      type: Boolean,
      coerce: coerceBoolean,
      default: null
    },
    placeholder: {
      type: String,
      default: null
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
    searchText: {
      type: String,
      default: null
    },
    showResetButton: {
      type: Boolean,
      default: false
    },
    closeOnSelect: { // only works when multiple
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    lang: {
      type: String,
      default: navigator.language
    },
    justified: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    url: {
      type: String,
      default: null
    },
    cache: { // save old data -- not working yet (experimental)
      type: Array,
      default: true
    },
    parent: {
      type: Array,
      default: true
    }
  },
  ready () {
    if (this.value === undefined) { this.value = null }
    if (this.value instanceof Array) {
      if (!this.multiple) {
        this.value = this.value.slice(0, 1)
      }
      if (this.value.length > this.limit && this.limit > 0) {
        this.value = this.value.slice(0, this.limit)
      }
    }
    this.checkValue()
    if (this.url && !this.options.length) this.update()
  },
  data () {
    return {
      ajax: null,
      searchValue: null,
      show: false,
      showNotify: false
    }
  },
  computed: {
    selectedItems () {
      let foundItems = []
      let value = this.value instanceof Array ? this.value : this.value !== null ? [this.value] : []
      if (value.length) {
        for (var item of value) {
          if (this.options.length === 0) {
            foundItems = value
          } else {
            if (~['number', 'string'].indexOf(typeof item)) {
              let option
              this.options.some(o => {
                if (o.value === item) {
                  option = o
                  return true
                }
              })
              option && foundItems.push(option.label)
            }
          }
        }
        return foundItems.join(', ')
      }
    },
    limitText () {
      return this.text.limit.replace('{{limit}}', this.limit)
    },
    showPlaceholder () {
      return this.value === null || (this.value instanceof Array && this.value.length === 0)
    },
    text () {
      return translations(this.lang)
    },
    hasParent () {
      return this.url && ((this.parent instanceof Array && this.parent.length) || this.parent === true)
    }
  },
  watch: {
    value (val) {
      this.checkValue()
      if (this.value instanceof Array && val.length > this.limit) {
        this.showNotify = true
        this.value.pop()
        if (timeout.limit) clearTimeout(timeout.limit)
        timeout.limit = setTimeout(() => {
          timeout.limit = false
          this.showNotify = false
        }, 1500)
      }
    },
    multiple () {
      this.checkValue()
    },
    parent () {
      this.value = []
      this.update()
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
      this.label = this.selectedItems
    },
    clear () {
      this.value = this.value instanceof Array ? [] : null
      this.label = this.selectedItems
      this.toggleDropdown()
    },
    checkValue () {
      if (this.multiple && !(this.value instanceof Array)) {
        if (this.value === null || this.value === undefined) {
          this.value = []
        } else {
          this.value = [this.value]
        }
      }
      if (!this.multiple && this.value instanceof Array) {
        this.value = this.value.length ? this.value.pop() : null
      }
      this.label = this.selectedItems
    },
    isSelected (v) {
      return this.value instanceof Array ? ~this.value.indexOf(v) : this.value === v
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
      if (!this.hasParent) {
        this.options = []
        this.disabled = !this.options.length
        if (this.disabled) this.value = []
      } else {
        this.ajax = true
        callAjax(this.url, (data) => {
          let options = []
          for (let opc of data) {
            if (opc.value !== undefined && opc.label !== undefined) options.push({value: opc.value, label: opc.label})
          }
          this.options = options
          this.disabled = !this.options.length
          if (this.disabled) this.value = []
        }).always(() => {
          this.ajax = false
          this.label = this.selectedItems
        })
      }
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
.btn-group .notify {
  position: relative;
}
.btn-group .dropdown-menu .notify,
.btn-group .notify > div {
  position: absolute;
  bottom: 5px;
  width: 96%;
  margin: 0 2%;
  min-height: 26px;
  padding: 3px 5px;
  background: #f5f5f5;
  border: 1px solid #e3e3e3;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  pointer-events: none;
}
.btn-group .dropdown-menu .notify {
  opacity: .9;
}
.btn-group .dropdown-menu .notify {
  opacity: .9;
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
