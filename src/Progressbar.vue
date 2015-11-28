<template>
  <progress
    v-bind:class="{
    'progress' : true,
    'progress-success':type == 'success',
    'progress-warning':type == 'warning',
    'progress-info':type == 'info',
    'progress-danger':type == 'danger',
    'progress-striped':striped,
    'progress-animated':animated
    }"
    v-bind:value="now"
    max="100"
  >
    {{label ? now + '%':'' }}
  </progress>
</template>

<script>
  export default {
    props: {
      now: {
        type: Number,
        require: true
      },
      label: {
        type: Boolean,
        default: false
      },
      type: {
        type: String
      },
      striped: {
        type: Boolean,
        default: false
      },
      animated: {
        type: Boolean,
        default: false
      }
    }
  }
</script>