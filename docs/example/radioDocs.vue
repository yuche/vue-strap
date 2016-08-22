<template>
  <doc-section id="radio" name="Radio">
    <div class="bs-example">
      <h4>Radio</h4>
      <radio :checked.sync="radioValue" value="one">One</radio>
      <radio :checked.sync="radioValue" value="two" type="primary">Two</radio>
      <radio :checked.sync="radioValue" value="three" type="danger">Three</radio>
      <hr>
      <h4>Radio Button (Single buttons)</h4>
      <radio button :checked.sync="radioValue" value="four" type="warning">Four</radio>
      <radio button :checked.sync="radioValue" value="five" type="info">Five</radio>
      <p><pre>Radio value: {{radioValue | json}}</pre></p>
    </div>
    <doc-code language="markup">
      <radio :checked.sync="radioValue" value="one">One</radio>
      <radio :checked.sync="radioValue" value="two" type="primary">Two</radio>
      <radio :checked.sync="radioValue" value="three" type="danger">Three</radio>

      <radio button :checked.sync="radioValue" value="four" type="warning">Four</radio>
      <radio button :checked.sync="radioValue" value="five" type="info">Five</radio>
    </doc-code>
    <doc-options>
      <div>
        <p>value</p>
        <p><code>Array</code> or <code>String</code></p>
        <p></p>
        <p>If defined, then the defined values will be checked otherwise the elements with a checked attribute will be checked.</p>
      </div>
      <div>
        <p>type</p>
        <p><code>String</code>, one of <code>default</code>
        <code>primary</code>
        <code>danger</code>
        <code>info</code>
        <code>warning</code>
        <code>success</code></p>
        <p><code>default</code></p>
        <p></p>
      </div>
      <div>
        <p>button</p>
        <p><code>Boolean</code></p>
        <p>false</p>
        <p>Button style. If is in a button group (set as radio group), all radios will be buttons automaticaly.</p>
      </div>
    </doc-options>
  </doc-section>
</template>

<script>
import docSection from './docSection.vue'
import docOptions from './docOptions.vue'
import docCode from './docCode.vue'
import radio from 'src/Radio.vue'

export default {
  components: {
    docSection,
    docOptions,
    docCode,
    radio
  },
  data () {
    return {
      radioValue: null
    }
  }
}
</script>
