<template><li v-el:v v-if="loading"><slot></slot></li></template>
<script>
export default {
  props: {value: null},
  data () { return {loading: true} },
  ready () {
    if (this.$parent._select) {
      if (!this.$parent.options) { this.$parent.options = [] }
      this.$parent.options.push({
        value: this.value,
        label: this.$els.v.innerHTML
      })
      this.loading = false
    } else {
      console.warn('options only work inside a select component')
    }
  }
}
</script>