<template>
  <label :class="[(group?'btn btn-':'cb cb-')+type,{'active':checked}]">
    <input type="checkbox" autocomplete="off"
      v-el:input
      :checked="checked"
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
      twoWay: true,
      type: String,
      default: null
    },
    checked: {
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
    group () {
      return this.$parent && this.$parent._checkboxGroup
    },
    bsForm () {
      return true
    },
    input () {
      return true
    }
  },
  created () {
    this.type = (this.group && this.$parent.type ? this.$parent.type : this.type) || 'default'
    if (!this.group) return
    if (this.$parent.value.length) {
      this.checked = this.$parent.value.indexOf(this.value) > -1
    } else if (this.checked) {
      this.$parent.value.push(this.value)
    }
  },
  methods: {
    focus () {
      this.$els.input.focus()
    },
    toggle () {
      this.focus()
      this.checked = !this.checked
      if (this.group) {
        const parent = this.$parent
        const index = parent.value.indexOf(this.value)
        index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1)
      }
    }
  }
}
</script>

<style scoped>
label.cb {
  position: relative;
  min-height: 20px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: 400;
  cursor: pointer;
}
label.cb > input {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  z-index: -1;
  box-sizing: border-box;
}
label.cb > input ~ .icon {
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
  border-radius: .35rem;
  background-color: #ddd;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
label.cb > input:checked ~ .icon {
  background-size: .6em .6em;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNCwxTDUuNywxLjdMMi45LDQuNUwyLjEsMy43TDEuNCwzTDAsNC40bDAuNywwLjdsMS41LDEuNWwwLjcsMC43bDAuNy0wLjdsMy41LTMuNWwwLjctMC43TDYuNCwxTDYuNCwxeiINCgkvPg0KPC9zdmc+DQo=);
}
label.cb > input:not(:checked) ~ .icon {
  border: 1px solid #aaa;
}
label.cb > input:disabled ~ .icon,
label.cb > input[readonly] ~ .icon {
  background-color: #eee;
}
label.cb > input:focus ~ .icon {
  outline: 0;
  border: 1px solid #66afe9;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
}
label.cb.active > .icon {
  background-color: #bbb;
}
label.cb.active.cb-primary > input:not(:disabled):not([readonly]) ~ .icon {
  background-color: #337ab7;
}
label.cb.active.cb-success > input:not(:disabled):not([readonly]) ~ .icon {
  background-color: #5cb85c;
}
label.cb.active.cb-info > input:not(:disabled):not([readonly]) ~ .icon {
  background-color: #5bc0de;
}
label.cb.active.cb-warning > input:not(:disabled):not([readonly]) ~ .icon {
  background-color: #f0ad4e;
}
label.cb.active.cb-danger > input:not(:disabled):not([readonly]) ~ .icon {
  background-color: #d9534f;
}
</style>
