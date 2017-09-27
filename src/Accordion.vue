<template>
  <div class="panel-group">
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      default: null
    },
    oneAtAtime: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openChild (child) {
      if (this.oneAtAtime) {
        this.$children.forEach(item => {
          if (child !== item && item.open) {
            item.open = false;
            this.$emit('panel-closed', this);
          }
        })
      }
    }
  },
  created () {
    this._isAccordion = true
  }
}
</script>
