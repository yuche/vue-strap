<template>
  <doc-section id="button-group" name="Button Group">
    <div class="bs-example">
      <h4>Checkbox</h4>
      <button-group :value.sync="checkboxValue">
        <checkbox value="left">Left</checkbox>
        <checkbox value="middle">Middle</checkbox>
        <checkbox value="right">Right</checkbox>
      </button-group>
      <p>
        <pre>Checkbox value: {{checkboxValue | json}}</pre>
      </p>
      <hr>
      <h4>Radio</h4>
      <p>
        <button-group :value.sync="radioValue" type="primary">
          <radio value="left">Left</radio>
          <radio value="middle">Middle</radio>
          <radio value="right">Right</radio>
        </button-group>
      </p>
      <p>
        <button-group :value.sync="radioValue" type="success">
          <radio value="left">Left</radio>
          <radio value="middle">Middle</radio>
          <radio value="right">Right</radio>
        </button-group>
      </p>
      <p>
        <label>Not buttons:</label>
        <button-group :value.sync="radioValue" type="info" buttons="false">
          <radio value="left">Left</radio>
          <radio value="middle">Middle</radio>
          <radio value="right">Right</radio>
        </button-group>
      </p>
      <p>
        <pre>Radio value: {{radioValue}}</pre>
      </p>
    </div>
    <doc-code language="markup">
      <button-group :value.sync="checkboxValue">
        <checkbox value="left">Left</checkbox>
        <checkbox value="middle">Middle</checkbox>
        <checkbox value="right">Right</checkbox>
      </button-group>

      <button-group :value.sync="radioValue" type="primary">
        <radio value="left">Left</radio>
        <radio value="middle">Middle</radio>
        <radio value="right">Right</radio>
      </button-group>

      Not Buttons:
      <button-group :value.sync="radioValue" type="info" buttons="false">
        <radio value="left">Left</radio>
        <radio value="middle">Middle</radio>
        <radio value="right">Right</radio>
      </button-group>
    </doc-code>

    <doc-table>
      <div>
        <p>value</p>
        <p><code>Array</code> or <code>String</code></p>
        <p></p>
        <p>If defined, then the defined values will be checked otherwise the elements with a checked attribute
        will be checked.</p>
      </div>
      <div>
        <p>buttons</p>
        <p><code>Boolean</code></p>
        <p><code>true</code></p>
        <p>
          <p>Can enable/disable button style.</p>
          <p>Group normal checks if you want to set the same type color for all.</p>
        </p>
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
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './docSection.vue'
import docTable from './docTable.vue'
import docCode from './docCode.vue'
import buttonGroup from 'src/buttonGroup.vue'
import checkbox from 'src/Checkbox.vue'
import radio from 'src/Radio.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    buttonGroup,
    checkbox,
    radio
  },
  data () {
    return {
      checkboxValue: [],
      radioValue: 'middle'
    }
  }
}
</script>
