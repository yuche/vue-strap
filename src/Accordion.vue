<template>
  <div class="panel-group">
    <slot></slot>
  </div>
</template>

<script>
import {coerceMixin} from './utils/coerceMixin.js'
let coerce = {
  oneAtAtime: 'boolean'
}

export default {
  mixins: [coerceMixin],
  props: {
    type: {
      type: String,
      default: null
    },
    oneAtAtime: {
      type: Boolean,
      default: false
    }
  },
  created () {
    this._isAccordion = true
    this.$on('isOpenEvent', (child) => {
      if (this.coerced.oneAtAtime) {
        this.$children.forEach((item) => {
          if (child !== item) {
            item.isOpen = false
          }
        })
      }
    })
  }
}
</script>
