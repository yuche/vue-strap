<template>
  <transition name="fade">
    <div v-show="val" :class="['alert', 'alert-'+type, placement]" :style="{width:width}" role="alert">
      <button v-show="dismissable" type="button" class="close" @click="val = false">
        <span>&times;</span>
      </button>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import {coerce, delayer} from './utils/utils.js'

var DURATION = 0
export default {
  props: {
    dismissable: {type: Boolean, default: false},
    duration: {default: DURATION},
    placement: {type: String},
    type: {type: String},
    value: {type: Boolean, default: true },
    width: {type: String}
  },
  data () {
    return {
      val: this.value
    }
  },
  computed: {
    durationNum () { return coerce.number(this.duration, DURATION) }
  },
  watch: {
    val (val) {
      if (val && this.durationNum > 0) { this._delayClose() }
      this.$emit('input', val)
    },
    value (val) {
      if (this.val !== val) {
        this.val = val
      }
    }
  },
  created () {
    this._delayClose = delayer(function () {
      this.val = false
    }, 'durationNum')
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
