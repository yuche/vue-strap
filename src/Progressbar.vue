<template>
  <div role="progressbar"
    :class="['progress-bar','progress-bar-'+type,{
      'progress-bar-striped':striped,
      'active':animated
    }]"
    :style="{width: now + '%'}"
  >
    {{label ? now + '%' : ''}}
  </div>
</template>

<script>
// let coerce = {
//   animated: 'boolean',
//   label: 'boolean',
//   now: 'number',
//   striped: 'boolean'
// }

export default {
  props: {
    animated: {type: Boolean, default: false},
    label: {type: Boolean, default: false},
    now: {type: Number, required: true},
    striped: {type: Boolean, default: false},
    type: {type: String}
  }
}
</script>
