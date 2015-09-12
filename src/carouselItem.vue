<template>
  <div class="item"
    v-class="active:show">
    <content></content>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        index: null
      }
    },
    watch: {
      'index': (val) => {
        console.log('change' + val)
      }
    },
    created() {
      // console.log(this)
    }
  }
</script>

