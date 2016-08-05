<template>
  <div class="panel-group">
    <slot></slot>
  </div>
</template>

<script>
import coerceBoolean from './utils/coerceBoolean.js'

export default {
  props: {
    type: {
      type: String,
      default: null
    },
    oneAtATime: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    }
  },
  computed: {
    isAccordion () {
      return true
    }
  },
  created () {
    this.$on('isOpenEvent', (child) => {
      if (this.oneAtATime) {
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
