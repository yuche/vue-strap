<template>
  <div role="progressbar"
    v-bind:class="{
    'progress-bar' : true,
    'progress-bar-success':type == 'success',
    'progress-bar-warning':type == 'warning',
    'progress-bar-info':type == 'info',
    'progress-bar-danger':type == 'danger',
    'progress-bar-striped':striped,
    'active':animated
    }"
    v-bind:style="{width: now + '%'}">
    {{label ? now + '%':'' }}
  </div>
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