<template>
  <!-- Nav tabs -->
  <ul class="nav nav-{{navStyle}}" role="tablist">
    <template v-for="t in headers">
      <li v-if="!t._tabgroup" :class="{active:t.active, disabled:t.disabled}" @click.prevent="select(t)">
        <a href="#"><slot name="header">{{{t.header}}}</slot></a>
      </li>
      <dropdown v-else :text="t.header" :class="{active:t.active}" :disabled="t.disabled">
        <li v-for="tab in t.tabs" :class="{disabled:tab.disabled}"><a href="#" @click.prevent="select(tab)">{{tab.header}}</a></li>
      </dropdown>
    </template>
  </ul>
  <div class="tab-content" v-el:tab-content>
    <slot></slot>
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
    navStyle: {
      type: String,
      default: 'tabs'
    },
    effect: {
      type: String,
      default: 'fadein'
    },
    active: {
      twoWay: true,
      type: Number,
      coerce: coerce.number,
      default: 0
    }
  },
  data () {
    return {
      show: null,
      headers: [],
      tabs: []
    }
  },
  created () {
    this._tabset = true
  },
  watch: {
    active (val) {
      this.show = this.tabs[val]
    }
  },
  ready () {
    this.show = this.tabs[this.active]
  },
  methods: {
    select (tab) {
      if (!tab.disabled) {
        this.active = tab.index
      }
    }
  }
}
</script>

<style scoped>
.nav-tabs {
  margin-bottom: 15px;
}
</style>