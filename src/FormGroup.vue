<template>
  <slot></slot>
</template>

<script>
import {coerce} from './utils/utils.js'
import $ from './utils/NodeList.js'

export default {
  props: {
    valid: {
      twoWay: true,
      default: null
    },
    enterSubmit: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    icon: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    lang: {
      type: String,
      default: navigator.language
    },
    // readonly: {
    //   type: Boolean,
    //   coerce: coerce.boolean,
    //   default: false
    // },
    // required: {
    //   type: Boolean,
    //   coerce: coerce.boolean,
    //   default: false
    // },
    // validationDelay: {
    //   type: Number,
    //   coerce: coerce.number,
    //   default: 250
    // }
  },
  data () {
    return {
      children: [],
      timeout: null
    }
  },
  watch: {
    validate (val) {
      this.eval()
    }
  },
  methods: {
    focus () {
      this.$els.input.focus()
    },
    submit () {
    },
    validate () {
      let valid = true
      this.children.some(el => {
        let v = (el.validate && el.validate()) || (el.required && !~['', null, undefined].indexOf(el.value))
        if (!v) valid = false
        return !valid
      })
      this.valid = valid
    }
  },
  created () {
    this._formGroup = true
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
