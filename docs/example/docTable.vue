<template>
  <div v-if="permited">
    <h2 v-if="options.length">{{name}} {{ type }}</h2>
    <div class="table-responsive">
      <table v-if="options.length" class="table table-bordered">
        <thead>
            <tr>
              <th v-for="name in setHeaders" v-text="name"></th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="option in options">
            <td v-for="h in setHeaders" v-html="option[$index]"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import $ from 'src/utils/NodeList.js'

export default {
  props: {
    name: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'Options'
    },
    headers: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      defaultHeaders: {
        events: ['Name', 'Arguments', 'Description'],
        options: ['Name', 'Type', 'Default', 'Description']
      },
      options: []
    }
  },
  computed: {
    permited () { return this.setHeaders.length },
    setHeaders () { return this.headers || this.defaultHeaders[this.type.toLowerCase()] || [] }
  },
  methods: {
    el (opc) {
      for (let i = opc.length - 1; i < this.permited; i++) opc.push('')
      return opc
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
