<template><li v-el:v v-if="loading"><slot></slot></li></template>
<script>
export default {
  props: {value: null},
  data () { return {loading: true} },
  ready () {
    if (this.$parent._select) {
      if (!this.$parent.options) { this.$parent.options = [] }
      let el = {}
      el[this.$parent.optionsLabel] = this.$els.v.innerHTML
      el[this.$parent.optionsValue] = this.value
      this.$parent.options.push(el)
      this.loading = false
    } else {
      console.warn('options only work inside a select component')
    }
  }
}
</script>