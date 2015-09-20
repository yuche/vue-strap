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
      activeIndex() {
        return this.$parent.activeIndex
      },
      show() {
        return this.activeIndex === this.index
      }
    },
    // watch: {
    //   activeIndex(newVal, oldVal) {
    //     const sibling = this.$el.parentNode.children
    //     console.log(sibling)
    //     const prevSelectedElement = sibling[oldVal]
    //     const selectedElement = sibling[newVal]
    //     if (newVal > oldVal) {
    //       selectedElement.classList.add('next')
    //       var x = selectedElement.clientHeight
    //       prevSelectedElement.classList.add('left')
    //       selectedElement.classList.add('left')
    //       setTimeout(()=> {
    //         [...sibling].forEach((el)=> el.className = 'item')
    //         selectedElement.classList.add('active')
    //       }, 650)
    //     }
    //   }
    // },
    ready() {
      this.index = [...this.$el.parentNode.children].indexOf(this.$el)
      this.$parent.indicator.push(this.index)
      if (this.index === 0)  {
        this.$el.classList.add('active')
      }
    }
  }
</script>
