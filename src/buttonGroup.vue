<template>
  <div :class="{'btn-group':coerced.buttons,'btn-group-justified':coerced.justified,'btn-group-vertical':coerced.vertical}" :data-toggle="buttons&&'buttons'">
    <slot></slot>
  </div>
</template>

<script>
import {coerceMixin} from './utils/coerceMixin.js'
let coerce = {
  buttons: 'boolean',
  justified: 'boolean',
  vertical: 'boolean'
}

export default {
  mixins: [coerceMixin],
  props: {
    buttons: {
      type: Boolean,
      default: true
    },
    justified: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    value: null,
    vertical: {
      type: Boolean,
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
