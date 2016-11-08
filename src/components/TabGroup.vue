<template><span><slot></slot></span></template>

<script>
export default {
  props: {
    disabled: {type: Boolean, default: false},
    header: {type: String}
  },
  data () {
    return {
      show: false,
      tabs: []
    }
  },
  computed: {
    active () { return ~this.tabs.indexOf(this._tabs.show) }
  },
  methods: {
    blur () { this.show = false },
    toggle () { this.show = !this.show }
  },
  created () {
    this._isTabGroup = true
    if (this.$parent) {
      if (this.$parent._isTabGroup) throw Error('Can\'t nest tab-groups.')
      if (!this.$parent._isTabs) throw Error('tab-group depend on tabs.')
    }
    this._tabs = this.$parent
    this._tabs.headers.push(this)
  }
}
</script>

<style>
.tab-content .tab-pane { display: none; }
.tab-content .tab-pane.active { display: block; }
</style>
