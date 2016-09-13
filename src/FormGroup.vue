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
    valid (val, old) {
      if (val === old) { return }
      this._parent && this._parent.validate()
    }
  },
  methods: {
    focus () {
      this.$els.input.focus()
    },
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
  ready () {
    this.validate()
  },
  beforeDestroy () {
    if (this._parent) this._parent.children.$remove(this)
  }
}
</script>
