<template>
  <div class="form-group" @click="focus()" :class="{validate:canValidate,'has-feedback':icon,'has-error':canValidate&&valid===false,'has-success':canValidate&&valid}">
    <slot name="label"><label v-if="label" class="control-label">{{label}}</label></slot>
    <div v-if="slots.before||slots.after" class="input-group">
      <slot name="before"></slot>
      <base-input v-model="value" class="form-control"
        :max="attr(max)"
        :min="attr(min)"
        :step="step"
        :cols="cols"
        :rows="rows"
        :name="name"
        :type="type"
        :title="attr(title)"
        :readonly="readonly"
        :required="required"
        :disabled="disabled"
        :maxlength="maxlength"
        :placeholder="placeholder"
        @keyup.enter="enterSubmit&&submit()"
      ></base-input>
      <div v-if="clearButton && value" :class="{icon:icon}">
        <span class="close" @click="value = ''">&times;</span>
      </div>
      <div v-if="icon" class="icon">
        <span v-if="icon&&valid!==null" class="glyphicon glyphicon-{{valid?'ok':'remove'}} form-control-feedback" aria-hidden="true"></span>
      </div>
      <slot name="after"></slot>
    </div>
    <template v-else>
      <base-input v-else v-model="value" class="form-control"
        :max="attr(max)"
        :min="attr(min)"
        :step="step"
        :cols="cols"
        :rows="rows"
        :name="name"
        :type="type"
        :title="attr(title)"
        :readonly="readonly"
        :required="required"
        :disabled="disabled"
        :maxlength="maxlength"
        :placeholder="placeholder"
        @enter="enterSubmit&&submit()"
      ></base-input>
      <span v-if="clearButton && value" class="close" @click="value = ''">&times;</span>
      <span v-if="icon&&valid!==null" class="glyphicon glyphicon-{{valid?'ok':'remove'}} form-control-feedback" aria-hidden="true"></span>
    </template>
    <div v-if="showHelp" class="help-block">{{help}}</div>
    <div v-if="showError" class="help-block with-errors">{{errorText}}</div>
  </div>
</template>

<script>
import {coerce, translations} from './utils/utils.js'
import $ from './utils/NodeList.js'
import InputMixin from './InputMixin.js'
import baseInput from './BaseInput.vue'

export default {
  mixins: [InputMixin],
  components: {
    baseInput
  },
  props: {
    clearButton: {
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
    match: {
      type: String,
      default: null
    },
    mask: null,
    pattern: {
      coerce: coerce.pattern,
      default: null
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
    input () {
      return $('input,textarea',this.$el)[0]
    },
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
      return this.input.checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max)
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
    }
  },
  methods: {
    focus () {
      this.input.focus()
    },
    eval () {
      let value = (this.value || '').trim()
      if (this.mask instanceof Function) value = this.mask(value)
      if (this.value !== value) { this.value = value }
      if (this.timeout) clearTimeout(this.timeout)
      if (!this.canValidate) {
        this.valid = true
      } else {
        this.timeout = setTimeout(() => {
          this.valid = this.validate()
          this.timeout = null
        }, this.validationDelay)
      }
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
    let parent = this.$parent
    while (parent && !parent._formGroup) { parent = parent.$parent }
    if (parent && parent._formGroup) {
      parent.children.push(this)
      this._parent = parent
    }
  },
  ready () {
    $(this.input).on('change keypress keydown keyup', () => this.eval()).on('focus', e => this.$emit('focus', e)).on('blur', e => {
      if (this.canValidate) { this.valid = this.validate() }
      this.$emit('blur', e)
    })
  },
  beforeDestroy () {
    if (this._parent) this._parent.children.$remove(this)
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
  right:20px;
}
</style>
