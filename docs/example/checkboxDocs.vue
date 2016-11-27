<template>
  <doc-section id="checkbox" name="Checkbox">
    <div class="bs-example">
      <h4>Checkbox</h4>
      <checkbox v-model="checkboxValue.one" true-value="1">One</checkbox>
      <checkbox v-model="checkboxValue.two" true-value="two" type="danger" disabled>Two (disabled)</checkbox>
      <checkbox v-model="checkboxValue.two" true-value="two" type="warning" readonly>Two (readonly)</checkbox>
      <checkbox v-model="checkboxValue.two" true-value="two" type="success">Two</checkbox>
      <hr>
      <h4>Checkbox Button (Single button)</h4>
      <checkbox button v-model="checkboxValue.three" :true-value="2+1" type="primary">Three</checkbox>
      <checkbox button v-model="checkboxValue.four" type="info" disabled>Four (disabled)</checkbox>
      <checkbox button v-model="checkboxValue.four" type="info" readonly>Four (readonly)</checkbox>
      <checkbox button v-model="checkboxValue.four" type="info">Four</checkbox>
      <p>
        <pre>Checkbox values: {{ checkboxValue }}</pre>
      </p>
    </div>
    <doc-code language="markup">
      &lt;checkbox v-model="checkboxValue.one" true-value="1">One&lt;/checkbox>
      &lt;checkbox v-model="checkboxValue.two" true-value="two" type="primary">Two&lt;/checkbox>
      &lt;checkbox v-model="checkboxValue.three" :true-value="2+1" type="info">Three&lt;/checkbox>
      &lt;checkbox button v-model="checkboxValue.four" type="danger">Four&lt;/checkbox>
    </doc-code>
    <doc-table>
      <div>
        <p>value</p>
        <p><code>Mixed</code></p>
        <p></p>
        <p>Handle the selected value.</p>
      </div>
      <div>
        <p>true-value</p>
        <p><code>Mixed</code></p>
        <p><code>true</code></p>
        <p>Value when is checked.</p>
      </div>
      <div>
        <p>false-value</p>
        <p><code>Mixed</code></p>
        <p><code>false</code></p>
        <p>Value when is not checked.</p>
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
        <p>Button style.</p>
      </div>
    </doc-table>
    <p>See <a href="#button-group">Button Group</a> for more options.</p>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import checkbox from 'src/Checkbox.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    checkbox
  },
  data () {
    return {
      checkboxValue: {
        one: false,
        two: true,
        three: false,
        four: false
      }
    }
  }
}
</script>
