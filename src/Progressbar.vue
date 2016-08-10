<template>
  <div role="progressbar" 
    :class="['progress-bar',{
      'progress-bar-success':type == 'success',
      'progress-bar-warning':type == 'warning',
      'progress-bar-info':type == 'info',
      'progress-bar-danger':type == 'danger',
      'progress-bar-striped':striped,
      'active':animated
    }]"
    :style="{width: now + '%'}"
  >
    {{label ? now + '%' : ''}}
  </div>
</template>

<script>
import coerceBoolean from './utils/coerceBoolean.js'
import coerceNumber from './utils/coerceNumber.js'

export default {
  props: {
    now: {
      type: Number,
      coerce: coerceNumber,
      require: true
    },
    label: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    type: {
      type: String
    },
    striped: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    animated: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    }
  }
}
</script>
