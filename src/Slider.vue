<template><div class="item" v-bind:class="{active:show}"><slot></slot></div></template>

<script>
export default {
  computed: {
    index () { return this.$parent.$children.indexOf(this) },
    show () { return this.$parent.index === this.index }
  },
  mounted () {
    if (this.$parent.indicator_list) {
      this.$parent.indicator_list.push(this.index)
    }
  }
}
</script>
