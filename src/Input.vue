<template>
  <div class="form-group" @click="focus()" :class="{'has-feedback':icon,'has-error':valid===false,'has-success':valid===true,validate:!noValidate}">
    <label v-if="label" class="control-label">{{label}}</label>
    <textarea v-if="type=='textarea'" class="form-control" v-el:input v-model="value"
      :cols="cols"
      :rows="rows"
      :name="name"
      :readonly="readonly"
      :required="required"
      :disabled="disabled"
      :maxlength="maxlength"
      :placeholder="placeholder"
    ></textarea>
    <template v-else>
      <div v-if="slots.before||slots.after" class="input-group">
        <slot name="before"></slot>
        <input class="form-control" v-el:input v-model="value"
          :name="name"
          :type="type"
          :readonly="readonly"
          :required="required"
          :disabled="disabled"
          :maxlength="maxlength"
          :placeholder="placeholder"
          @keyup.enter="enterSubmit&&submit()"
        />
        <slot name="after"></slot>
      </div>
      <input v-else class="form-control" v-el:input v-model="value"
        :name="name"
        :type="type"
        :readonly="readonly"
        :required="required"
        :disabled="disabled"
        :maxlength="maxlength"
        :placeholder="placeholder"
        @keyup.enter="enterSubmit&&submit()"
      />
    </template>
    <span v-if="clearButton && value" class="close" @click="value = ''">&times;</span>
    <span v-if="icon&&valid!==null" class="glyphicon glyphicon-{{valid?'ok':'remove'}} form-control-feedback" aria-hidden="true"></span>
    <div v-if="showHelp" class="help-block">{{help}}</div>
    <div v-if="showError" class="help-block with-errors">{{errorText}}</div>
  </div>
</template>

<script>
import coerceBoolean from './utils/coerceBoolean.js'
import coerceNumber from './utils/coerceNumber.js'
import coerceString from './utils/coerceString.js'
import translations from './translations.js'
import $ from './utils/NodeList.js'

export default {
  props: {
    value: {
      twoWay: true,
      type: String,
      coerce: coerceString,
      default: ''
    },
    match: {
      type: String,
      default: null
    },
    clearButton: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
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
    noValidate: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    onfocus: null,
    pattern: null,
    placeholder: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    required: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    rows: {
      type: Number,
      coerce: coerceNumber,
      default: 3
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
      if (this.noValidate) {
        if (this.valid !== null) this.valid = null
      } else {
        this.timeout = setTimeout(() => {
          this.valid = this.validate()
          this.timeout = null
        }, coerceNumber(this.validationDelay, 250))
      }
    },
    submit () {
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
      let value = (this.value || '').trim()
      if (!value) { return !this.required }
      if (this.match!==null && this.match !== value) { return false }
      if (value.length < this.minlength) { return false }
      let valid = true
      if (this.$els.input.checkValidity && !this.$els.input.checkValidity()){ return false }
      if (this.pattern instanceof Function) valid = this.pattern(this.value)
      if (typeof this.pattern === 'string') {
        let regex = new RegExp(this.pattern)
        valid = regex.test(this.value)
      }
      return valid
    }
  },
  ready () {
    $(this.$els.input).on('change keypress keydown keyup', () => this.eval()).on('blur', () => {
      if (!this.noValidate) { this.valid = this.validate() }
    }).on('focus', (e) => {
      if (this.onfocus instanceof Function) this.onfocus.call(this, e)
    })
  },
  beforeDestroy () {
    $(this.$els.input).off()
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
.has-feedback.has-success button.close,
.has-feedback.has-error button.close {
  right:20px;
}
</style>
