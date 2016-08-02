<template>
  <div role="tabpanel" class="tab-pane active" v-show="show"
    :class="{hide:!show}"
    :transition="transition"
  >
    <slot></slot>
  </div>
</template>

<script>
import coerceBoolean from './utils/coerceBoolean.js'

export default {
  props: {
    header: {
      type: String
    },
    disabled: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    }
  },
  computed: {
    index () {
      return this._tabset.tabs.indexOf(this)
    },
    show () {
      return this._tabset && this._tabset.active === this.index
    },
    transition () {
      return this._tabset ? this._tabset.effect : null
    }
  },
  created () {
    let tabset = this
    while (tabset && !tabset.isTabset && tabset.$parent) {
      tabset = tabset.$parent
    }
    if (tabset.isTabset) {
      tabset.tabs.push(this)
      this._tabset = tabset
    } else {
      this._tabset = {}
      console.warn('Warning: "tab" depend on "tabset" to work properly.')
    }
  },
  beforeDestroy () {
    if (this._tabset.active === this.index) { this._tabset.active = 0 }
    this._tabset.tabs.splice(this.index, 1)
  }
}
</script>
