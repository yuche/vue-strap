<template>
  <div :class="{'btn-group':buttons,'btn-group-justified':justified,'btn-group-vertical':vertical}" :data-toggle="buttons&&'buttons'">
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    buttons: true,
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
