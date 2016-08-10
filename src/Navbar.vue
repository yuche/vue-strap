<template>
  <nav v-el:navbar :class="['navbar',{
    'navbar-inverse':(type == 'inverse'),
    'navbar-default':(type == 'default'),
    'navbar-fixed-top':(placement === 'top'),
    'navbar-fixed-bottom':(placement === 'bottom'),
    'navbar-static-top':(placement === 'static')
  }]">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#{{ id }}" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <slot name="brand"></slot>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="{{ id }}">
        <ul class="nav navbar-nav">
          <slot></slot>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <slot name="right"></slot>
        </ul>
      </div>
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
import EventListener from './utils/EventListener'

export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    placement: {
      type: String,
      default: 'top'
    }
  },
  data () {
    return {
      id: 'bs-example-navbar-collapse-1',
      styles: {}
    }
  },
  computed: {
    navbar () {
      return true
    }
  },
  methods: {
    toggleCollapse (e) {
      e.preventDefault()

      // collapse data-target
      var tmp = this.$el.querySelector('[data-target]')
      var id = tmp.getAttribute('data-target')
      var o = document.getElementById(id.substring(1))
      o.classList.toggle('collapse')
    }
  },
  ready () {
    const dropdowns = this.$el.querySelector('.dropdown > .dropdown-toggle')
    const toggle = this.$el.querySelector('[data-toggle="collapse"]')
    if (dropdowns) {
      // Al hacer click en un dropdown
      dropdowns.addEventListener('click', (e) => {
        e.preventDefault()
        let dropDown = e.target.offsetParent
        let dropDownItems = dropDown.nextElementSibling.children
        dropDown.classList.add('open')

        // Al hacer click en un elemento del dropdown
        if (dropDownItems) {
          for (let i = 0; i < dropDownItems.length; i++) {
            dropDownItems[i].addEventListener('click', () => {
              dropDown.offsetParent.classList.remove('open')
            })
          }
        }

        // dropdowns.addEventListener('focusout',function(){
        //   dropDown.target.offsetParent.classList.remove('open')
        // });
      })
    }
    if (toggle) {
      toggle.style.borderRadius = '4px'
      toggle.addEventListener('click', this.toggleCollapse)
    }
    this._closeEvent = EventListener.listen(window, 'click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.$el.classList.remove('open')
      }
    })
  },
  beforeDestroy () {
    if (this._closeEvent) {
      this._closeEvent.remove()
    }
  }
}
</script>
