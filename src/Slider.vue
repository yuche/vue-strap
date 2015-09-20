<template>
    <div class="item">
    <content></content>
  </div>
</template>

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
        return this.activeIndex === this.index
      }
    },
    ready() {
      this.index = [...this.$el.parentNode.children].indexOf(this.$el)
      this.$parent.indicator.push(this.index)
      if (this.index === 0)  {
        this.$el.classList.add('active')
      }
    }
  }
</script>
