<template>
  <nav :class="['navbar', 'navbar-'+type, placement === 'static'?'navbar-static-top':'navbar-fixed-'+placement]">
    <div class="container-fluid">
      <div class="navbar-header">
        <button v-if="!$slots.collapse" type="button" class="navbar-toggle collapsed" aria-expanded="false" @click="toggleCollapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <slot name="collapse"></slot>
        <slot name="brand"></slot>
      </div>
      <div :class="['navbar-collapse',{collapse:collapsed}]">
        <ul class="nav navbar-nav">
          <slot></slot>
        </ul>
        <ul v-if="$slots.left" class="nav navbar-nav navbar-left">
          <slot name="left"></slot>
        </ul>
        <ul v-if="$slots.right" class="nav navbar-nav navbar-right">
          <slot name="right"></slot>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import $ from './utils/NodeList.js'

export default {
  props: {
    type: {type: String, default: 'default'},
    placement: {type: String, default: ''}
  },
  data () {
    return {
      id: 'bs-example-navbar-collapse-1',
      collapsed: true,
      styles: {}
    }
  },
  computed: {
    slots () {
      return this._slotContents
    }
  },
  methods: {
    toggleCollapse (e) {
      e && e.preventDefault()
      this.collapsed = !this.collapsed
    }
  },
  created () {
    this._navbar = true
  },
  mounted () {
    try {
      let $dropdown = $('.dropdown>[data-toggle="dropdown"]',this.$el).parent()
      if( $dropdown ) {
        $dropdown.on('click', '.dropdown-toggle', e => {
          e.preventDefault()
          $dropdown.each(content => {
            if (content.contains(e.target)) 
              content.classList.toggle('open')
          })
        }).on('click', '.dropdown-menu>li>a', e => {
          $dropdown.each(content => {
            if (content.contains(e.target)) 
              content.classList.remove('open')
          })
        }).onBlur((e) => {
          $dropdown.each(content => {
            if (!content.contains(e.target)) 
              content.classList.remove('open')
          })
        })
      }
    } catch( ex ) {
      console.log( 'error finding dropdown')
    }

    $(this.$el).on('click touchstart','li:not(.dropdown)>a', e => {
      setTimeout(() => { this.collapsed = true }, 200)
    }).onBlur(e => {
      if (!this.$el.contains(e.target)) { this.collapsed = true }
    })
    let height = this.$el.offsetHeight
    if (this.placement === 'top') {
      document.body.style.paddingTop = height + 'px'
    }
    if (this.placement === 'bottom') {
      document.body.style.paddingBottom = height + 'px'
    }
    if (this.$slots.collapse) 
      $('[data-toggle="collapse"]',this.$el).on('click', e => this.toggleCollapse(e))
  },
  beforeDestroy () {
    $('.dropdown',this.$el).off('click').offBlur()
    if (this.$slots.collapse) $('[data-toggle="collapse"]',this.$el).off('click')
  }
}
</script>
