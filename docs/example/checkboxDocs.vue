<template>
  <doc-section id="checkbox" name="Checkbox">
    <div class="bs-example">
      <h4>Checkbox</h4>
      <checkbox :checked="checkboxValue.one" @checked="checkboxValue.one = arguments[0]" value="one">One</checkbox>
      <checkbox :checked="checkboxValue.two" @checked="checkboxValue.two = arguments[0]" value="two" type="danger" disabled>Two (disabled)</checkbox>
      <checkbox :checked="checkboxValue.two" @checked="checkboxValue.two = arguments[0]" value="two" type="warning" readonly>Two (readonly)</checkbox>
      <checkbox :checked="checkboxValue.two" @checked="checkboxValue.two = arguments[0]" value="two" type="success">Two</checkbox>
      <hr>
      <h4>Checkbox Button (Single button)</h4>
      <checkbox button :checked="checkboxValue.three" @checked="checkboxValue.three = arguments[0]" value="three" type="primary">Three</checkbox>
      <checkbox button :checked="checkboxValue.four" @checked="checkboxValue.four = arguments[0]" value="four" type="info" disabled>Four (disabled)</checkbox>
      <checkbox button :checked="checkboxValue.four" @checked="checkboxValue.four = arguments[0]" value="four" type="info" readonly>Four (readonly)</checkbox>
      <checkbox button :checked="checkboxValue.four" @checked="checkboxValue.four = arguments[0]" value="four" type="info">Four</checkbox>
      <p>
        <pre>Checkbox values: {{ checkboxValue }}</pre>
      </p>
    </div>
    <doc-code language="markup">
      &lt;checkbox :checked="checkboxValue.one" @checked="checkboxValue.one = arguments[0]" value="one">One&lt;/checkbox>
      &lt;checkbox :checked="checkboxValue.two" @checked="checkboxValue.two = arguments[0]" value="two" type="primary">Two&lt;/checkbox>
      &lt;checkbox :checked="checkboxValue.three" @checked="checkboxValue.three = arguments[0]" value="three" type="info">Three&lt;/checkbox>
      &lt;checkbox button :checked="checkboxValue.four" @checked="checkboxValue.four = arguments[0]" value="four" type="danger">Four&lt;/checkbox>
    </doc-code>
    <doc-table>
      <div>
        <p>checked</p>
        <p><code>Number</code> or <code>String</code></p>
        <p></p>
        <p>Handle the selected value.</p>
      </div>
      <div>
        <p>value</p>
        <p><code>Number</code> or <code>String</code></p>
        <p></p>
        <p>Value to return if the checkbox item is selected.</p>
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
        one: null,
        two: 'two',
        three: null,
        four: null
      }
    }
  }
}
</script>
