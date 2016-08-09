<template>
  <div class="bs-docs-section" id="button-group">
    <h1 class="page-header"><a href="#button-group" class="anchor">Button Group</a></h1>
    <div class="bs-example">
      <h4>Checkbox</h4>
      <button-group :value.sync="checkboxValue">
        <checkbox value="left">Left</checkbox>
        <checkbox value="middle">Middle</checkbox>
        <checkbox value="right">Right</checkbox>
      </button-group>
      <p>
        <pre>
Checkbox value: {{checkboxValue | json}}
        </pre>
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
        <pre>
Radio value: {{radioValue}}
        </pre>
      </p>
    </div>

    <pre><code class="language-markup">
&lt;button-group :value.sync="checkboxValue">
  &lt;checkbox value="left">Left&lt;/checkbox>
  &lt;checkbox value="middle">Middle&lt;/checkbox>
  &lt;checkbox value="right">Right&lt;/checkbox>
&lt;/button-group>

&lt;button-group :value.sync="radioValue" type="primary">
  &lt;radio value="left">Left&lt;/radio>
  &lt;radio value="middle">Middle&lt;/radio>
  &lt;radio value="right">Right&lt;/radio>
&lt;/button-group>

Not Buttons:
&lt;button-group :value.sync="radioValue" type="info" buttons="false">
  &lt;radio value="left">Left&lt;/radio>
  &lt;radio value="middle">Middle&lt;/radio>
  &lt;radio value="right">Right&lt;/radio>
&lt;/button-group>
    </code></pre>

    <h2>Group options</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td><code>Array</code> or <code>String</code></td>
          <td></td>
          <td>If defined, then the defined values will be checked otherwise the elements with a checked attribute
          will be checked.</td>
        </tr>
        <tr>
          <td>buttons</td>
          <td><code>Boolean</code></td>
          <td><code>true</code></td>
          <td>
            <p>Can enable/disable button style.</p>
            <p>Group normal checks if you want to set the same type color for all.</p>
          </td>
        </tr>
        <tr>
          <td>type</td>
          <td><code>String</code>, one of <code>default</code>
          <code>primary</code>
          <code>danger</code>
          <code>info</code>
          <code>warning</code>
          <code>success</code></td>
          <td><code>default</code></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import buttonGroup from 'src/buttonGroup.vue'
import checkbox from 'src/Checkbox.vue'
import radio from 'src/Radio.vue'

export default {
  components: {
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
