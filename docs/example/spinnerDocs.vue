<template>
  <doc-section id="spinner" name="Spinner">
    <div class="bs-example">
      <p><checkbox :checked.sync="fixed" type="info">fixed</checkbox></p>
      <p><v-select :options="['sm','md','lg','xl']" :value.sync="size">size</v-select></p>
      <p><button class="btn btn-info" @click="$broadcast('show::spinner')">show spinner</button></p>
      <div><spinner id="spinner-box" :size="size" :fixed="fixed" text="I will close in 2 secs"></spinner></div>
    </div>
    <doc-code language="markup">
      <spinner v-ref:spinner size="md" fixed text="I will close in 2 secs"></spinner>
    </doc-code>
    <doc-code language="javascript">
      // using ref
      this.$refs.spinner.show()
      this.$refs.spinner.hide()
      // using broadcast
      this.$broadcast('show::spinner')
      this.$broadcast('hide::spinner')
    </doc-code>
    <doc-table>
      <div>
        <p>size</p>
        <p><code>String</code>, one of <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code></p>
        <p><code>md</code></p>
        <p>The size of the spinner.</p>
      </div>
      <div>
        <p>fixed</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Set to true if you want the spinner to occupy the entire window space.</p>
      </div>
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './docSection.vue'
import docTable from './docTable.vue'
import docCode from './docCode.vue'
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
      size: 'lg'
    }
  },
  events: {
    'shown::spinner' (id) {
      setTimeout(() => {
        this.$root.$broadcast('hide::spinner', id)
      }, 2000)
    }
  }
}
</script>
