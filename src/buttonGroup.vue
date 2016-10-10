<template>
  <div :class="{'btn-group':buttons,'btn-group-justified':justified,'btn-group-vertical':vertical}" :data-toggle="buttons&&'buttons'">
    <slot></slot>
  </div>
</template>

<script>
// let coerce = {
//   buttons: 'boolean',
//   justified: 'boolean',
//   vertical: 'boolean'
// }

export default {
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
        this.$emit('input', val)
        this.$children.forEach(el => {
          if (el._inGroup && el.eval) el.eval()
        })
      }
    }
  },
  created () {
    this._btnGroup = true
  }
}
</script>
