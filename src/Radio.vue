<template>
  <label :class="[(group||button?'btn btn-':'rb rb-')+typeColor,{'active':active}]">
    <input type="radio" autocomplete="off"
      v-el:input
      :checked="active"
      :value="value"
      :name="name"
      :readonly="readonly"
      :disabled="disabled"
      @click="toggle"
    />
    <span class="icon"></span>
    <span><slot></slot></span>
  </label>
</template>

<script>
import coerceBoolean from './utils/coerceBoolean.js'

export default {
  props: {
    value: {
      type: String,
      default: null
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
      return this.group ? this.$parent.value === this.value : this.value === this.checked
    },
    group () {
      return this.$parent && this.$parent._radioGroup
    },
    typeColor () {
      return (this.type || (this.$parent && this.$parent.type)) || 'default'
    }
  },
  created () {
    const parent = this.$parent
    if (!parent) return
    if (parent._btnGroup && !parent._checkboxGroup) {
      parent._radioGroup = true
    }
  },
  ready () {
    if (!this.$parent._radioGroup) return
    if (this.$parent.value) {
      this.checked = (this.$parent.value === this.value)
    } else if (this.checked) {
      this.$parent.value = this.value
    }
  },
  methods: {
    focus () {
      this.$els.input.focus()
    },
    toggle () {
      this.focus()
      this.checked = this.value
      if (this.group) {
        this.$parent.value = this.value
      }
    }
  }
}
</script>

<style scoped>
label.rb {
  position: relative;
  min-height: 20px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: 400;
  cursor: pointer;
}
label.rb > input {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  z-index: -1;
  box-sizing: border-box;
}
label.rb > input ~ .icon {
  position: absolute;
  top: .15rem;
  left: 0;
  display: block;
  width: 1.4rem;
  height: 1.4rem;
  line-height:1rem;
  color: #ddd;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: .7rem;
  background-color: #ddd;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
label.rb > input:checked ~ .icon {
  background-size: .6em .6em;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQsMUMyLjMsMSwxLDIuMywxLDRzMS4zLDMsMywzczMtMS4zLDMtM1M1LjcsMSw0LDF6Ii8+DQo8L3N2Zz4NCg==);
}
label.rb > input:not(:checked) ~ .icon {
  border: 1px solid #aaa;
}
label.rb > input:disabled ~ .icon,
label.rb > input[readonly] ~ .icon {
  background-color: #eee;
}
label.rb > input:focus ~ .icon {
  outline: 0;
  border: 1px solid #66afe9;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
}
label.rb.active > .icon {
  background-color: #bbb;
}
label.rb.active.rb-primary > input:not(:disabled):not([readonly]) ~ .icon {
  background-color: #337ab7;
}
label.rb.active.rb-success > input:not(:disabled):not([readonly]) ~ .icon {
  background-color: #5cb85c;
}
label.rb.active.rb-info > input:not(:disabled):not([readonly]) ~ .icon {
  background-color: #5bc0de;
}
label.rb.active.rb-warning > input:not(:disabled):not([readonly]) ~ .icon {
  background-color: #f0ad4e;
}
label.rb.active.rb-danger > input:not(:disabled):not([readonly]) ~ .icon {
  background-color: #d9534f;
}
label.btn > input {
  position: absolute;
  clip: rect(0,0,0,0);
  pointer-events: none;
}
</style>
