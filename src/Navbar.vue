<template>
  <nav class="navbar" :class="{
        'navbar-inverse':(type == 'inverse'),
        'navbar-default':(type == 'default'),
        'navbar-fixed-top':      (placement === 'top'),
        'navbar-fixed-bottom':  (placement === 'bottom'),
        'navbar-static-top':  (placement === 'static')
      }">
     <div class="container-fluid">
       <!-- Brand and toggle get grouped for better mobile display -->
       <div class="navbar-header">
         <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
           <span class="sr-only">Toggle navigation</span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
         </button>
         <slot name="brand"></slot>
       </div>

       <!-- Collect the nav links, forms, and other content for toggling -->
       <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
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
import EventListener from './utils/EventListener';

  export default {
    props:{
      type: {
        type: String,
        value="default"
      },
      placement: ''
    },
    methods: {
      toggleCollapse(e) {
        e.preventDefault();

        // collapse data-target
        var tmp = this.$el.querySelector('[data-target]');
        var id = tmp.getAttribute('data-target');
        var o = document.getElementById(id.substring(1));
        o.classList.toggle('collapse');
      }
    },
    ready() {
      const toggle = this.$el.querySelector('[data-toggle="collapse"]');
      if (toggle) {
        toggle.style.borderRadius = '4px';
        toggle.addEventListener('click', this.toggleCollapse);
      }
      this._closeEvent = EventListener.listen(window, 'click', (e)=> {
        if (!this.$el.contains(e.target)) {
          this.$el.classList.remove('open');
        }
      })
    },
    beforeDestroy() {
      if (this._closeEvent) {
        this._closeEvent.remove();
      }
    }
  }
</script>
