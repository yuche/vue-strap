<template>
  <div :class="['panel',panelType]">
    <div :class="['panel-heading',{'accordion-toggle':inAccordion}]" @click.prevent="inAccordion&&toggle()">
      <slot name="header"><h4 class="panel-title">{{ header }}</h4></slot>
    </div>
    <transition name="collapse">
      <div class="panel-collapse" v-if="isOpen">
        <div class="panel-body">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    header: {type: String},
    isOpen: {type: Boolean, default: null},
    type: {type: String, default : null}
  },
  computed: {
    inAccordion () { return this.$parent && this.$parent._isAccordion },
    panelType () { return 'panel-' + (this.type || (this.$parent && this.$parent.type) || 'default') }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
      this.$emit('open', this)
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
.collapse-enter-active,
.collapse-leave-active {
  transition: max-height .5s ease;
}
.collapse-enter,
.collapse-leave-active {
  max-height: 0 !important;
}
</style>
