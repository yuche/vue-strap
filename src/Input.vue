<template>
  <div class="form-group" :class="{validate:canValidate,'has-feedback':icon,'has-error':canValidate&&valid===false,'has-success':canValidate&&valid}">
    <slot name="label"><label v-if="label" class="control-label" @click="focus">{{label}}</label></slot>
    <div v-if="$slots.before||$slots.after" class="input-group">
      <slot name="before"></slot>
      <textarea :is="type=='textarea'?type:'input'" class="form-control" ref="input"
        :cols="cols"
        :disabled="disabled"
        :list="id_datalist"
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
        :list="id_datalist"
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
    <datalist v-if="id_datalist" :id="id_datalist">
      <option v-for="opc in options" :value="opc"></option>
    </datalist>
    <div v-if="showHelp" class="help-block" @click="focus">{{help}}</div>
    <div v-if="showError" class="help-block with-errors" @click="focus">{{errorText}}</div>
  </div>
</template>

<script>
import {coerce, delayer, translations} from './utils/utils.js'
import $ from './utils/NodeList.js'

var DELAY = 300

export default {
  props: {
    clearButton: {type: Boolean, default: false},
    cols: {type: Number, default: null},
    datalist: {type: Array, default: null},
    disabled: {type: Boolean, default: false},
    enterSubmit: {type: Boolean, default: false},
    error: {type: String, default: null},
    help: {type: String, default: null},
    hideHelp: {type: Boolean, default: true},
    icon: {type: Boolean, default: false},
    label: {type: String, default: null},
    lang: {type: String, default: typeof navigator !== 'undefined'?navigator.language:"zh-CN"},
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
    url: {type: String, default: null},
    urlMap: {type: Function, default: null},
    validationDelay: {type: Number, default: 250},
    value: {default: null}
  },
  data () {
    var val = this.value
    return {
      options: this.datalist,
      val,
      valid: null,
      timeout: null
    }
  },
  computed: {
    canValidate () { return !this.disabled && !this.readonly && (this.required || this.regex || this.nativeValidate || this.match !== null) },
    errorText () {
      let value = this.value
      let error = [this.error]
      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')')
      if (value && (value.length < this.minlength)) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')')
      return error.join(' ')
    },
    id_datalist () {
      if (this.type !== 'textarea' && this.datalist instanceof Array) {
        if (!this._id_datalist) {
          if (!this.$root.id_datalist) { this.$root.id_datalist = 0 }
          this._id_datalist = 'input-datalist' + this.$root.id_datalist++
        }
        return this._id_datalist
      }
      return null
    },
    input () { return this.$refs.input },
    nativeValidate () { return (this.input || {}).checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max) },
    regex () { return coerce.pattern(this.pattern) },
    showError () { return this.error && this.valid === false },
    showHelp () { return this.help && (!this.showError || !this.hideHelp) },
    text () { return translations(this.lang) },
    title () { return this.errorText || this.help || '' }
  },
  watch: {
    datalist (val, old) {
      if (val !== old && val instanceof Array) { this.options = val }
    },
    match (val) { this.eval() },
    options (val, old) {
      if (val !== old) this.$emit('options', val)
    },
    url (val) {
      this._url()
    },
    val (val, old) {
      this.$emit('input', val)
      if (val !== old) {
        if (this.mask instanceof Function) {
          val = this.mask(val || '')
          if (this.val !== val) {
            if (this._timeout.mask) clearTimeout(this._timeout.mask)
            this._timeout.mask = setTimeout(() => {
              this.val = val
            }, isNaN(this.maskDelay) ? 0 : this.maskDelay)
          }
        }
        this.eval()
      }
    },
    valid (val, old) {
      this.$emit('isvalid', val)
      this.$emit(!val ? 'invalid' : 'valid')
      if (this._parent) this._parent.validate()
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
      this.$emit(e.type, e.type == 'input' ? e.target.value : e)
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
      if (this.$parent._formValidator) {
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
      let value = (this.val || '').trim()
      if (!value) { return !this.required }
      if (this.match !== null) { return this.match === value }
      if (value.length < this.minlength) { return false }
      if (this.nativeValidate && !this.input.checkValidity()) { return false }
      if (this.regex) {
        if (!(this.regex instanceof Function ? this.regex(this.value) : this.regex.test(this.value))) { return false }
      }
      return true
    },
    reset() {
      this.value = ''
      this.valid = null
      if (this._timeout.mask) clearTimeout(this._timeout.mask)
      if (this._timeout.eval) clearTimeout(this._timeout.eval)
    }
  },
  created () {
    this._input = true
    this._timeout = {}
    let parent = this.$parent
    while (parent && !parent._formValidator) { parent = parent.$parent }
    if (parent && parent._formValidator) {
      parent.children.push(this)
      this._parent = parent
    }
    this._url = delayer(function () {
      if (!this.url || !this.$http || this._loading) { return }
      this._loading = true
      this.$http.get(this.url).then(response => {
        var data = response.data instanceof Array ? response.data : []
        try { data = JSON.parse(data) } catch (e) {}
        if (this.urlMap) { data = data.map(this.urlMap) }
        this.options = data
        this.loading = false
      }, response => {
        this.loading = false
      })
    }, DELAY)
    if (this.url) this._url()
  },
  mounted () {
    // $(this.input).on('focus', e => { this.$emit('focus', e) }).on('blur', e => {
    //   if (this.canValidate) { this.valid = this.validate() }
    //   this.$emit('blur', e)
    // })
  },
  beforeDestroy () {
    // $(this.input).off()
    if (this._parent) {
      var index = this._parent.children.indexOf(this)
      this._parent.children.splice(index, 1)
    }
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
