<template>
  <div class="bs-docs-section" id="select">
    <h1 class="page-header"><a href="#select" class="anchor">Select</a></h1>
    <p>
      This a <a target="_blank" href="https://silviomoreto.github.io/bootstrap-select/">bootstrap-select</a> implementation.
    </p>
    <div class="bs-example">
      <h4>Simple select</h4>
      <p><pre>Select data : {{show(single)}}</pre></p>
      <v-select :value.sync="single">
        <v-option value="apple">Apple</v-option>
        <v-option value="banana">Banana</v-option>
        <v-option value="cherry">Cherry</v-option>
        <v-option value="orange">Orange</v-option>
        <v-option value="grape">Grape</v-option>
      </v-select>

      <hr />
      <h4>Test options:</h4>
      <p><pre>Selected data : {{show(select.value)}}</pre></p>
      <form action="./#select" method="get">
        <v-select :options="select.options" :value.sync="select.value" :name="select.inputs?(select.multiple?'animals[]':'animal'):''"
          :multiple="select.multiple" :search="select.search" :justified="select.justified" :required="select.inputs&&select.required"
          :show-reset-button="select.showResetButton" :close-on-select="select.closeOnSelect" :limit="select.limit?3:1024" :disabled="select.disabled"></v-select>
        <button v-if="select.inputs" type="submit" class="btn btn-default">Submit form</button>
      </form>
      <div class="checkbox"><label><input type="checkbox" v-model="select.disabled"/> Disabled</label></div>
      <div class="checkbox"><label><input type="checkbox" v-model="select.search"/> Search</label></div>
      <div class="checkbox">
        <label><input type="checkbox" v-model="select.multiple"/> Multiple</label>
        <label v-if="select.multiple"><input type="checkbox" v-model="select.limit"/> Limit (e.g. 3)</label>
        <label v-if="select.multiple"><input type="checkbox" v-model="select.closeOnSelect"/> Close on Select</label>
      </div>
      <div class="checkbox"><label><input type="checkbox" v-model="select.justified"/> Justified</label></div>
      <div class="checkbox"><label><input type="checkbox" v-model="select.showResetButton"/> Show Reset Button</label></div>
      <div class="checkbox">
        <label><input type="checkbox" v-model="select.inputs"/> Form input</label>
        <label v-if="select.inputs"><input type="checkbox" v-model="select.required"/> Required (add empty value if noting selected)</label>
      </div>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
Simple:
<v-select>
  <v-option value="apple">Apple</v-option>
  <v-option value="banana">Banana</v-option>
  <v-option value="cherry">Cherry</v-option>
  <v-option value="orange">Orange</v-option>
  <v-option value="grape">Grape</v-option>
</v-select>

Test options:
<form action="./#select" method="get">
  <v-select :options="select.options" :value.sync="select.value" :name="select.inputs?(select.multiple?'animals[]':'animal'):''"
    :multiple="select.multiple" :search="select.search" :justified="select.justified" :required="select.inputs&&select.required"
    :show-reset-button="select.showResetButton" :close-on-select="select.closeOnSelect" :limit="select.limit?3:1024" :disabled="select.disabled"></v-select>
  <button v-if="select.inputs" type="submit" class="btn btn-default">Submit form</button>
</form>
<div class="checkbox"><label><input type="checkbox" v-model="select.disabled"/> Disabled</label></div>
<div class="checkbox"><label><input type="checkbox" v-model="select.search"/> Search</label></div>
<div class="checkbox">
  <label><input type="checkbox" v-model="select.multiple"/> Multiple</label>
  <label v-if="select.multiple"><input type="checkbox" v-model="select.limit"/> Limit (e.g. 3)</label>
  <label v-if="select.multiple"><input type="checkbox" v-model="select.closeOnSelect"/> Close on Select</label>
</div>
<div class="checkbox"><label><input type="checkbox" v-model="select.justified"/> Justified</label></div>
<div class="checkbox"><label><input type="checkbox" v-model="select.showResetButton"/> Show Reset Button</label></div>
<div class="checkbox">
  <label><input type="checkbox" v-model="select.inputs"/> Form input</label>
  <label v-if="select.inputs"><input type="checkbox" v-model="select.required"/> Required (add empty value if noting selected)</label>
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
      <v-select url="docs/data.json" :value.sync="ajax.value" show-reset-button></v-select>
      <v-select url="docs/data.json" multiple :parent="ajax.value"></v-select>
    <pre><code class="language-markup">
Ajax:
&lt;v-select url="docs/data.json" :value.sync="ajax.value" show-reset-button>&lt;/v-select>
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
  data () {
    return {
      select: {
        options: [
          {value: 1, label: 'Cat'},
          {value: 2, label: 'Cow'},
          {value: 3, label: 'Dog'},
          {value: 4, label: 'Elephant'},
          {value: 5, label: 'Fish'},
          {value: 6, label: 'Lion'},
          {value: 7, label: 'Tiger'},
          {value: 8, label: 'Turtle'}
        ]
      },
      ajax: {
        value:null
      },
      single: []
    }
  },
  methods: {
    show (value) {
      return value instanceof Array ? value.join(', ') : value
    }
  }
}
</script>

<style>
.checkbox>label:not(:first-child) {
  margin-left: 15px;
}
</style>
