<template>
  <label class="btn"
  v-bind:class="{
    'active':active,
    'btn-success':type == 'success',
    'btn-warning':type == 'warning',
    'btn-info':type == 'info',
    'btn-danger':type == 'danger',
    'btn-default':type == 'default',
    'btn-primary':type == 'primary'
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
      type() {
        return this.$parent.type
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
