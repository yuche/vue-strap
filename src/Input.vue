<template>
  <div class="form-group" @click="focus()" :class="{validate:canValidate,'has-feedback':icon,'has-error':canValidate&&valid===false,'has-success':canValidate&&valid}">
    <slot name="label"><label v-if="label" class="control-label">{{label}}</label></slot>
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
    <template v-else>
      <div v-if="slots.before||slots.after" class="input-group">
        <slot name="before"></slot>
        <input class="form-control" v-el:input v-model="value"
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
        <slot name="after"></slot>
      </div>
      <input v-else class="form-control" v-el:input v-model="value"
        :name="name"
        :max="attr(max)"
        :min="attr(min)"
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
    </template>
    <span v-if="clearButton && value" class="close" @click="value = ''">&times;</span>
    <span v-if="icon&&valid!==null" class="glyphicon glyphicon-{{valid?'ok':'remove'}} form-control-feedback" aria-hidden="true"></span>
    <div v-if="showHelp" class="help-block">{{help}}</div>
    <div v-if="showError" class="help-block with-errors">{{errorText}}</div>
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
    slots () {
      return this._slotContents || {}
    },
    text () {
      return translations(this.lang)
    },
    showHelp () {
      return this.help && (!this.showError || !this.hideHelp)
    },
    showError () {
      return this.error && this.valid===false
    },
    errorText () {
      let value = this.value
      let error = [this.error]
      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')')
      if (value && (value.length < this.minlength)) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')')
      return error.join(' ')
    },
    nativeValidate () {
      return this.$els && this.$els.input && this.$els.input.checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max)
    },
    canValidate () {
      return !this.disabled && !this.readonly && (this.required || this.pattern || this.nativeValidate || this.match !== null)
    },
    title () {
      return this.errorText || this.help || ''
    }
  },
  watch: {
    match (val) {
      this.eval()
    },
    valid (val, old) {
      if (val === old) { return }
      this._parent && this._parent.validate()
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
    focus () {
      this.$els.input.focus()
    },
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
      if (this.$els.input.form) {
        const invalids = $('.form-group.validate:not(.has-success)',this.$els.input.form)
        if (invalids.length) {
          invalids.find('input,textarea,select')[0].focus()
        } else {
          this.$els.input.form.submit()
        }
      }
    },
    validate () {
      if (!this.canValidate) { return true }
      let value = (this.value || '').trim()
      if (!value) { return !this.required }
      if (this.match!==null) { return this.match === value }
      if (value.length < this.minlength) { return false }
      if (this.nativeValidate && !this.$els.input.checkValidity()){ return false }
      if (this.pattern) {
        return this.pattern instanceof Function ? this.pattern(this.value) : this.pattern.test(this.value)
      }
      return true
    }
  },
  created () {
    this._timeout = {}
    let parent = this.$parent
    while (parent && !parent._formGroup) { parent = parent.$parent }
    if (parent && parent._formGroup) {
      parent.children.push(this)
      this._parent = parent
    }
  },
  beforeDestroy () {
    if (this._parent) this._parent.children.$remove(this)
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
  right:18px;
}
</style>
