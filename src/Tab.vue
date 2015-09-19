<template>
  <div role="tabpanel" class="tab-pane"
  v-show="show"
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

<style>
  .tab-content > .tab-pane {
    display: block;
  }
</style>