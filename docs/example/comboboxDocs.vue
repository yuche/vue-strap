<template>
  <div class="bs-docs-section" id="combobox">
    <h1 class="page-header"><a href="#combobox" class="anchor">Combobox</a></h1>
    <p>
      This a <a target="_blank" href="https://github.com/danielfarrell/bootstrap-combobox/">bootstrap-combobox</a> implementation.
    </p>
    <div class="bs-example">
      <div class="row">
        <div class="col-sm-5">
          <label>FREE Text Enabled:</label><br/>
          <combobox :value.sync="value" :options="fruitOptions" :free-text="true">
          </combobox>
          <pre>Select data : {{value}}</pre>
        </div>
        <div class="col-sm-5">
          <label>FREE Text Disabled:</label><br/>
          <combobox :value.sync="value2" :options="fruitOptions" :free-text="false">
          </combobox>
          <pre>Select data : {{value2}}</pre>
        </div>
      </div>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<combobox :value.sync="value" :options="fruitOptions">
</combobox>
fruitOptions = [ 'Apple', 'Banana', 'Cherry', 'Orange', 'Grape', ]
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
          <td><code>String</code></td>
          <td><code>(empty)</code></td>
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
          <td><code>Array</code></td>
          <td><code>required</code></td>
          <td>An array of option labels (these make up the select portion of the combobox).</td>
        </tr>
        <tr>
          <td>free-text</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>True if you want to allow free text entry. If false the value text box value must match one of the options (case insensitive)</td>
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
        fruitOptions: [ 'Apple', 'Banana', 'Cherry', 'Orange', 'Grape', ],
        fruitCollection: [
          {value:'apple', label:'Apple'},
          {value:'banana', label:'Banana'},
          {value:'cherry', label:'Cherry'},
          {value:'orange', label:'Orange'},
          {value:'grape', label:'Grape'},
        ],
        value: '',
        value2: ''
      }
    }
  }
</script>