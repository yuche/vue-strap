<template>
  <div :class="{'btn-group':buttons,'btn-group-justified':justified,'btn-group-vertical':vertical}" :data-toggle="buttons&&'buttons'">
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    buttons: true,
    justified: {type: Boolean, default: false},
    type: {type: String, default: 'default'},
    value: null,
    vertical: {type: Boolean, default: false}
  },
  data () {
    var val = this.value
    this._btnGroup = true
    return {
      val
    }
  },
  watch: {
    val (val) {
      this.$emit('input', val)
    }
  }
}
</script>
