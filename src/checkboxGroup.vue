<template>
  <div class="btn-group" data-toggle="buttons">
    <content></content>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Array,
        default() {
          return []
        }
      },
      type: {
        type: String,
        default: 'default'
      }
    }
  }
</script>
