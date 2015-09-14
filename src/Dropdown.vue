<template>
    <content select=".dropdown-toggle"></content>
    <content select="ul.dropdown-menu"></content>
</template>
<script>
  import Utils from './utils.js'
  export default {
    methods: {
      toggleDropdown(e) {
        e.preventDefault()
        e.target.parentNode.classList.toggle('open')
      }
    },
    ready() {
      const toggleTarget = this.$el.querySelector('.dropdown-toggle')
      this.$el.querySelector('.dropdown-toggle').addEventListener('click', this.toggleDropdown)
      Utils.detectClickOutside(toggleTarget, () => toggleTarget.parentNode.classList.remove('open'))
    }
  }
</script>