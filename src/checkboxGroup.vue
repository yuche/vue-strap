<template>
  <div class="btn-group" data-toggle="buttons">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  created () {
    this._checkboxGroup = true
  }
}
</script>
