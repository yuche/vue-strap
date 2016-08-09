<template>
  <div class="bs-docs-section" id="checkbox">
    <h1 class="page-header"><a href="#checkbox" class="anchor">Checkbox</a></h1>
    <div class="bs-example">
      <h4>Checkbox</h4>
      <checkbox :checked.sync="checkboxValue.one" value="one">One</checkbox>
      <checkbox :checked.sync="checkboxValue.two" value="two" type="primary">Two</checkbox>
      <checkbox :checked.sync="checkboxValue.three" value="three" type="danger">Three</checkbox>
      <hr>
      <h4>Checkbox Button (Single button)</h4>
      <checkbox button :checked.sync="checkboxValue.four" value="four" type="primary">Four</checkbox>
      <p>
        <pre>
Checkbox value: {{checkboxValue | json}}
        </pre>
      </p>
    </div>
    <pre><code class="language-markup">
&lt;checkbox :checked.sync="checkboxValue.one" value="one">One&lt;/checkbox>
&lt;checkbox :checked.sync="checkboxValue.two" value="two" type="primary">Two&lt;/checkbox>
&lt;checkbox :checked.sync="checkboxValue.three" value="three" type="danger">Three&lt;/checkbox>

&lt;checkbox button :checked.sync="checkboxValue.four" value="four" type="primary">Four&lt;/checkbox>
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
          <td>Button style. If is in a button group (set as checkbox group), all checkboxes will be buttons automaticaly.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import checkbox from 'src/Checkbox.vue'

export default {
  components: {
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
