<template>
  <li v-if="$parent.navbar||$parent.menu||$parent._tabset" v-el:dropdown class="dropdown {{disabled&&'disabled'}}" :class="classes"
    @click="show ? blur() : toggle()"
  >
      <a v-if="text" v-el:btn class="dropdown-toggle" role="button" :class="{disabled: disabled}">
        {{ text }}
        <span class="caret"></span>
      </a>
      <button type="button" class="secret" v-el:btn
        @blur="blur()"
        @keyup.esc="show = false"
        :disabled="disabled"
      ></button>
      <slot v-else name="button"></slot>
    <slot v-if="slots['dropdown-menu']" name="dropdown-menu"></slot>
    <ul v-else class="dropdown-menu" @click="unblur">
      <slot></slot>
    </ul>
  </li>
  <div v-else v-el:dropdown class="btn-group" :class="classes" @click="unblur">
      <button v-if="text" v-el:btn type="button" class="btn btn-{{type||'default'}} dropdown-toggle"
        @click="toggle()"
        @blur="blur"
        @keyup.esc="blur"
        :disabled="disabled"
      >
        {{ text }}
        <span class="caret"></span>
      </button>
      <slot v-else name="button"></slot>
    <slot v-if="slots['dropdown-menu']" name="dropdown-menu"></slot>
    <ul v-else class="dropdown-menu" @click="unblur">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
import coerceBoolean from './utils/coerceBoolean.js'

export default {
  props: {
    'class': null,
    show: {
      twoWay: true,
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    disabled: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    text: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    }
  },
  computed: {
    classes () {
      return [{open: this.show}, this.class]
    },
    menu () {
      return !this.$parent || this.$parent.navbar
    },
    submenu () {
      return this.$parent && (this.$parent.menu || this.$parent.submenu)
    },
    slots () {
      return this._slotContents
    }
  },
  methods: {
    blur () {
      this._hide = setTimeout(() => {
        this._hide = false
        this.show = false
      }, 100)
    },
    unblur () {
      if (this._hide) {
        clearTimeout(this._hide)
        this._hide = false
      }
    },
    focus () {
      let el
      if (!this.text) {
        el = this.$els.dropdown.querySelector('[data-toggle="dropdown"]')
      } else {
        el = this.$els.btn
      }
      if (el) el.focus()
    },
    toggle (e) {
      if (e) e.preventDefault()
      if (this.disabled) { return }
      this.show = !this.show
      this.focus()
      this.unblur()
    }
  },
  ready () {
    const el = this.$els.dropdown
    el.querySelector('ul.dropdown-menu').addEventListener('click', (e) => {
      if (e.target.nodeName.toLowerCase() === 'a') setTimeout(() => this.toggle(),10)
    })
    if (!this.text) {
      const toggle = el.querySelector('[data-toggle="dropdown"]')
      if (toggle) {
        toggle.addEventListener('click', this.toggle)
        toggle.addEventListener('blur', this.blur)
      }
    }
  }
}
</script>

<style scoped>
.secret {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
</style>