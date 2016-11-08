<template><span><slot></slot></span></template>

<script>
import $ from './utils/NodeList.js'
// let coerce = {
//     enterSubmit: 'boolean',
//     icon: 'boolean'
// }

export default {
  props: {
    enterSubmit: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    lang: {
      type: String,
      default: navigator.language
    },
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
      this.$emit(!val ? 'invalid' : 'valid')
      if (val !== old && this._parent) this._parent.validate()
    }
  },
  methods: {
    validate () {
      let valid = true
      this.children.some(el => {
        let v = el.validate ? el.validate() : el.valid !== undefined ? el.valid : el.required && !~['', null, undefined].indexOf(el.value)
        if (!v) valid = false
        return !valid
      })
      this.valid = valid
      return valid === true
    }
  },
  created () {
    this._formGroup = true
    let parent = this.$parent
    while (parent && !parent._formGroup) { parent = parent.$parent }
    if (parent && parent._formGroup) {
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
