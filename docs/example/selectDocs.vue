<template>
  <div class="bs-docs-section" id="select">
    <h1 class="page-header"><a href="#select" class="anchor">Select</a></h1>
    <p>
      This a <a target="_blank" href="https://silviomoreto.github.io/bootstrap-select/">bootstrap-select</a> implementation.
    </p>
    <div class="bs-example">
      <h4>Simple select</h4>
      <p><pre>Select data : {{single}}</pre></p>
      <v-select :value.sync="single">
        <v-option value="Apple">Apple</v-option>
        <v-option value="Banana">Banana</v-option>
        <v-option value="Cherry">Cherry</v-option>
        <v-option value="Orange">Orange</v-option>
        <v-option value="Grape">Grape</v-option>
      </v-select>

      <hr />
      <h4>Test options:</h4>
      <p><pre>Selected data : {{test.value.join(', ')}}</pre></p>
      <form action="./#select" method="get">
        <v-select :options="test.options" :value.sync="test.value" :name="test.inputs?(test.multiple?'animals[]':'animal'):''"
          :multiple="test.multiple" :search="test.search" :justified="test.justified" :required="test.inputs&&test.required"
          :show-reset-button="test.showResetButton" :close-on-select="test.closeOnSelect" :limit="test.limit?3:1024" :disabled="test.disabled"></v-select>
        <button v-if="test.inputs" type="submit" class="btn btn-default">Submit form</button>
      </form>
      <div class="checkbox"><label><input type="checkbox" v-model="test.disabled"/> Disabled</label></div>
      <div class="checkbox"><label><input type="checkbox" v-model="test.search"/> Search</label></div>
      <div class="checkbox">
        <label><input type="checkbox" v-model="test.multiple"/> Multiple</label>
        <label v-if="test.multiple"><input type="checkbox" v-model="test.limit"/> Limit (e.g. 3 - default: 1024)</label>
        <label v-if="test.multiple"><input type="checkbox" v-model="test.closeOnSelect"/> Close on Select</label>
      </div>
      <div class="checkbox"><label><input type="checkbox" v-model="test.justified"/> Justified</label></div>
      <div class="checkbox"><label><input type="checkbox" v-model="test.showResetButton"/> Show Reset Button</label></div>
      <div class="checkbox">
        <label><input type="checkbox" v-model="test.inputs"/> Form input</label>
        <label v-if="test.inputs"><input type="checkbox" v-model="test.required"/> Required (add empty value if noting selected)</label>
      </div>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
Simple:
<v-select>
  <v-option value="Apple">Apple</v-option>
  <v-option value="Banana">Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">Orange</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>

Test options:
<form action="./#select" method="get">
  <v-select :options="options" :value.sync="value" :name="inputs?(multiple?'animals[]':'animal'):''"
    :multiple="multiple" :search="search" :justified="justified" :required="inputs&&required"
    :show-reset-button="showResetButton" :close-on-select="closeOnSelect" :limit="limit?3:1024"></v-select>
  <button v-if="inputs" type="submit" class="btn btn-default">Submit form</button>
</form>
<div class="checkbox"><label><input type="checkbox" v-model="disabled"> Disabled</label></div>
<div class="checkbox"><label><input type="checkbox" v-model="search"> Search</label></div>
<div class="checkbox">
  <label><input type="checkbox" v-model="multiple"> Multiple</label>
  <label v-if="multiple"><input type="checkbox" v-model="limit"> Limit (e.g. 3 - default: 1024)</label>
  <label v-if="multiple"><input type="checkbox" v-model="closeOnSelect"> Close on Select</label>
</div>
<div class="checkbox"><label><input type="checkbox" v-model="justified"> Justified</label></div>
<div class="checkbox"><label><input type="checkbox" v-model="showResetButton"> Show Reset Button</label></div>
<div class="checkbox">
  <label><input type="checkbox" v-model="inputs"> Form input</label>
  <label v-if="inputs"><input type="checkbox" v-model="required"> Required (add empty value if noting selected)</label>
</div>
options: [
  {value:1, label:'Cat'},
  {value:2, label:'Cow'},
  {value:3, label:'Dog'},
  {value:4, label:'Elephant'},
  {value:5, label:'Fish'},
  {value:6, label:'Lion'},
  {value:7, label:'Tiger'},
  {value:8, label:'Turtle'}
]
    </script></code></pre>

      <hr />
      <h4>Ajax data & parent dependency:</h4>
      <p>
        The second element has inheritance. Enable when the first get some value & the ajax return values.
      </p>
      <v-select url="docs/data.json" multiple :value.sync="ajax.value"></v-select>
      <v-select url="docs/data.json" multiple :parent="ajax.value"></v-select>
    <pre><code class="language-markup">
Ajax:
&lt;v-select url="docs/data.json" multiple :value.sync="ajax.value">&lt;/v-select>
&lt;v-select url="docs/data.json" multiple :parent="ajax.value">&lt;/v-select>
    </code></pre>

    <h2>Select Options</h2>
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
          <td>multiple</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td></td>
        </tr>
        <tr>
          <td>limit</td>
          <td><code>Number</code></td>
          <td><code>1024</code></td>
          <td>Limit the number of elements you are allowed to select.</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  import vSelect from 'src/Select.vue'
  import vOption from 'src/Option.vue'
  export default {
    components: {
      vSelect,
      vOption
    },
    data() {
      return {
        test: {
          options: [
            {value:1, label:'Cat'},
            {value:2, label:'Cow'},
            {value:3, label:'Dog'},
            {value:4, label:'Elephant'},
            {value:5, label:'Fish'},
            {value:6, label:'Lion'},
            {value:7, label:'Tiger'},
            {value:8, label:'Turtle'}
          ]
        },
        ajax: {
        },
        fruitOptions: [
          {value:'Apple', label:'Apple'},
          {value:'Banana', label:'Banana'},
          {value:'Cherry', label:'Cherry'},
          {value:'Orange', label:'Orange'},
          {value:'Grape', label:'Grape'},
        ],
        arr: [],
        arr2: [],
        single: [],
        multiple: [],
        multipleLimit: [],
        custom: [],
        disabled: []
      }
    }
  }
</script>

<style>
.checkbox>label:not(:first-child) {
  margin-left: 15px;
}
</style>
