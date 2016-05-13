<template>
  <div class="bs-docs-section" id="select">
    <h1 class="page-header"><a href="#select" class="anchor">Select</a></h1>
    <p>
      This a <a target="_blank" href="https://silviomoreto.github.io/bootstrap-select/">bootstrap-select</a> implementation.
    </p>
    <div class="bs-example">
      <p>
        <pre>
Select data : {{single}}
        </pre>
      </p>
      <v-select :value.sync="single">
        <v-option value="Apple">Apple</v-option>
        <v-option value="Banana">Banana</v-option>
        <v-option value="Cherry">Cherry</v-option>
        <v-option value="Orange">Orange</v-option>
        <v-option value="Grape">Grape</v-option>
      </v-select>
      <hr>
      <h4>Multiple select</h4>
      <p>
        <pre>
Select data : {{multiple.join(', ')}}
        </pre>
      </p>
      <v-select multiple :value.sync="multiple">
        <v-option value="Apple">Apple</v-option>
        <v-option value="Banana">Banana</v-option>
        <v-option value="Cherry">Cherry</v-option>
        <v-option value="Orange">Orange</v-option>
        <v-option value="Grape">Grape</v-option>
      </v-select>
      <hr>
      <h4>Multiple select limit</h4>
      <p>
        <pre>
Select data : {{multipleLimit.join(', ')}}
        </pre>
      </p>
      <v-select multiple :limit="2" :value.sync="multipleLimit">
        <v-option value="Apple">Apple</v-option>
        <v-option value="Banana">Banana</v-option>
        <v-option value="Cherry">Cherry</v-option>
        <v-option value="Orange">Orange</v-option>
        <v-option value="Grape">Grape</v-option>
      </v-select>
      <hr>
      <h4>Custom template</h4>
      <p>
        <pre>
Select data : {{custom.join(', ')}}
        </pre>
      </p>
      <v-select multiple :value.sync="custom">
        <v-option value="Star"><span slot="span" class="glyphicon glyphicon-star"></span> Star</v-option>
        <v-option value="Heart"><span slot="span" class="glyphicon glyphicon-heart"></span> Heart</v-option>
        <v-option value="Film"><span slot="span" class="glyphicon glyphicon-film"></span> Film</v-option>
        <v-option value="Inbox"><span slot="span" class="glyphicon glyphicon-inbox"></span> Inbox</v-option>
      </v-select>
      <hr />
      <h4>Array/Collection driven w/ search</h4>
      <p>
        Optionally specify an options (array/collection) which will drive the contents of the property. You can enable search mode in this case.
        <pre>
Select data : {{arr}}
        </pre>
      </p>
      <v-select :value.sync="arr" :options="fruitOptions" :search="true" :close-on-select="true">
      </v-select>

      <hr />
      <h4>Automatically close array driven selects</h4>
      <p>Using the property :close-on-select="true" array driven selects will auto-close after selecting an entry.</p>
      <v-select :value.sync="arr2" :options="fruitOptions" :close-on-select="true">
      </v-select>

      <h4>Disabled selects</h4>
      <v-select :value.sync="disabled" :options="fruitOptions" :close-on-select="true" :disabled="true">
      </v-select>

    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<v-select>
  <v-option value="Apple">Apple</v-option>
  <v-option value="Banana">Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">Orange</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>
<hr>
<v-select multiple>
  <v-option value="Apple">Apple</v-option>
  <v-option value="Banana">Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">Orange</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>
<hr>
 <v-select multiple :limit="2">
  <v-option value="Apple">Apple</v-option>
  <v-option value="Banana">Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">Orange</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>
<hr>
<v-select multiple>
  <v-option value="Star"><span slot="span" class="glyphicon glyphicon-star"></span> Star</v-option>
  <v-option value="Heart"><span slot="span" class="glyphicon glyphicon-heart"></span> Heart</v-option>
  <v-option value="Film"><span slot="span" class="glyphicon glyphicon-film"></span> Film</v-option>
  <v-option value="Inbox"><span slot="span" class="glyphicon glyphicon-inbox"></span> Inbox</v-option>
</v-select>

<v-select :value.sync="arr" :options="fruitOptions" :search="true">
</v-select>
fruitOptions = [
  {value:'apple', label:'Apple'},
  {value:'banana', label:'Banana'},
  {value:'cherry', label:'Cherry'},
  {value:'orange', label:'Orange'},
  {value:'grape', label:'Grape'},
]

<v-select :value.sync="arr2" :options="fruitOptions" :close-on-select="true">
</v-select>
    </script></code></pre>
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
