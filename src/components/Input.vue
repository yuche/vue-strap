<template>
  <div class="form-group" :class="{validate:canValidate,'has-feedback':icon,'has-error':canValidate&&valid===false,'has-success':canValidate&&valid}">
    <slot name="label"><label v-if="label" class="control-label" @click="focus">{{label}}</label></slot>
    <div v-if="slots.before||slots.after" class="input-group">
      <slot name="before"></slot>
      <textarea :is="type=='textarea'?type:'input'" class="form-control" ref="input"
        :cols="cols"
        :disabled="disabled"
        :max="attr(max)"
        :maxlength="maxlength"
        :min="attr(min)"
        :name="name"
        :placeholder="placeholder"
        :readonly="readonly"
        :required="required"
        :rows="rows"
        :step="step"
        :title="attr(title)"
        :type="type=='textarea'?null:type"
        v-model="val"
        @blur="emit" @focus="emit" @input="emit"
        @keyup.enter="type!='textarea'&&enterSubmit&&submit()"
      ></textarea>
      <div v-if="clearButton && value" :class="{icon:icon}">
        <span class="close" @click="value = ''">&times;</span>
      </div>
      <div v-if="icon" class="icon">
        <span v-if="icon&&valid!==null" :class="['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]" aria-hidden="true"></span>
      </div>
      <slot name="after"></slot>
    </div>
    <template v-else>
      <textarea :is="type=='textarea'?type:'input'" class="form-control" ref="input"
        :cols="cols"
        :disabled="disabled"
        :max="attr(max)"
        :maxlength="maxlength"
        :min="attr(min)"
        :name="name"
        :placeholder="placeholder"
        :readonly="readonly"
        :required="required"
        :rows="rows"
        :step="step"
        :title="attr(title)"
        :type="type=='textarea'?null:type"
        v-model="val"
        @blur="emit" @focus="emit" @input="emit"
        @keyup.enter="type!='textarea'&&enterSubmit&&submit()"
      ></textarea>
      <span v-if="clearButton && val" class="close" @click="val = ''">&times;</span>
      <span v-if="icon&&valid!==null" :class="['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]" aria-hidden="true"></span>
    </template>
    <div v-if="showHelp" class="help-block" @click="focus">{{help}}</div>
    <div v-if="showError" class="help-block with-errors" @click="focus">{{errorText}}</div>
  </div>
</template>

<script>
import {translations} from './utils/utils.js'
import $ from './utils/NodeList.js'

export default {
  props: {
    clearButton: {type: Boolean, default: false},
    cols: {type: Number, default: null},
    disabled: {type: Boolean, default: false},
    enterSubmit: {type: Boolean, default: false},
    error: {type: String, default: null},
    help: {type: String, default: null},
    hideHelp: {type: Boolean, default: true},
    icon: {type: Boolean, default: false},
    label: {type: String, default: null},
    lang: {type: String, default: navigator.language},
    mask: null,
    maskDelay: {type: Number, default: 100},
    match: {type: String, default: null},
    max: {type: String, default: null},
    maxlength: {type: Number, default: null},
    min: {type: String, default: null},
    minlength: {type: Number, default: 0},
    name: {type: String, default: null},
    pattern: {default: null},
    placeholder: {type: String, default: null},
    readonly: {type: Boolean, default: false},
    required: {type: Boolean, default: false},
    rows: {type: Number, default: 3},
    step: {type: Number, default: null},
    type: {type: String, default: 'text'},
    validationDelay: {type: Number, default: 250},
    value: {default: null}
  },
  data () {
    var val = this.value
    return {
      val,
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
    input () { return this.$refs.input },
    nativeValidate () { return (this.input || {}).checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max) },
    showError () { return this.error && this.valid === false },
    showHelp () { return this.help && (!this.showError || !this.hideHelp) },
    slots () { return this._slotContents || {} },
    text () { return translations(this.lang) },
    title () { return this.errorText || this.help || '' }
  },
  watch: {
    match (val) { this.eval() },
    val (val, old) {
      this.$emit('input', val)
      if (val !== old) {
        if (this.mask instanceof Function) {
          val = this.mask(val || '')
          if (this.val !== val) {
            if (this._timeout.mask) clearTimeout(this._timeout.mask)
            this._timeout.mask = setTimeout(() => {
              this.val = val
              this.$refs.input.value = val
            }, isNaN(this.maskDelay) ? 0 : this.maskDelay)
          }
        }
        this.eval()
      }
    },
    valid (val, old) {
      this.$emit('isvalid', val)
      this.$emit(!val ? 'invalid' : 'valid')
      if (val !== old && this._parent) this._parent.validate()
    },
    value (val) {
      if (this.val !== val) { this.val = val }
    }
  },
  methods: {
    attr (value) {
      return ~['', null, undefined].indexOf(value) || value instanceof Function ? null : value
    },
    emit (e) {
      this.$emit(e.type, e)
      if (e.type === 'blur' && this.canValidate) { this.valid = this.validate() }
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
    focus () { this.input.focus() },
    submit () {
      if (this.$parent._formGroup) {
        return this.$parent.validate()
      }
      if (this.input.form) {
        const invalids = $('.form-group.validate:not(.has-success)', this.input.form)
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
      if (this.match !== null) { return this.match === value }
      if (value.length < this.minlength) { return false }
      if (this.nativeValidate && !this.input.checkValidity()) { return false }
      if (this.pattern ) {
        if( typeof this.pattern == 'string' ) { 
          let re = new RegExp( this.pattern )

          return re.test(this.value)
        }
        if( this.pattern instanceof Function ) 
          return this.pattern(this.value)

        if( this.pattern instanceof RegExp ) 
          return this.pattern.test(this.value)
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
  mounted () {
    this._parent && this._parent.children.push(this)
    $(this.input).on('focus', e => this.$emit('focus', e)).on('blur', e => {
      if (this.canValidate) { this.valid = this.validate() }
      this.$emit('blur', e)
    })
  },
  beforeDestroy () {
    if (this._parent) {
      var index = this._parent.children.indexOf(this)
      this._parent.children.splice(index, 1)
    }
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
