<template>
<div class="panel-group">
  <content></content>
</div>
</template>
<script>

  export default {
    props: {
      oneAtATime: {
        type: Boolean,
        default: false
      }
    }
  }

</script>