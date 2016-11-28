<template>
  <div :class="{'btn-group':buttons,'btn-group-justified':justified,'btn-group-vertical':vertical}" :data-toggle="buttons&&'buttons'">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    buttons: {default: true},
    justified: {type: Boolean, default: false},
    type: {type: String, default: 'default'},
    value: {default: null},
    vertical: {type: Boolean, default: false}
  },
  data () {
    this._btnGroup = true
    return {
      val: this.value
    }
  },
  watch: {
    val (val) {
      this.$emit('input', val)
    }
  }
}
</script>
