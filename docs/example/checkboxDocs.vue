<template>
  <doc-section id="checkbox" name="Checkbox">
    <div class="bs-example">
      <h4>Checkbox</h4>
      <checkbox :checked.sync="checkboxValue.one" value="one">One</checkbox>
      <checkbox :checked.sync="checkboxValue.two" value="two" type="primary">Two</checkbox>
      <checkbox :checked.sync="checkboxValue.three" value="three" type="danger">Three</checkbox>
      <hr>
      <h4>Checkbox Button (Single button)</h4>
      <checkbox button :checked.sync="checkboxValue.four" value="four" type="primary">Four</checkbox>
      <p>
        <pre>Checkbox value: {{checkboxValue | json}}</pre>
      </p>
    </div>
    <doc-code language="markup">
      <checkbox :checked.sync="checkboxValue.one" value="one">One</checkbox>
      <checkbox :checked.sync="checkboxValue.two" value="two" type="primary">Two</checkbox>
      <checkbox :checked.sync="checkboxValue.three" value="three" type="danger">Three</checkbox>
      <checkbox button :checked.sync="checkboxValue.four" value="four" type="primary">Four</checkbox>
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
        <p>Button style. Inside a button group (if is a checkbox group) all checkboxes are buttons by default.</p>
      </div>
    </doc-options>
  </doc-section>
</template>

<script>
import docSection from './docSection.vue'
import docOptions from './docOptions.vue'
import docCode from './docCode.vue'
import checkbox from 'src/Checkbox.vue'

export default {
  components: {
    docSection,
    docOptions,
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
