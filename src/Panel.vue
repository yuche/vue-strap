<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a class="accordion-toggle"
          @click="toggle()">
          <slot name="header"> 
            {{ header }}
          </slot>
        </a>
      </h4>
    </div>
    <div class="panel-collapse"
      v-el:panel
      v-show="isOpen"
      transition="collapse"
    >
      <div class="panel-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import coerceBoolean from './utils/coerceBoolean.js'

export default {
  props: {
    isOpen: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    header: {
      type: String
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
      this.$dispatch('isOpenEvent', this)
    }
  },
  transitions: {
    collapse: {
      afterEnter (el) {
        el.style.maxHeight = ''
      },
      beforeLeave (el) {
        el.style.maxHeight = el.offsetHeight + 'px'
        // Recalculate DOM before the class gets added.
        return el.offsetHeight
      }
    }
  }
}
</script>

<style>
.accordion-toggle {
  cursor: pointer;
}
.collapse-transition {
  transition: max-height .5s ease;
  overflow: hidden;
}
.collapse-enter, .collapse-leave {
  max-height: 0!important;
}
</style>
