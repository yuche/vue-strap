<template>
  <label v-if="buttonStyle" :class="['btn btn-'+typeColor,{active:checked,disabled:disabled,readonly:readonly}]" @click="toggle">
    <input type="checkbox" autocomplete="off"
      v-el:input
      v-show="!readonly"
      :checked="active"
      :value="value"
      :name="name"
      :readonly="readonly"
      :disabled="disabled"
    />
    <slot></slot>
  </label>
  <div v-else :class="['checkbox',typeColor,{active:checked,disabled:disabled,readonly:readonly}]" @click="toggle">
    <label>
      <input type="checkbox" autocomplete="off"
        v-el:input
        :checked="active"
        :value="value"
        :name="name"
        :readonly="readonly"
        :disabled="disabled"
      />
      <span class="icon"></span>
      <slot></slot>
    </label>
  </div>
</template>

<script>
import coerceBoolean from './utils/coerceBoolean.js'

export default {
  props: {
    value: {
      default: true
    },
    checked: {
      twoWay: true
    },
    button: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    disabled: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    name: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    type: {
      type: String,
      default: null
    }
  },
  computed: {
    active () {
      return this.group ? ~this.$parent.value.indexOf(this.value) : this.checked === this.value
    },
    buttonStyle () {
      return this.button || (this.group && this.$parent.buttons)
    },
    group () {
      return this.$parent && this.$parent._checkboxGroup
    },
    typeColor () {
      return (this.type || (this.$parent && this.$parent.type)) || 'default'
    }
  },
  created () {
    const parent = this.$parent
    if (!parent) return
    if (parent._btnGroup && !parent._radioGroup) {
      parent._checkboxGroup = true
    }
  },
  ready () {
    if (!this.$parent._checkboxGroup || typeof this.value === 'boolean') return
    if (!(this.$parent.value instanceof Array)) this.$parent.value = []
    if (this.$parent.value.length) {
      this.checked = ~this.$parent.value.indexOf(this.value)
    } else if (this.checked) {
      this.$parent.value.push(this.value)
    }
  },
  methods: {
    focus () {
      this.$els.input.focus()
    },
    toggle (e) {
      e.preventDefault();
      if (!this.disabled) {
        this.focus()
        if (!this.readonly) {
          this.checked = this.checked ? null : this.value
          if (this.group && typeof this.value !== 'boolean') {
            const parent = this.$parent
            const index = parent.value.indexOf(this.value)
            parent.value[~index ? '$remove' : 'push'](this.value)
          }
        }
      }
      return false
    }
  }
}
</script>

<style scoped>
.checkbox { position: relative; }
.checkbox > label > input {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  z-index: -1;
  box-sizing: border-box;
}
.checkbox > label > .icon {
  position: absolute;
  top: .2rem;
  left: 0;
  display: block;
  width: 1.4rem;
  height: 1.4rem;
  line-height:1rem;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: .35rem;
  background-color: #ddd;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.checkbox > label > input:focus ~ .icon {
  outline: 0;
  border: 1px solid #66afe9;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
}
.checkbox.active > label > .icon {
  background-size: 1rem 1rem;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNCwxTDUuNywxLjdMMi45LDQuNUwyLjEsMy43TDEuNCwzTDAsNC40bDAuNywwLjdsMS41LDEuNWwwLjcsMC43bDAuNy0wLjdsMy41LTMuNWwwLjctMC43TDYuNCwxTDYuNCwxeiINCgkvPg0KPC9zdmc+DQo=);
}
.checkbox.active.default > label > .icon { background-color: #bbb; }
.checkbox.active.primary > label > .icon { background-color: #337ab7; }
.checkbox.active.success > label > .icon { background-color: #5cb85c; }
.checkbox.active.info > label > .icon { background-color: #5bc0de; }
.checkbox.active.warning > label > .icon { background-color: #f0ad4e; }
.checkbox.active.danger > label > .icon { background-color: #d9534f; }

.checkbox.disabled > label > .icon,
.checkbox.readonly > label > .icon,
.btn.readonly {
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
  box-shadow: none;
  opacity: .65;
}
label.btn > input[type=checkbox] {
  position: absolute;
  clip: rect(0,0,0,0);
  pointer-events: none;
}
</style>
