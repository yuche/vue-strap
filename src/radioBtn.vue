<template>
  <label class="btn"
  v-bind:class="{
    'active':active,
    'btn-success':style == 'success',
    'btn-warning':style == 'warning',
    'btn-info':style == 'info',
    'btn-danger':style == 'danger',
    'btn-default':style == 'default',
    'btn-primary':style == 'primary'
  }">

    <input type="radio" autocomplete="off"
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
      sytle() {
        return this.$parent.style
      },
      active() {
        return this.$parent.value === this.value
      }
    },
    methods: {
      handleClick() {
        this.$parent.value = this.value
      }
    },
    created() {
      if (this.$parent.value === this.value) {
        this.checked = true
      } else if (!this.$parent.value.length && this.checked) {
        this.$parent.value = this.value
      }
    }
  }
</script>
