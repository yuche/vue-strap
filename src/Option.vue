<template>
  <li style="position:relative">
    <a @mousedown.prevent="handleClick" style="cursor:pointer">
      <span v-el:v><slot></slot></span>
      <span class="glyphicon glyphicon-ok check-mark" v-show="chosen"></span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      chosen: false
    }
  },
  computed: {
    chosen () {
      return this.$parent.value.indexOf(this.value) !== -1
    }
  },
  methods: {
    handleClick () {
      const parent = this.$parent
      if (parent.multiple) {
        const index = parent.value.indexOf(this.value)
        parent.value[~index ? '$remove' : 'push'](this.value)
      } else {
        parent.value = [this.value]
        parent.show = false
      }
    }
  }
}
</script>

<style scoped>
a span.check-mark {
  position: absolute;
  display: inline-block;
  right: 15px;
  margin-top: 5px;
}
</style>
