<template>
  <div class="form-group" :class="{validate:canValidate,'has-feedback':icon,'has-error':canValidate&&valid===false,'has-success':canValidate&&valid}">
    <slot name="label"><label v-if="label" class="control-label" @click="focus">{{label}}</label></slot>
    <div v-if="slots.before||slots.after" class="input-group">
      <slot name="before"></slot>
      <textarea v-if="type=='textarea'" class="form-control" v-el:input v-model="value"
        :cols="cols"
        :rows="rows"
        :name="name"
        :title="attr(title)"
        :readonly="readonly"
        :required="required"
        :disabled="disabled"
        :maxlength="maxlength"
        :placeholder="placeholder"
        @blur="onblur" @focus="onfocus"
      ></textarea>
      <input v-else class="form-control" v-el:input v-model="value"
        :name="name"
        :max="attr(max)"
        :min="attr(min)"
        :step="step"
        :type="type"
        :title="attr(title)"
        :readonly="readonly"
        :required="required"
        :disabled="disabled"
        :maxlength="maxlength"
        :placeholder="placeholder"
        @keyup.enter="enterSubmit&&submit()"
        @blur="onblur" @focus="onfocus"
      />
      <div v-if="showClear && value" :class="{icon:icon}">
        <span class="close" @click="value = ''">&times;</span>
      </div>
      <div v-if="icon" class="icon">
        <span v-if="icon&&valid!==null" :class="['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]" aria-hidden="true"></span>
      </div>
      <slot name="after"></slot>
    </div>
    <template v-else>
      <textarea v-if="type=='textarea'" class="form-control" v-el:input v-model="value"
        :cols="cols"
        :rows="rows"
        :name="name"
        :title="attr(title)"
        :readonly="readonly"
        :required="required"
        :disabled="disabled"
        :maxlength="maxlength"
        :placeholder="placeholder"
        @blur="onblur" @focus="onfocus"
      ></textarea>
      <input v-else class="form-control" v-el:input v-model="value"
        :name="name"
        :max="attr(max)"
        :min="attr(min)"
        :step="step"
        :type="type"
        :title="attr(title)"
        :readonly="readonly"
        :required="required"
        :disabled="disabled"
        :maxlength="maxlength"
        :placeholder="placeholder"
        @keyup.enter="enterSubmit&&submit()"
        @blur="onblur" @focus="onfocus"
      />
      <span v-if="showClear && value" class="close" @click="value = ''">&times;</span>
      <span v-if="icon&&valid!==null" :class="['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]" aria-hidden="true"></span>
    </template>
    <div v-if="showHelp" class="help-block" @click="focus">{{help}}</div>
    <div v-if="showError" class="help-block with-errors" @click="focus">{{errorText}}</div>
  </div>
</template>

<script>
import {coerce, translations} from './utils/utils.js'
import $ from './utils/NodeList.js'

