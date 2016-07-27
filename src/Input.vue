<template>
  <div class="form-group" @click="focus()" :class="{'has-feedback':icon,'has-error':valid===false,'has-success':valid===true}">
    <label v-if="label" class="control-label">{{label}}</label>
    <div v-if="slots.before||slots.after" class="input-group">
      <slot name="before"></slot>
      <input class="form-control" v-el:input v-model="value"
        :name="name"
        :type="type"
        :required="required"
        :disabled="disabled"
        :minlength="minlength"
        :maxlength="maxlength"
        :placeholder="placeholder"
        @focus="toggleEvents(true)"
        @blur="toggleEvents(false)"
      />
      <slot name="after"></slot>
    </div>
    <input v-else class="form-control" v-el:input v-model="value"
      :name="name"
      :type="type"
      :required="required"
      :disabled="disabled"
      :minlength="minlength"
      :maxlength="maxlength"
      :placeholder="placeholder"
      @focus="toggleEvents(true)"
      @blur="toggleEvents(false)"
    />
    <span v-if="icon&&valid!==null" class="glyphicon glyphicon-{{valid?'ok':'remove'}} form-control-feedback" aria-hidden="true"></span>
    <div v-if="showHelp" class="help-block">{{help}}</div>
    <div v-if="showError" class="help-block with-errors">{{errorText}}</div>
  </div>
</template>

<script>
import coerceBoolean from './utils/coerceBoolean.js'
import coerceNumber from './utils/coerceNumber.js'
import translations from './translations.js'

export default {
  props: {
    value: {
      twoWay: true,
      type: String,
      default: ''
    },
    match: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    enterSubmit: {
      type: Boolean,
      coerce: coerceBoolean,
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
      coerce: coerceBoolean,
      default: true
    },
    icon: {
      type: Boolean,
      coerce: coerceBoolean,
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
    maxlength: {
      type: Number,
      coerce: coerceNumber,
      default: null
    },
    minlength: {
      type: Number,
      coerce: coerceNumber,
      default: 0
    },
    name: {
      type: String,
      default: null
    },
    pattern: null,
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    validationDelay: {
      type: Number,
      coerce: coerceNumber,
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
    bsForm () {
      return true
    },
    input () {
      return true
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
      // if (valid && this.match && this.match !== valid) { return false }
      return error.join(' ')
    }
  },
  watch: {
    match (val) {
      this.eval()
    },
    valid (val) {
      if (this.$parent.eval) {
        this.$parent.eval()
      }
    }
  },
  methods: {
    focus () {
      this.$els.input.focus()
    },
    eval () {
      let value = this.value || ''
      if (this.mask instanceof Function) value = this.mask(value)
      if (this.value !== value) this.value = value
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.valid = this.validate()
        this.timeout = null
      }, coerceNumber(this.validationDelay, 250))
    },
    validate () {
      let value = (this.value || '').trim()
      if (!value) { return !this.required }
      if (this.match!==null && this.match !== value) { return false }
      if (value.length < this.minlength) { return false }
      let valid = true
      if (this.pattern instanceof Function) valid = this.pattern(this.value)
      if (typeof this.pattern === 'string') {
        let regex = new RegExp(this.pattern)
        valid = regex.test(this.value)
      }
      return valid
    },
    toggleEvents (enable) {
      if (!enable) { this.valid = this.validate() }
      ['change', 'keypress', 'keydown', 'keyup'].forEach((event) => {
        enable
        ? this.$els.input.addEventListener(event, this.eval)
        : this.$els.input.removeEventListener(event, this.eval)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped></style> -->
