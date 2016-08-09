<template>
  <div :class="{'btn-group':buttons}" :data-toggle="buttons&&'buttons'">
    <slot></slot>
  </div>
</template>

<script>
import coerceBoolean from './utils/coerceBoolean.js'

export default {
  props: {
    value: null,
    buttons: {
      type: Boolean,
      coerce: coerceBoolean,
      default: true
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  created () {
    this._btnGroup = true
  }
}
</script>