export default {
  props: {
    value: {
      twoWay: true,
      default: null
    },
    match: {
      type: String,
      default: null
    },
    clearButton: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    enterSubmit: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    error: {
      type: String,
      default: null
    },
    help: {
      type: String,
      default: null
    },
    hideHelp: { // hide when have error
      type: Boolean,
      coerce: coerce.boolean,
      default: true
    },
    icon: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    lang: {
      type: String,
      default: navigator.language
    },
    mask: null,
    maskDelay: {
      type: Number,
      coerce: coerce.number,
      default: 100
    },
    max: {
      type: String,
      coerce: coerce.string,
      default: null
    },
    maxlength: {
      type: Number,
      coerce: coerce.number,
      default: null
    },
    min: {
      type: String,
      coerce: coerce.string,
      default: null
    },
    minlength: {
      type: Number,
      coerce: coerce.number,
      default: 0
    },
    name: {
      type: String,
      default: null
    },
    pattern: {
      coerce: coerce.pattern,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    required: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    rows: {
      type: Number,
      coerce: coerce.number,
      default: 3
    },
    step: {
      type: Number,
      coerce: coerce.number,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    validationDelay: {
      type: Number,
      coerce: coerce.number,
      default: 250
    }
  },
  data () {
    return {
      valid: null,
      timeout: null
    }
  },
  computed: {
    canValidate () { return !this.disabled && !this.readonly && (this.required || this.pattern || this.nativeValidate || this.match !== null) },
    errorText () {
      let value = this.value
      let error = [this.error]
      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')')
      if (value && (value.length < this.minlength)) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')')
      return error.join(' ')
    },
    input () { return this.$els.input },
    nativeValidate () { return (this.input||{}).checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max) },
    showClear () {
      // Disable the clear-button on Edge if is enabled. Edge has a native clear button.
      return /\bEdge\//.test(window.navigator.userAgent) ? false : this.clearButton
    },
    showError () { return this.error && this.valid===false },
    showHelp () { return this.help && (!this.showError || !this.hideHelp) },
    slots () { return this._slotContents || {} },
    text () { return translations(this.lang) },
    title () { return this.errorText || this.help || '' }
  },
  watch: {
    match (val) {
      this.eval()
    },
    valid (val, old) {
      if (val !== old) {
        this._parent && this._parent.validate()
      }
    },
    value (val, old) {
      if (val !== old) {
        if (this.mask instanceof Function) {
          val = this.mask(val || '')
          if (this.value !== val) {
            if (this._timeout.mask) clearTimeout(this._timeout.mask)
            this._timeout.mask = setTimeout(() => {
              this.value = val
              this.$els.input.value = val
            }, this.maskDelay)
          }
        }
        this.eval()
      }
    }
  },
  methods: {
    attr (value) {
      return ~['', null, undefined].indexOf(value) || value instanceof Function ? undefined : value
    },
    focus () { this.input.focus() },
    eval () {
      if (this._timeout.eval) clearTimeout(this._timeout.eval)
      if (!this.canValidate) {
        this.valid = true
      } else {
        this._timeout.eval = setTimeout(() => {
          this.valid = this.validate()
          this._timeout.eval = null
        }, this.validationDelay)
      }
    },
    onblur (e) {
      if (this.canValidate) { this.valid = this.validate() }
      this.$emit('blur', e)
    },
    onfocus (e) {
      this.$emit('focus', e)
    },
    submit () {
      if (this.$parent._formGroup) {
        return this.$parent.validate()
      }
      if (this.input.form) {
        const invalids = $('.form-group.validate:not(.has-success)',this.input.form)
        if (invalids.length) {
          invalids.find('input,textarea,select')[0].focus()
        } else {
          this.input.form.submit()
        }
      }
    },
    validate () {
      if (!this.canValidate) { return true }
      let value = (this.value || '').trim()
      if (!value) { return !this.required }
      if (this.match!==null) { return this.match === value }
      if (value.length < this.minlength) { return false }
      if (this.nativeValidate && !this.input.checkValidity()){ return false }
      if (this.pattern) {
        return this.pattern instanceof Function ? this.pattern(this.value) : this.pattern.test(this.value)
      }
      return true
    }
  },
  created () {
    this._input = true
    this._timeout = {}
    let parent = this.$parent
    while (parent && !parent._formGroup) { parent = parent.$parent }
    if (parent && parent._formGroup) { this._parent = parent }
  },
  ready () {
    this._parent && this._parent.children.push(this)
    $(this.input).on('focus', e => this.$emit('focus', e)).on('blur', e => {
      if (this.canValidate) { this.valid = this.validate() }
      this.$emit('blur', e)
    })
  },
  beforeDestroy () {
    this._parent && this._parent.children.$remove(this)
    $(this.input).off()
  }
}
</script>

<style scoped>
.form-group {
  position: relative;
}
label~.close {
  top: 25px;
}
.input-group>.icon {
  position: relative;
  display: table-cell;
  width:0;
  z-index: 3;
}
.close {
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
.has-feedback .close {
  right: 20px;
}
</style>
