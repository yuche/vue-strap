<template>
  <a :class="['btn', type]" href="javascript:void(0)" @click="active = !active">
    <span :class="['glyphicon','glyphicon-'+(value?'ok':'remove')]"></span>
    <slot></slot>
    <input v-if="name" type="hidden" :name="name" :value="active?1:0" />
  </a>
</template>

<script>
import {coerce} from './vuestrap/utils/utils.js'

export default {
  props: {
    isTrue: {default: 'primary'},
    isFalse: {default: null},
    name: null,
    value: false
  },
  data () {
    var active = coerce.boolean(this.value)
    return {
      active,
      types: {
        danger: 'btn-danger',
        info: 'btn-info',
        primary: 'btn-primary',
        success: 'btn-success',
        warning: 'btn-warning'
      }
    }
  },
  watch: {
    active (val, old) {
      if (val !== old) {
        this.$emit('changed', val)
        this.$emit(val ? 'enabled' : 'disabled')
        this.$emit('input', val)
      }
    },
    value (val, old) {
      if (val !== old) {
        this.active = coerce.boolean(this.value)
      }
    }
  },
  computed: {
    type () { return this.types[this.value ? this.isTrue : this.isFalse] || 'btn-default' }
  }
}
</script>
