<template>
  <div class="panel-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      oneAtATime: {
        type: Boolean,
        default: false
      }
    },
    created() {
      this.$on('isOpenEvent', (child)=> {
        if (this.oneAtATime) {
          this.$children.forEach((item) => {
            if (child !== item ) {
              item.isOpen = false
            }
          })
        }
      })
    }
  }
</script>
