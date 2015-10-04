<template>
  <div class="bs-docs-section" id="buttons">
    <h1 class="page-header"><a href="#buttons" class="anchor">Buttons</a></h1>
    <div class="bs-example">
      <h4>Checkbox</h4>
      <checkbox-group value="{{checkboxValue}}">
        <chekcbox value="left">Left</chekcbox>
        <chekcbox value="middle" checked>Middle</chekcbox>
        <chekcbox value="right">Right</chekcbox>
      </checkbox-group>
      <p>
        <pre>
Checkbox value: {{checkboxValue | json}}
        </pre>
      </p>
      <hr>
      <h4>Radio</h4>
      <radio-group value="{{@radioValue}}" type="primary">
        <radio value="left">Left</radio>
        <radio value="middle" checked>Middle</radio>
        <radio value="right">Right</radio>
      </radio-group>

      <radio-group value="{{@radioValue}}" type="success">
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
<checkbox-group value="{{checkboxValue}}">
  <chekcbox value="left">Left</chekcbox>
  <chekcbox value="middle" checked>Middle</chekcbox>
  <chekcbox value="right">Right</chekcbox>
</checkbox-group>

<radio-group value="{{@radioValue}}" type="primary">
  <radio value="left">Left</radio>
  <radio value="middle" checked>Middle</radio>
  <radio value="right">Right</radio>
</radio-group>

<radio-group value="{{@radioValue}}" type="success">
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
          <td>Checkbox Group: <code>Array</code>, Raido Group: <code>String</code></td>
          <td></td>
          <td>the value of checkbox group</td>
        </tr>
        <tr>
          <td>type</td>
          <td><code>default</code>, one of <code>default</code>
          <code>primary</code>
          <code>danger</code>
          <code>info</code>
          <code>warning</code>
          <code>success</code></td>
          <td><code>default</code></td>
          <td>style of the checkbox button</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import radioGroup from 'src/radioGroup.vue'
  import radio from 'src/radioBtn.vue'
  import checkboxGroup from 'src/checkboxGroup.vue'
  import chekcbox from 'src/chekboxBtn.vue'

  export default {
    components: {
      radio,
      radioGroup,
      checkboxGroup,
      chekcbox
    },
    data() {
      return {
        checkboxValue: [],
        radioValue: ''
      }
    }
  }
</script>
