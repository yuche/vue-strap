<template>
  <doc-section id="spinner" name="Spinner">
    <div class="bs-example">
      <p><checkbox :checked.sync="fixed" type="info">fixed</checkbox></p>
      <p><v-select :options="sizes" :value.sync="size">size</v-select></p>
      <p><button class="btn btn-info" @click="$broadcast('show::spinner')">show spinner</button></p>
      <div><spinner id="spinner-box" :size="size" :fixed="fixed" text="I will close in 2 secs"></spinner></div>
    </div>
    <doc-code language="markup">
      &lt;spinner v-ref:spinner :size="(sm,md,lg...)" :fixed="(true,false)" text="I will close in 2 secs">&lt;/spinner>
    </doc-code>
    <doc-code language="markup">
      // using ref
      this.$refs.spinner.show()
      this.$refs.spinner.hide()
      // using broadcast
      this.$broadcast('show::spinner')
      this.$broadcast('hide::spinner')
    </doc-code>
    <doc-options>
      <div>
        <p>size</p>
        <p><code>Text</code></p>
        <p>md</p>
        <p>The size of the spinner (either [sm, md, lg]).</p>
      </div>
      <div>
        <p>fixed</p>
        <p><code>Boolean</code></p>
        <p>false</p>
        <p>Set to true if you want the spinner to occupy the entire window space.</p>
      </div>
    </doc-options>
  </doc-section>
</template>

<script>
import docSection from './docSection.vue'
import docOptions from './docOptions.vue'
import docCode from './docCode.vue'
import checkbox from 'src/Checkbox.vue'
import vSelect from 'src/Select.vue'
import spinner from 'src/Spinner.vue'

export default {
  components: {
    docSection,
    docOptions,
    docCode,
    checkbox,
    spinner,
    vSelect
  },
  data () {
    return {
      fixed: false,
      size: 'lg',
      sizes: ['sm','md','lg','xl']
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
