<template><span><slot></slot></span></template>

<script>
import $ from './utils/NodeList.js'

export default {
  props: {
    enterSubmit: {type: Boolean, default: false},
    icon: {type: Boolean, default: false},
    lang: {type: String, default: navigator.language},
    value: null
  },
  data () {
    return {
      children: [],
      valid:null,
      timeout: null
    }
  },
  watch: {
    valid (val, old) {
      this.$emit('isvalid', val)
      this.$emit('input', val)
      this.$emit(!val ? 'invalid' : 'valid')
      if (val !== old && this._parent) this._parent.validate()
    }
  },
  methods: {
    validate () {
      let invalid = !this.children.every(el => {
        return (
          el.validate ? el.validate() :
          el.valid !== undefined ? el.valid :
          el.required && !~['', null, undefined].indexOf(el.value)
        )
      })
      this.valid = !invalid
      return !invalid
    }
  },
  created () {
    this._formValidator = true
    let parent = this.$parent
    while (parent && !parent._formValidator) { parent = parent.$parent }
    if (parent && parent._formValidator) {
      parent.children.push(this)
      this._parent = parent
    }
  },
  mounted () {
    this.validate()
  },
  beforeDestroy () {
    if (this._parent) {
      var index = this._parent.children.indexOf(this)
      this._parent.children.splice(index, 1)
    }
  }
}
</script>
