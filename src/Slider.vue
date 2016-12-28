<template><div class="item"><slot></slot></div></template>

<script>
export default {
  data() {
    return {
      index: 0,
      show: false,
    }
  },
  computed: {
    show() {
      return this.$parent.index === this.index
    }
  },
  mounted () {
    for (var c in this.$parent.$children) {
      if (this.$parent.$children[c] === this) {
          this.index = parseInt(c,10);
          break;
      }
    }
    //this.index = [...this.$el.parentNode.children].indexOf(this.$el)
    if( this.$parent.indicator_list )
      this.$parent.indicator_list.push(this.index)
      
    if (this.index === 0) {
      this.$el.classList.add('active')
    }
  }
}
</script>
