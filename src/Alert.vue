<template>
  <transition name="fade">
    <div v-show="value"
      :class="['alert', 'alert-'+type, placement]"
      :style="{width:width}"
      role="alert"
    >
      <button v-show="dismissable" type="button" class="close"
        @click="value = false">
        <span>&times;</span>
      </button>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import {coerce} from './utils/utils.js'

export default {
  props: {
    dismissable: {type: Boolean, default: false},
    duration: {default: null},
    placement: {type: String},
    type: {type: String},
    value: {type: Boolean, default: true },
    width: {type: String}
  },
  computed: {
    durationNum () { return coerce.number(this.duration, 0) }
  },
  watch: {
    value (val, old) {
      if (this._timeout) clearTimeout(this._timeout)
      if (val && this.duration) {
        this._timeout = setTimeout(() => { this.value = false }, this.duration)
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
