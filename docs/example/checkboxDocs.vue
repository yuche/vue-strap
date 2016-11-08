<template>
  <doc-section id="checkbox" name="Checkbox">
    <div class="bs-example">
      <h4>Checkbox</h4>
      <checkbox :checked.sync="checkboxValue.one" value="one">One</checkbox>
      <checkbox :checked.sync="checkboxValue.two" value="two" type="danger" disabled>Two (disabled)</checkbox>
      <checkbox :checked.sync="checkboxValue.two" value="two" type="warning" readonly>Two (readonly)</checkbox>
      <checkbox :checked.sync="checkboxValue.two" value="two" type="success">Two</checkbox>
      <hr>
      <h4>Checkbox Button (Single button)</h4>
      <checkbox button :checked.sync="checkboxValue.three" value="three" type="primary">Three</checkbox>
      <checkbox button :checked.sync="checkboxValue.four" value="four" type="info" disabled>Four (disabled)</checkbox>
      <checkbox button :checked.sync="checkboxValue.four" value="four" type="info" readonly>Four (readonly)</checkbox>
      <checkbox button :checked.sync="checkboxValue.four" value="four" type="info">Four</checkbox>
      <p>
        <pre>Checkbox values: {{checkboxValue | json}}</pre>
      </p>
    </div>
    <doc-code language="markup">
      <checkbox :checked.sync="checkboxValue.one" value="one">One</checkbox>
      <checkbox :checked.sync="checkboxValue.two" value="two" type="primary">Two</checkbox>
      <checkbox :checked.sync="checkboxValue.three" value="three" type="info">Three</checkbox>
      <checkbox button :checked.sync="checkboxValue.four" value="four" type="danger">Four</checkbox>
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
import docSection from './docSection.vue'
import docTable from './docTable.vue'
import docCode from './docCode.vue'
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
