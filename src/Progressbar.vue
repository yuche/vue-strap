<template>
  <div v-text="labelBool ? nowNum+'%' : null"
    :style="{width: nowNum+'%'}"
    :class="['progress-bar', 'progress-bar-'+type, {active:animated, 'progress-bar-striped':striped}]"
  ></div>
</template>

<script>
import {coerce} from './utils/utils.js'

export default {
  props: {
    animated: {type: Boolean, default: false},
    label: {default: false},
    now: {required: true},
    striped: {type: Boolean, default: false},
    type: {type: String}
  },
  computed: {
    labelBool () { return coerce.boolean(this.label) },
    nowNum () { return coerce.number(this.now) }
  }
}
</script>
