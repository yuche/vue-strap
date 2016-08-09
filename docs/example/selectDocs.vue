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
          :clear-button="select.clearButton" :close-on-select="select.closeOnSelect" :limit="select.limit?3:1024" :disabled="select.disabled"
        ></v-select>
        <button v-if="select.inputs" type="submit" class="btn btn-default">Submit form</button>
      </form>
      <br/>
      <button-group type="primary" buttons="false">
        <p><checkbox :checked.sync="select.disabled">Disabled</checkbox></p>
        <p><checkbox :checked.sync="select.search">Search</checkbox></p>
        <p>
          <checkbox :checked.sync="select.multiple">Multiple</checkbox>
          <checkbox v-if="select.multiple" :checked.sync="select.limit">Limit (e.g. 3)</checkbox>
          <checkbox v-if="select.multiple" :checked.sync="select.closeOnSelect">Close on Select</checkbox>
        </p>
        <p><checkbox :checked.sync="select.justified">Justified</checkbox></p>
        <p><checkbox :checked.sync="select.clearButton">Clear Button</checkbox></p>
        <p>
          <checkbox :checked.sync="select.inputs">Form input</checkbox>
          <checkbox v-if="select.inputs" :checked.sync="select.required">Required (add empty value if noting selected)</checkbox>
        </p>
      </button-group>
    </div>
    <pre><code class="language-markup">
&lt;v-select>
  &lt;v-option value="apple">Apple&lt;/v-option>
  &lt;v-option value="banana">Banana&lt;/v-option>
  &lt;v-option value="cherry">Cherry&lt;/v-option>
  &lt;v-option value="orange">Orange&lt;/v-option>
  &lt;v-option value="grape">Grape&lt;/v-option>
&lt;/v-select>

&lt;form action="./#select" method="get">
  &lt;v-select :value.sync="select.value" :options="select.options"
    multiple name="animals[]" limit="3"
    search justified required disabled
    clear-button close-on-select
  >&lt;/v-select>
  &lt;button type="submit" class="btn btn-default">Submit form&lt;/button>
&lt;/form>
    </code></pre>
    <pre><code class="language-javascript"><script type="language-javascript">
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
    </script></code></pre>

      <hr />
      <h4>Ajax data and parent dependency:</h4>
      <p>
        The second element has inheritance. Enable when the first get some value and the ajax return values.
      </p>
      <v-select url="docs/data.json" :value.sync="ajax.value" clear-button></v-select>
      <v-select url="docs/data.json" multiple :parent="ajax.value"></v-select>
    <pre><code class="language-markup">
&lt;v-select url="docs/data.json" :value.sync="ajax.value" clear-button>&lt;/v-select>
&lt;v-select url="docs/data.json" multiple :parent="ajax.value">&lt;/v-select>
    </code></pre>

    <h2>Other Options</h2>
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
          <td>close-on-select</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td></td>
        </tr>
        <tr>
          <td>lang</td>
          <td><code>String</code></td>
          <td>Browser language</td>
          <td><abbr title="ISO 639-1 code"><a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td><code>String</code></td>
          <td>Nothing Selected</td>
          <td></td>
        </tr>
        <tr>
          <td>search-text</td>
          <td><code>String</code></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import buttonGroup from 'src/buttonGroup.vue'
import checkbox from 'src/Checkbox.vue'
import vSelect from 'src/Select.vue'
import vOption from 'src/Option.vue'

export default {
  components: {
    buttonGroup,
    checkbox,
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
        ],
        justified: true
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
