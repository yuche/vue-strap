<template>
  <div class="bs-docs-section" id="radio">
    <h1 class="page-header"><a href="#radio" class="anchor">Radio</a></h1>
    <div class="bs-example">
      <h4>Checkbox</h4>
      <radio :checked.sync="radioValue" value="one">One</radio>
      <radio :checked.sync="radioValue" value="two" type="primary">Two</radio>
      <radio :checked.sync="radioValue" value="three" type="danger">Three</radio>
      <hr>
      <h4>Checkbox Button (Single buttons)</h4>
      <radio button :checked.sync="radioValue" value="four" type="warning">Four</radio>
      <radio button :checked.sync="radioValue" value="five" type="info">Five</radio>
      <p>
        <pre>
Checkbox value: {{radioValue | json}}
        </pre>
      </p>
    </div>
    <pre><code class="language-markup">
&lt;radio :checked.sync="radioValue" value="one">One&lt;/radio>
&lt;radio :checked.sync="radioValue" value="two" type="primary">Two&lt;/radio>
&lt;radio :checked.sync="radioValue" value="three" type="danger">Three&lt;/radio>

&lt;radio button :checked.sync="radioValue" value="four" type="warning">Four&lt;/radio>
&lt;radio button :checked.sync="radioValue" value="five" type="info">Five&lt;/radio>
    </code></pre>

    <h2>Checkbox options</h2>
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
          <td>If defined, then the defined values will be checked otherwise the elements with a checked attribute will be checked.</td>
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
        <tr>
          <td>button</td>
          <td><code>Boolean</code></td>
          <td>false</td>
          <td>Button style. If is in a button group (set as radio group), all radios will be buttons automaticaly.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import radio from 'src/Radio.vue'

export default {
  components: {
    radio
  },
  data () {
    return {
      radioValue: null
    }
  }
}
</script>
