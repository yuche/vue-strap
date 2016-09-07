<template>
  <doc-section id="select" name="Select">
    <p>Based in a <a target="_blank" href="https://silviomoreto.github.io/bootstrap-select/">bootstrap-select</a> implementation.</p>
    <div class="bs-example">
      <h4>Select with options:</h4>
      <p><pre>Selected data : {{show(single)}}</pre></p>
      <v-select :value.sync="single">
        <v-option value="apple">Apple</v-option>
        <v-option value="banana">Banana</v-option>
        <v-option value="cherry">Cherry</v-option>
        <v-option value="orange">Orange</v-option>
        <v-option value="grape">Grape</v-option>
      </v-select>
      <hr/>
      <h4>Test options:</h4>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <p><pre>Normal select data: {{show(select.normal)}}</pre></p>
          <form action="./#select" method="get">
            <v-select :options="select.options" :value.sync="select.normal" name="animal'" :search="select.search" :justified="select.justified"
              :required="select.required" :clear-button="select.clearButton" :disabled="select.disabled"
            ></v-select>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <p><pre>Multiple select data : {{show(select.multiple)}}</pre></p>
          <form action="./#select" method="get">
            <v-select :options="select.options" :value.sync="select.multiple" name="animals[]" :search="select.search" :justified="select.justified"
              multiple :required="select.required" :clear-button="select.clearButton"
              :close-on-select="select.closeOnSelect" :limit="select.limit?3:1024" :disabled="select.disabled"
            ></v-select>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
      <br/>
      <button-group type="primary" buttons="false">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <p><checkbox :checked.sync="select.disabled">Disabled</checkbox></p>
            <p><checkbox :checked.sync="select.search">Search</checkbox></p>
            <p><checkbox :checked.sync="select.justified">Justified</checkbox></p>
            <p><checkbox :checked.sync="select.clearButton">Clear Button</checkbox></p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <p><checkbox :checked.sync="select.required">Required (empty value if noting selected)</checkbox></p>
            <p>
              Multiple:
              <checkbox v-if="select.multiple" :checked.sync="select.limit">Limit (e.g. 3)</checkbox>
              <checkbox v-if="select.multiple" :checked.sync="select.closeOnSelect">Close on Select</checkbox>
            </p>
          </div>
        </div>
      </button-group>
    </div>
    <doc-code language="markup">
      <v-select>
        <v-option value="apple">Apple</v-option>
        <v-option value="banana">Banana</v-option>
        <v-option value="cherry">Cherry</v-option>
        <v-option value="orange">Orange</v-option>
        <v-option value="grape">Grape</v-option>
      </v-select>
      <form action="./#select" method="get">
        <v-select :value.sync="select.value" :options="select.options"
          multiple name="animals[]" limit="3"
          search justified required disabled
          clear-button close-on-select
        ></v-select>
        <button type="submit" class="btn btn-default">Submit form</button>
      </form>
    </doc-code>
    <doc-code language="javascript">
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
    </doc-code>

    <hr />
    <h4>Ajax data and parent dependency:</h4>
    <p>The second element has inheritance. Enable when the first get some value and the ajax return values.</p>
    <v-select url="docs/data.json" :value.sync="ajax.value" clear-button v-ref:ajax></v-select>
    <v-select url="docs/data.json" multiple :parent="ajax.value"></v-select>
    <doc-code language="markup">
      <v-select url="docs/data.json" :value.sync="ajax.value" clear-button></v-select>
      <v-select url="docs/data.json" multiple :parent="ajax.value"></v-select>
    </doc-code>
    <p>Ajax response:</p>
    <pre v-html="$refs.ajax.options|json"></pre>

    <doc-options name="Other">
      <div>
        <p>min-search</p>
        <p><code>Number</code></p>
        <p><code>0</code></p>
        <p>If defined, the searchbox is disabled if are less than the minimum value you set.</p>
      </div>
      <div>
        <p>lang</p>
        <p><code>String</code></p>
        <p>Browser language</p>
        <p><abbr title="ISO 639-1 code"><a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</p>
      </div>
      <div>
        <p>placeholder</p>
        <p><code>String</code></p>
        <p>Nothing Selected</p>
        <p></p>
      </div>
      <div>
        <p>search-text</p>
        <p><code>String</code></p>
        <p></p>
        <p></p>
      </div>
    </doc-options>
  </doc-section>
</template>

<script>
import docSection from './docSection.vue'
import docOptions from './docOptions.vue'
import docCode from './docCode.vue'
import buttonGroup from 'src/buttonGroup.vue'
import checkbox from 'src/Checkbox.vue'
import vSelect from 'src/Select.vue'
import vOption from 'src/Option.vue'

export default {
  components: {
    docSection,
    docOptions,
    docCode,
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
        justified: true,
        search: true
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
