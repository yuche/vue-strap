<template>
  <doc-section id="select" name="Select">
    <p>Based in a <a target="_blank" href="https://silviomoreto.github.io/bootstrap-select/">bootstrap-select</a> implementation.</p>
    <div class="bs-example">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <p><pre>Normal select data: {{select.normal}}</pre></p>
          <form action="./#select" method="get">
            <v-select :options="select.options" options-value="val" :value.sync="select.normal" name="animal" :search="select.search"
              :required="select.required" :clear-button="select.clearButton" :disabled="select.disabled"
            ></v-select>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <p><pre>Multiple select data : {{select.multiple.join(',')}}</pre></p>
          <form action="./#select" method="get">
            <v-select :options="select.options" options-value="val" :value.sync="select.multiple" name="animals[]" :search="select.search"
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
      <doc-code>
        <form action="./#select" method="get">
          <v-select :value.sync="select.value" :options="select.options" options-value="val"
            multiple name="animals[]" limit="3"
            search justified required disabled
            clear-button close-on-select
          ></v-select>
          <button type="submit" class="btn btn-default">Submit form</button>
        </form>
      </doc-code>
      <doc-code language="javascript">
        options: [
          {val: 0, label: 'Cat'},
          {val: 1, label: 'Cow'},
          {val: 2, label: 'Dog'},
          {val: 3, label: 'Elephant'},
          {val: 4, label: 'Fish'},
          {val: 5, label: 'Lion'},
          {val: 6, label: 'Tiger'},
          {val: 7, label: 'Turtle'}
        ]
      </doc-code>
      <h4>Select with option component:</h4>
      <p><pre>Selected data : {{single}}</pre></p>
      <v-select :value.sync="single">
        <v-option value="apple">Apple</v-option>
        <v-option value="banana">Banana</v-option>
        <v-option value="cherry">Cherry</v-option>
        <v-option value="orange">Orange</v-option>
        <v-option value="grape">Grape</v-option>
      </v-select>
      <doc-code>
        <v-select>
          <v-option value="apple">Apple</v-option>
          <v-option value="banana">Banana</v-option>
          <v-option value="cherry">Cherry</v-option>
          <v-option value="orange">Orange</v-option>
          <v-option value="grape">Grape</v-option>
        </v-select>
      </doc-code>
      <hr/>
      <h4>Use button-group (component or <a href="http://getbootstrap.com/components/#btn-groups-justified">bootstrap element</a>) if you want to justify.</h4>
      <button-group justified>
        <v-select multiple clear-button>
          <v-option value="apple">Apple</v-option>
          <v-option value="banana">Banana</v-option>
          <v-option value="cherry">Cherry</v-option>
          <v-option value="cranberry">Cranberry</v-option>
          <v-option value="grape">Grape</v-option>
          <v-option value="orange">Orange</v-option>
          <v-option value="passionfruit">Passionfruit</v-option>
          <v-option value="pineapple">Pineapple</v-option>
          <v-option value="strawberry">Strawberry</v-option>
          <v-option value="a">Apple</v-option>
          <v-option value="b">Banana</v-option>
          <v-option value="c">Cherry</v-option>
          <v-option value="c">Cranberry</v-option>
          <v-option value="g">Grape</v-option>
          <v-option value="o">Orange</v-option>
          <v-option value="p">Passionfruit</v-option>
          <v-option value="p">Pineapple</v-option>
          <v-option value="s">Strawberry</v-option>
        </v-select>
      </button-group>
      <doc-code>
        <button-group justified><select>...</select></button-group>
        // or
        <div class="btn-group btn-group-justified"><select>...</select></div>
      </doc-code>
      <hr/>
      <h4>Ajax data and parent dependency:</h4>
      <p>The second element has inheritance. Enable when the first get some value and the ajax return values.</p>
      <v-select url="docs/data.json" options-label="text" :value.sync="ajax.value" clear-button v-ref:ajax></v-select>
      <v-select url="docs/data.json" options-label="text" multiple :parent="ajax.value"></v-select>
      <doc-code>
        <v-select url="docs/data.json" options-label="text" :value.sync="ajax.value" clear-button></v-select>
        <v-select url="docs/data.json" options-label="text" multiple :parent="ajax.value"></v-select>
      </doc-code>
      <p>Ajax response:</p>
      <pre v-html="$refs.ajax.options|json"></pre>
    </div>
    <doc-table name="Other">
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
        <p>options-label</p>
        <p><code>String</code></p>
        <p><code>label</code></p>
        <p>Define the value in the data used as label.</p>
      </div>
      <div>
        <p>options-value</p>
        <p><code>String</code></p>
        <p><code>value</code></p>
        <p>Define the value in the data used as value.</p>
      </div>
      <div>
        <p>placeholder</p>
        <p><code>String</code></p>
        <p>Nothing Selected</p>
      </div>
      <div>
        <p>search-text</p>
        <p><code>String</code></p>
      </div>
    </doc-table>
    <doc-table type="Events">
      <div>
        <p>change</p>
        <p>(<code>value</code>)</p>
        <p>Return the selected value(s).</p>
      </div>
      <div>
        <p>selected</p>
        <p>(<code>labels:String</code>)</p>
        <p>Return a string with the label(s) of the selected item(s).</p>
      </div>
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './docSection.vue'
import docTable from './docTable.vue'
import docCode from './docCode.vue'
import buttonGroup from 'src/buttonGroup.vue'
import checkbox from 'src/Checkbox.vue'
import vSelect from 'src/Select.vue'
import vOption from 'src/Option.vue'

export default {
  components: {
    docSection,
    docTable,
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
          {val: 0, label: 'Cat'},
          {val: 1, label: 'Cow'},
          {val: 2, label: 'Dog'},
          {val: 3, label: 'Elephant'},
          {val: 4, label: 'Fish'},
          {val: 5, label: 'Lion'},
          {val: 6, label: 'Tiger'},
          {val: 7, label: 'Turtle'}
        ],
        justified: true,
        search: true
      },
      ajax: {
        value:null
      },
      single: []
    }
  }
}
</script>

<style>
.checkbox>label:not(:first-child) {
  margin-left: 15px;
}
</style>
