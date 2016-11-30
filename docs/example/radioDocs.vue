<template>
  <doc-section id="radio" name="Radio">
    <div class="bs-example">
      <h4>Radio</h4>
      <radio v-model="radioValue" checked-value="one">One</radio>
      <radio v-model="radioValue" checked-value="two" type="danger" disabled>Two (disabled)</radio>
      <radio v-model="radioValue" checked-value="two" type="warning" readonly>Two (readonly)</radio>
      <radio v-model="radioValue" checked-value="two" type="success">Two</radio>
      <hr>
      <h4>Radio Button (Single buttons)</h4>
      <radio button v-model="radioValue" checked-value="three" type="primary">Three</radio>
      <radio button v-model="radioValue" checked-value="four" type="info" disabled>Four (disabled)</radio>
      <radio button v-model="radioValue" checked-value="four" type="info" readonly>Four (readonly)</radio>
      <radio button v-model="radioValue" checked-value="four" type="info">Four</radio>
      <p><pre>Radio value: {{ radioValue }}</pre></p>
    </div>
    <doc-code language="markup">
      &lt;radio v-model="radioValue" checked-value="one">One&lt;/radio>
      &lt;radio v-model="radioValue" checked-value="two" type="primary">Two&lt;/radio>
      &lt;radio button v-model="radioValue" checked-value="three" type="danger">Three&lt;/radio>
      &lt;radio button v-model="radioValue" checked-value="four" type="info">Four&lt;/radio>
    </doc-code>
    <doc-table>
      <div>
        <p>value</p>
        <p><code>Mixed</code></p>
        <p></p>
        <p>Handle the selected value.</p>
      </div>
      <div>
        <p>checked-value</p>
        <p><code>Mixed</code></p>
        <p><code>true</code></p>
        <p>Value to return if the radio item is selected.</p>
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
        <p><code>false</code></p>
        <p>Enable/Disable button style.</p>
      </div>
    </doc-table>
    <p>See <a href="#button-group">Button Group</a> for more options.</p>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import radio from 'src/Radio.vue'

export default {
  components: {
    docSection,
    docTable,
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
