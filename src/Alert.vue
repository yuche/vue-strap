<template>
  <transition name="fade">
    <div v-show="value"
      :class="['alert', 'alert-'+type, placement]"
      :style="{width:width}"
      role="alert"
    >
      <button v-show="coerced.dismissable" type="button" class="close"
        @click="value = false">
        <span>&times;</span>
      </button>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import {coerceMixin} from './utils/coerceMixin.js'
let coerce = {
  dismissable: 'boolean',
  duration: 'number',
  value: 'boolean'
}

export default {
  mixins: [coerceMixin],
  props: {
    dismissable: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 0
    },
    placement: {
      type: String
    },
    value: {
      type: Boolean,
      default: true
    },
    type: {
      type: String
    },
    width: {
      type: String
    }
  },
  watch: {
    value (val, old) {
      if (this._timeout) clearTimeout(this._timeout)
      if (val && this.coerced.duration) {
        this._timeout = setTimeout(() => { this.value = false }, this.coerced.duration)
      }
      this.$emit('input', val)
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter,
.fade-leave-active {
  height: 0;
  opacity: 0;
}
.alert.top {
  position: fixed;
  top: 30px;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 1050;
}
.alert.top-right {
  position: fixed;
  top: 30px;
  right: 50px;
  z-index: 1050;
}
</style>
