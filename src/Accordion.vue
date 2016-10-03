<template>
  <div class="panel-group">
    <slot></slot>
  </div>
</template>

<script>
import {coerce} from './utils/utils.js'

export default {
  props: {
    type: {
      type: String,
      default: null
    },
    oneAtAtime: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    }
  },
  created () {
    this._isAccordion = true
    this.$on('isOpenEvent', (child) => {
      if (this.oneAtAtime) {
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
