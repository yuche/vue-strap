<template>
  <div class="bs-docs-section" id="buttons">
    <h1 class="page-header"><a href="#buttons" class="anchor">Buttons</a></h1>
    <div class="bs-example">
      <h4>Checkbox</h4>
      <checkbox-group :value.sync="checkboxValue">
        <checkbox value="left">Left</checkbox>
        <checkbox value="middle" checked>Middle</checkbox>
        <checkbox value="right">Right</checkbox>
      </checkbox-group>
      <p>
        <pre>
Checkbox value: {{checkboxValue | json}}
        </pre>
      </p>
      <hr>
      <h4>Radio</h4>
      <radio-group :value.sync="radioValue" type="primary">
        <radio value="left">Left</radio>
        <radio value="middle" checked>Middle</radio>
        <radio value="right">Right</radio>
      </radio-group>

      <radio-group :value.sync="radioValue" type="success">
        <radio value="left">Left</radio>
        <radio value="middle" checked>Middle</radio>
        <radio value="right">Right</radio>
      </radio-group>
      <p>
        <pre>
Radio value: {{radioValue}}
        </pre>
      </p>
    </div>

    <pre><code class="language-markup"><script type="language-mark-up">
<checkbox-group :value.sync="checkboxValue">
  <checkbox value="left">Left</checkbox>
  <checkbox value="middle" checked>Middle</checkbox>
  <checkbox value="right">Right</checkbox>
</checkbox-group>

<radio-group :value.sync="radioValue" type="primary">
  <radio value="left">Left</radio>
  <radio value="middle" checked>Middle</radio>
  <radio value="right">Right</radio>
</radio-group>

<radio-group :value.sync="radioValue" type="success">
  <radio value="left">Left</radio>
  <radio value="middle" checked>Middle</radio>
  <radio value="right">Right</radio>
</radio-group>
</script></code></pre>

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
  import radioGroup from 'src/radioGroup.vue'
  import radio from 'src/radioBtn.vue'
  import checkboxGroup from 'src/checkboxGroup.vue'
  import checkbox from 'src/checkboxBtn.vue'

  export default {
    components: {
      radio,
      radioGroup,
      checkboxGroup,
      checkbox
    },
    data() {
      return {
        checkboxValue: [],
        radioValue: ''
      }
    }
  }
</script>
