<template>
  <div class="bs-docs-section" id="timepicker">
    <label class="label label-warning pull-right">FontAwesome recommended</label>
    <h1 class="page-header"><a href="#timepicker" class="anchor">Timepicker</a></h1>
    <div class="bs-example">
      <p>
        <pre>
          Selected time is: {{ value }}
        </pre>
      </p>
      <timepicker :value.sync="value"></timepicker>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
Some code
    </script></code></pre>
    <h2>Options</h2>
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
          <td><code>String</code></td>
          <td></td>
          <td>Value of the input DOM. Must be a valid time string.</td>
        </tr>
        <tr>
          <td>Width</td>
          <td><code>String</code></td>
          <td>200px</td>
          <td>Width of the input DOM</td>
        </tr>
        <tr>
          <td>format</td>
          <td><code>String</code></td>
          <td><code>HH:mm</code></td>
          <td>Currently the only format that is supported is HH:mm</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import timepicker from 'src/Timepicker.vue'
  export default {
    components: {
      timepicker,
    },
    data() {
      return {
        value: '11:00',
        //format: ['MMM/dd/yyyy']
      }
    }
  }
</script>
