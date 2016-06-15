<template>
  <label class="btn"
  v-bind:class="{
    'active':checked,
    'btn-success':style == 'success',
    'btn-warning':style == 'warning',
    'btn-info':style == 'info',
    'btn-danger':style == 'danger',
    'btn-default':style == 'default',
    'btn-primary':style == 'primary'
  }">

    <input type="checkbox" autocomplete="off"
    :checked="checked"
    @click="handleClick"
    />

    <slot></slot>
  </label>
</template>

<script>
import coerceBoolean from './utils/coerceBoolean.js'

  export default {
    props: {
      value: {
        type: String
      },
      checked: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      }
    },
    computed: {
      style() {
        return this.$parent.style
      }
    },
    methods: {
      handleClick() {
        const parent = this.$parent
        const index = parent.value.indexOf(this.value)
        index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1)
        this.checked = !this.checked
      }
    },
    created() {
      if (this.$parent.value.length) {
        this.checked = this.$parent.value.indexOf(this.value) > -1
      } else if (this.checked) {
        this.$parent.value.push(this.value)
      }
    }
  }
</script>
