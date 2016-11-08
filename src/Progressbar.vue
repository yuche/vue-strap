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
import {coerce} from './utils/utils.js'

export default {
  props: {
    now: {
      type: Number,
      coerce: coerce.number,
      required: true
    },
    label: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    type: {
      type: String
    },
    striped: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    animated: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    }
  }
}
</script>
