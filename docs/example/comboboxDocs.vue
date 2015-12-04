<template>
  <div class="bs-docs-section" id="select">
    <h1 class="page-header"><a href="#select" class="anchor">Combobox</a></h1>
    <p>
      This a <a target="_blank" href="https://github.com/danielfarrell/bootstrap-combobox/">bootstrap-combobox</a> implementation.
    </p>
    <div class="bs-example">
      <p>
        <pre>Select data : {{value}}</pre>
      </p>
      <combobox :value.sync="value" :options="fruitOptions">
      </combobox>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<combobox :value.sync="value" :options="fruitOptions">
</combobox>
fruitOptions = [
  {value:'apple', label:'Apple'},
  {value:'banana', label:'Banana'},
  {value:'cherry', label:'Cherry'},
  {value:'orange', label:'Orange'},
  {value:'grape', label:'Grape'},
]
    </script></code></pre>

    <h2>Combobox Options</h2>
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
          <td><code>Array</code></td>
          <td><code>[]</code></td>
          <td></td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td><code>String</code></td>
          <td>Nothing Selected</td>
          <td></td>
        </tr>
        <tr>
          <td>options</td>
          <td><code>Array (collection)</code></td>
          <td><code>required</code></td>
          <td></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  import Combobox from 'src/Combobox.vue'
  export default {
    components: {
      Combobox
    },
    data() {
      return {
        fruitOptions: [
          {value:'apple', label:'Apple'},
          {value:'banana', label:'Banana'},
          {value:'cherry', label:'Cherry'},
          {value:'orange', label:'Orange'},
          {value:'grape', label:'Grape'},
        ],
        value: ''
      }
    }
  }
</script>