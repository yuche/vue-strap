<template>
  <div role="tabpanel" class="tab-pane"
  v-class="hide:!show"
  v-show="show"
  v-transition="{{transition}}"
  >
    <content></content>
  </div>
</template>

<script>
  export default {
    props: {
      header: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        index: 0,
        show: false
      }
    },
    computed: {
      show() {
        return this.$parent.activeIndex === this.index
      },
      transition() {
        return this.$parent.effect
      }
    },
    created() {
      this.$parent.renderData.push({
        header: this.header,
        disabled: this.disabled
      })
    },
    ready() {
      this.index = [...this.$el.parentNode.children].indexOf(this.$el)
    }
  }
</script>

<style scoped>
  .tab-content > .tab-pane {
    display: block;
  }
  .tab-content > .tab-pane.hide {
    position: absolute;
  }
</style>
