<template>
  <span ref="trigger">
    <slot></slot>
    <transition :name="effect">
      <div ref="popover" v-if="show" :class="['tooltip',placement]">
        <div class="tooltip-arrow"></div>
        <div class="tooltip-inner">
          <slot name="content"><div v-html="content"></div></slot>
        </div>
      </div>
    </transition>
  </span>
</template>

<script>
import PopoverMixin from './utils/popoverMixins.js'

export default {
  mixins: [PopoverMixin],
  props: {
    effect: {type: String, default: 'scale'},
    trigger: {type: String, default: 'hover'}
  }
}
</script>

<style>
.tooltip.top,
.tooltip.left,
.tooltip.right,
.tooltip.bottom {
  opacity: .9;
}
.fadein-enter {
  animation:fadein-in 0.3s ease-in;
}
.fadein-leave-active {
  animation:fadein-out 0.3s ease-out;
}
@keyframes fadein-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: .9;
  }
}
@keyframes fadein-out {
  0% {
    opacity: .9;
  }
  100% {
    opacity: 0;
  }
}
</style>
