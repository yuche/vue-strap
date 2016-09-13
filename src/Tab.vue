<template>
  <div role="tabpanel" class="tab-pane active" v-show="show"
    :class="{hide:!show}"
    :transition="transition"
  >
    <slot></slot>
  </div>
</template>

<script>
import {coerce} from './utils/utils.js'

export default {
  props: {
    header: {
      type: String
    },
    disabled: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    }
  },
  computed: {
    active () {
      return this._tabset.show === this
    },
    index () {
      return this._tabset.tabs.indexOf(this)
    },
    show () {
      return this._tabset && this._tabset.show === this
    },
    transition () {
      return this._tabset ? this._tabset.effect : null
    }
  },
  created () {
    this._ingroup = this.$parent && this.$parent._tabgroup
    let tabset = this
    while (tabset && tabset._tabset!==true && tabset.$parent) {
      tabset = tabset.$parent
    }
    if (!tabset._tabset) {
      this._tabset = {}
      console.warn('Warning: "tab" depend on "tabset" to work properly.')
    } else {
      tabset.tabs.push(this)
      if (!this._ingroup) {
        tabset.headers.push(this)
      } else {
        if (!~tabset.headers.indexOf(this.$parent)) {
          tabset.headers.push(this.$parent)
        }
      }
      this._tabset = tabset
    }
    if (this._ingroup) {
      this.$parent.tabs.push(this)
    }
  },
  beforeDestroy () {
    if (this._tabset.active === this.index) { this._tabset.active = 0 }
    this._tabset.tabs.$remove(this)
  }
}
</script>
