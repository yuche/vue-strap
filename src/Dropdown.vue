<template>
  <div :is="isLi?'li':'div'" v-click-outside="blur"
    :class="[{open:show,disabled:disabled,dropdown:isLi,'input-group-btn':inInput,'btn-group':!isLi&&!inInput}]"
  >
    <slot name="before"></slot>
    <a v-if="isLi" role="button" :class="['dropdown-toggle',buttonSize,{disabled:disabled}]"
      @keyup.esc="show = false"
      @click.prevent="toggle"
    >
      <slot name="button">{{ text }}</slot>
      <span class="caret"></span>
    </a>
    <button v-else type="button" :class="['btn btn-' + type,buttonSize,'dropdown-toggle']" :disabled="disabled"
      @keyup.esc="show = false"
      @click.prevent="toggle"
    >
      <slot name="button">{{ text }}</slot>
      <span class="caret"></span>
    </button>
    <slot name="dropdown-menu">
      <ul class="dropdown-menu"><slot></slot></ul>
    </slot>
  </div>
</template>
<script>
import $ from './utils/NodeList.js'
import ClickOutside from './directives/ClickOutside.js'

export default {
  directives: {
    ClickOutside
  },
  props: {
    disabled: {type: Boolean, default: false},
    size: {type: String, default: null},
    text: {type: String, default: null},
    type: {type: String, default: 'default'},
    value: {type: Boolean, default: false}
  },
  data () {
    var show = this.value
    return {show}
  },
  watch: {
    show (val) { this.$emit('input', val) },
    value (val) { this.show = val }
  },
  computed: {
    buttonSize () { return ~['lg', 'sm', 'xs'].indexOf(this.size) ? 'btn-' + this.size : '' },
    inInput () { return this.$parent._input },
    isLi () { return this.$parent._isTabs || this.$parent._navbar || this.$parent.menu },
    menu () { return !this.$parent || this.$parent.navbar },
    slots () { return this._slotContents },
    submenu () { return this.$parent && (this.$parent.menu || this.$parent.submenu) }
  },
  methods: {
    blur () { this.show = false },
    toggle () {
      if (!this.disabled) { this.show = !this.show }
    }
  },
  mounted () {
    $('ul', this.$el).on('click', 'li>a', e => { this.show = false })
  },
  beforeDestroy () {
    $('ul', this.$el).off()
  }
}
</script>
