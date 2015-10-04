<template>
  <div class="btn-group">
    <content select="[data-toggle='dropdown']" ></content>
    <content select="ul.dropdown-menu"></content>
  </div>
</template>
<script>
  import EventListener from './utils/EventListener'
  export default {
    methods: {
      toggleDropdown(e) {
        e.preventDefault()
        this.$el.classList.toggle('open')
      }
    },
    ready() {
      const el = this.$el
      const toggle = el.querySelector('[data-toggle="dropdown"]')
      toggle.style.borderRadius = '4px'
      toggle.addEventListener('click', this.toggleDropdown)
      this._closeEvent = EventListener.listen(window, 'click', (e)=> {
        if (!el.contains(e.target)) el.classList.remove('open')
      })
    },
    beforeDestroy() {
      if (this._closeEvent) this._closeEvent.remove()
    }
  }
</script>
