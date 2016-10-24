<template>
  <div ref="panel" role="tabpanel" :class="['tab-pane',{'active fade':active,'in':fadein}]"><slot></slot></div>
</template>

<script>
export default {
  props: {
    disabled: {type: Boolean, default: false},
    header: {type: String}
  },
  data () {
    return {
      fadein: false
    }
  },
  computed: {
    active () {
      var active = !this._tabs || this._tabs.show === this
      this.fadein = false
      if (active) {
        setTimeout(() => { this.fadein = true }, 0)
      }
      return active
    },
    index () { return this._tabs.tabs.indexOf(this) },
    transition () { return this._tabs ? this._tabs.effect : null }
  },
  created () {
    this._isTab = true
    let tabs = this
    while (!this._tabs && tabs.$parent) {
      if (tabs._isTabGroup) {
        tabs.tabs.push(this)
        this._tabGroup = tabs
      }
      if (tabs._isTabs) {
        tabs.tabs.push(this)
        this._tabs = tabs
        if (!this._tabGroup) tabs.headers.push(this)
      }
      tabs = tabs.$parent
    }
    if (!this._tabs) throw Error('tab depend on tabs.')
  },
  beforeDestroy () {
    if (this._tabGroup) {
      this._tabGroup.tabs = this._tabGroup.tabs.filter(el => el !== this)
    }
    if (this._tabs) {
      this._tabs.tabs = this._tabs.tabs.filter(el => el !== this)
    }
    if (this._tabs) {
      if (this._tabs.active === this.index) { this._tabs.index = 0 }
      if (this._ingroup) {
        let id = this.$parent.tabs.indexOf(this)
        if (~id) this.$parent.tabs.splice(id, 1)
      }
    }
    if (this._tabs) {
      let id = this._tabs.tabs.indexOf(this)
      if (~id) this._tabs.tabs.splice(id, 1)
    }
  }
}
</script>
