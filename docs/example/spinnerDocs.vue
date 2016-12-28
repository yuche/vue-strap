<template>
  <doc-section id="spinner" name="Spinner">
    <div class="bs-example">
      <p><checkbox :checked="fixed" @checked="fixed = arguments[0]" type="info">fixed</checkbox></p>
      <p><v-select :options="['sm','md','lg','xl']" v-model="size"></v-select></p>
      <p>
        <button class="btn btn-info" @click="showRef">show spinner (using ref)</button>
        <button class="btn btn-info" @click="showGlobal">show spinner (global)</button>
        <button class="btn btn-info" @click="showModel">show spinner (v-model)</button>
      </p>
      <div><spinner ref="spinner" global v-model="spinner" :size="size" :fixed="fixed" text="I will close in 2 secs"></spinner></div>
    </div>
    <doc-code language="markup">
      &lt;spinner ref="spinner" global v-model="spinner" size="lg" fixed text="I will close in 2 secs">&lt;/spinner>
    </doc-code>
    <doc-code language="javascript">
      // using ref
      this.$refs.spinner.show()
      this.$refs.spinner.hide()
      // using global events
      this.$root.$emit('spinner::show')
      this.$root.$emit('spinner::hide')
      // using v-model
      this.spinner = true //show
      this.spinner = false //hide
    </doc-code>
    <doc-table>
      <div>
        <p>fixed</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Set to true if you want the spinner to occupy the entire window space.</p>
      </div>
      <div>
        <p>global</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>When is true, set global events for that spinner. Will be ignored if was set another global spinner.</p>
      </div>
      <div>
        <p>size</p>
        <p><code>String</code>, one of <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code></p>
        <p><code>md</code></p>
        <p>The size of the spinner.</p>
      </div>
      <div>
        <p>text</p>
        <p><code>String</code></p>
        <p><code>''</code></p>
        <p>The text to show under the spinner.</p>
      </div>
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import checkbox from 'src/Checkbox.vue'
import vSelect from 'src/Select.vue'
import spinner from 'src/Spinner.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    checkbox,
    spinner,
    vSelect
  },
  data () {
    return {
      fixed: false,
      size: 'lg',
      spinner: false
    }
  },
  methods: {
    showGlobal () {
      this.$root.$emit('spinner::show')
      this.$nextTick(function(){
        this.$root.$emit('spinner::hide')
      })
    },
    showModel () {
      this.spinner = true
      this.$nextTick(function(){
        this.spinner = false
      })
    },
    showRef () {
      this.$refs.spinner.show()
      this.$nextTick(function(){
        this.$refs.spinner.hide()
      })
    }
  }
}
</script>
