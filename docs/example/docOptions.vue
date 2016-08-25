<template>
  <h2 v-if="options.length">{{name}} Options</h2>
  <div class="table-responsive">
    <table v-if="options.length" class="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="option in options">
          <td v-for="el in option" v-html="el" v-if="$index<4"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import $ from 'src/utils/NodeList.js'

export default {
  props: {
    name: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      options: []
    }
  },
  created () {
    if (!this.name && this.$parent._section) {
      this.name = this.$parent.name
    }
  },
  ready () {
    const container = this._slotContents.default
    if (container) {
      $(container.children).each((option) => {
        this.options.push($(option.children).innerHTML)
      })
    }
  }
}
</script>
