<template>
  <div class="progress-bar" role="progressbar"
    v-class="
    progress-bar-success:type == 'success',
    progress-bar-warning:type == 'warning',
    progress-bar-info:type == 'info',
    progress-bar-danger:type == 'danger',
    progress-bar-striped:striped,
    active:animated
    "
    v-style="width:now + '%'">
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