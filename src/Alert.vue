<template>
  <div 
    v-show="showAlert" 
    class="alert"
    v-class="
      alert-success:type == 'success',
      alert-warning:type == 'warning',
      alert-info:type == 'info',
      alert-danger:type == 'danger',
    "
    v-transition="fade"
    role="alert">
    <button v-show="dismiss" type="button" class="close" 
      v-on="click:showAlert = false">
      <span >&times;</span>
    </button>
    <content>
    </content>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        require: true,
      },
      dismiss: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        showAlert: true,
      }
    },
  }
</script>

<style>
.fade-transition {
  transition: opacity .15s ease;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>