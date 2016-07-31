<template>
  <div>
    <!-- Nav tabs -->
    <ul class="nav nav-{{navStyle}}" role="tablist">
      <li v-for="t in tabs" v-if="t"
        :class="{
          'active': ($index === active),
          'disabled': t.disabled
        }"
        @click.prevent="select($index)"
      >
        <a href="#">
          <slot name="header">
            {{{t.header}}}
          </slot>
        </a>
      </li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content" v-el:tab-content>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import coerceNumber from './utils/coerceNumber.js'

export default {
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
      type: Number,
      coerce: coerceNumber,
      default: 0
    }
  },
  data () {
    return {
      tabs: []
    }
  },
  computed: {
    isTabset () {
      return true
    }
  },
  methods: {
    select (index) {
      if (!this.tabs[index].disabled) {
        this.active = index
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
