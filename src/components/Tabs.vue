<template>
  <div tabs>
    <ul :class="navStyleClass" role="tablist">
      <template v-for="header in headers">
        <li v-if="header._isTab" :class="{active:header.active, disabled:header.disabled}" @click.prevent="select(header)">
          <slot name="header"><a href="#" v-html="header.header"></a></slot>
        </li>
        <dropdown v-if="header._isTabGroup" :text="header.header" :class="{active:header.active}" :disabled="header.disabled">
          <li v-for="tab in header.tabs" :class="{disabled:tab.disabled}"><a href="#" @click.prevent="select(tab)">{{tab.header}}</a></li>
        </dropdown>
      </template>
    </ul>
    <div class="tab-content"><slot></slot></div>
  </div>
</template>

<script>
import {coerce} from './utils/utils.js'
import dropdown from './Dropdown.vue'

export default {
  components: {
    dropdown
  },
  props: {
    // effect: {type: String, default: 'fadein'},
    justified: false,
    navStyle: {type: String, default: null},
    value: {type: Number, default: 0}
  },
  data () {
    var index = this.value || 0
    return {
      index,
      headers: [],
      tabs: []
    }
  },
  watch: {
    index (val) {
      this.$emit('active', val)
      this.$emit('input', val)
    },
    value (val) {
      this.index = val
    }
  },
  computed: {
    navStyleClass () {
      return [
        'nav',
        ~['pills', 'stacked'].indexOf(this.navStyle) ? 'nav-' + this.navStyle : 'nav-tabs',
        {
          'nav-justified': coerce.boolean(this.justified),
          'nav-pills': this.navStyle === 'stacked'
        }
      ]
    },
    show () { return this.tabs[this.index] || this.tabs[0] }
  },
  methods: {
    select (tab) {
      if (!tab.disabled) {
        this.index = this.tabs.indexOf(tab)
      }
    }
  },
  created () {
    this._isTabs = true
  }
}
</script>

<style>
[tabs] > .tab-content {
  margin: 15px 0;
}
</style>