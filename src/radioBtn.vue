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
  export default {
    props: {
      value: {
        type: String
      },
      checked: {
        type: Boolean,
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
      if (this.checked) this.$parent.value = this.value
    }
  }
</script>