<template>
  <div class="panel {{panelType}}">
    <div :class="['panel-heading',{'accordion-toggle':inAccordion}]" @click.prevent="inAccordion&&toggle()">
      <slot name="header">
        <h4 class="panel-title">{{ header }}</h4>
      </slot>
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
import {coerce} from './utils/utils.js'

export default {
  props: {
    header: {
      type: String
    },
    isOpen: {
      type: Boolean,
      coerce: coerce.boolean,
      default: null
    },
    type: {
      type: String,
      default : null
    }
  },
  computed: {
    inAccordion () {
      return this.$parent && this.$parent._isAccordion
    },
    panelType () {
      return 'panel-' + (this.type || (this.$parent && this.$parent.type) || 'default')
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
        el.style.overflow = ''
      },
      beforeLeave (el) {
        el.style.maxHeight = el.offsetHeight + 'px'
        el.style.overflow = 'hidden'
        // Recalculate DOM before the class gets added.
        return el.offsetHeight
      }
    }
  },
  created () {
    if (this.isOpen === null) {
      this.isOpen = !this.inAccordion
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
}
.collapse-enter, .collapse-leave {
  max-height: 0!important;
}
</style>
