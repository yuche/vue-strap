<template>
  <div :class="{'btn-group':buttons,'btn-group-justified':justified,'btn-group-vertical':vertical}" :data-toggle="buttons&&'buttons'">
    <slot></slot>
  </div>
</template>

<script>
import {coerce} from './utils/utils.js'

export default {
  props: {
    value: null,
    buttons: {
      type: Boolean,
      coerce: coerce.boolean,
      default: true
    },
    justified: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    vertical: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    }
  },
  watch: {
    value: {
      deep: true,
      handler (val) {
        this.$children.forEach((el) => {
          if (el.group && el.eval) el.eval()
        })
      }
    }
  },
  created () {
    this._btnGroup = true
  }
}
</script>
