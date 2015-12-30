<template>
  <div role="tabpanel" class="tab-pane"
      v-bind:class="{hide:!show}"
      v-show="show"
      :transition="transition"
  >
    <slot></slot>
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
        return (this.$parent.activeIndex == this.index);
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
        for (var c in this.$parent.$children)
        {
            if (this.$parent.$children[c].$el == this.$el)
            {
                this.index= c;
                break;
            }
        }
    }
  }
</script>

<style scoped>
  .tab-content > .tab-pane {
    display: block;
  }
</style>
