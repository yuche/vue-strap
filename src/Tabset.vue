<template>
  <div>
    <ul :class="'nav nav-' + navStyle" role="tablist">
      <template v-for="t in headers">
        <li v-if="!t._tabgroup" :class="{active:t.active, disabled:t.disabled}" @click.prevent="select(t)">
          <a href="#"><slot name="header" v-html="t.header"></slot></a>
        </li>
        <dropdown v-else :text="t.header" :class="{active:t.active}" :disabled="t.disabled">
          <li v-for="tab in t.tabs" :class="{disabled:tab.disabled}"><a href="#" @click.prevent="select(tab)">{{tab.header}}</a></li>
        </dropdown>
      </template>
    </ul>
    <div class="tab-content"><slot></slot></div>
  </div>
</template>

<script>
import dropdown from './Dropdown.vue'
// let coerce = {
//   active: 'number'
// }

export default {
  components: {
    dropdown
  },
  props: {
    active: {type: Number, default: 0},
    effect: {type: String, default: 'fadein'},
    navStyle: {type: String, default: 'tabs'}
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
      this.$emit('active', val)
      this.show = this.tabs[val]
    }
  },
  mounted () {
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