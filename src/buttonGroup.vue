<template>
  <div class="btn-group" data-toggle="buttons">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: null,
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
