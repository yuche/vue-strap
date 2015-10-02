<template>
<div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a class="accordion-toggle"
          v-on="click:toggleIsOpen(this)">
           {{ header }}
        </a>
      </h4>
    </div>
    <div class="panel-collapse"
      v-show="isOpen"
      v-transition="collapse">
      <div class="panel-body">
        <content></content>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        default: false
      },
      header: {
        type: String
      }
    },
    methods: {
      toggleIsOpen() {
        this.isOpen = !this.isOpen
        const oneAtATime = this.$parent.$data.oneAtATime

        this.$parent.$children.forEach( BrotherComponent => {
          if (BrotherComponent !== this && oneAtATime) {
            BrotherComponent.$data.isOpen = false
          }
        })
      }
    }
  }
</script>

<style>
.accordion-toggle {
  cursor: pointer;
}
.collapse-transition {
transition: max-height .5s ease;
max-height: 150px;
overflow: hidden;
}
.collapse-enter, .collapse-leave {
  max-height: 0;
}
</style>
