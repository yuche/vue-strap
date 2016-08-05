<template>
  <div class="bs-docs-section" id="input">
    <h1 class="page-header"><a href="#select" class="anchor">Input</a></h1>
    <div class="bs-example text-left">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <bs-input
            :disabled="check.disabled"
            :error="check.error?'Insert user name':null"
            help="Only allows lowercase letters and numbers."
            :icon="check.icon"
            :label="check.label?'User Name':null"
            :mask="check.mask?mask:null"
            :minlength="check.minlength?5:0"
            pattern="^[a-z][a-z0-9]+$"
            :placeholder="check.placeholder?'Username can\'t start with a number.':null"
            :readonly="check.readonly"
            :required="check.required"
            :value.sync="input"
          ></bs-input>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <bs-input required label="Match value" type="password" :match="input" :icon="check.icon" help="Match the User Name"></bs-input>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div class="checkbox"><label><input type="checkbox" v-model="check.label"/> Label</label></div>
          <div class="checkbox"><label><input type="checkbox" v-model="check.placeholder"/> placeholder</label></div>
          <div class="checkbox"><label><input type="checkbox" v-model="check.disabled"/> disabled</label></div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div class="checkbox"><label><input type="checkbox" v-model="check.error"/> error</label></div>
          <div class="checkbox"><label><input type="checkbox" v-model="check.icon"/> icon</label></div>
          <div class="checkbox"><label><input type="checkbox" v-model="check.mask"/> mask</label></div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div class="checkbox"><label><input type="checkbox" v-model="check.minlength"/> minlength=5</label></div>
          <div class="checkbox"><label><input type="checkbox" v-model="check.readonly"/> readonly</label></div>
          <div class="checkbox"><label><input type="checkbox" v-model="check.required"/> required</label></div>
        </div>
      </div>
    </div>
    <pre><code class="language-markup">
&lt;bs-input :value.sync="input"
  label="Username"
  help="Only allows lowercase letters and numbers."
  error="Insert username"
  placeholder="Username can't start with a number."
  pattern="^[a-z][a-z0-9]+$"
  :mask="mask"
  minlength="5"
  readonly
  required
  icon
>&lt;/bs-input>
&lt;bs-input required label="Match value" type="password" :match="input">&lt;/bs-input>
    </code></pre>
  <pre><code class="language-javascript"><script type="language-javascript">
mask: function (value) {
  // change to lowercase, remove first non-letter and all other unsupported characters
  return value.toLowerCase().replace(/^[^a-z]+/,'').replace(/\W/g,'');
}
  </script></code></pre>

    <h2>Input Options</h2>
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
          <td><code>''</code></td>
          <td>Input value. Use <code>:value.sync="value"</code></td>
        </tr>
        <tr>
          <td>match</td>
          <td><code>String</code></td>
          <td><code>''</code></td>
          <td>Matching value. Both have to be the same value.</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td></td>
        </tr>
        <!-- <tr>
          <td>enterSubmit</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>Error message.</td>
        </tr> -->
        <tr>
          <td>error</td>
          <td><code>String</code></td>
          <td><code>null</code></td>
          <td>Error message.</td>
        </tr>
        <tr>
          <td>help</td>
          <td><code>String</code></td>
          <td><code>null</code></td>
          <td>Help text behind the input</td>
        </tr>
        <tr>
          <td>hide-help</td>
          <td><code>Boolean</code></td>
          <td><code>true</code></td>
          <td>Only work with help and error.<br/>Hide the help if have to show any error message.</td>
        </tr>
        <tr>
          <td>icon</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td></td>
        </tr>
        <tr>
          <td>label</td>
          <td><code>String</code></td>
          <td><code>null</code></td>
          <td>Enable input label (name).</td>
        </tr>
        <tr>
          <td>lang</td>
          <td><code>String</code></td>
          <td>Browser language</td>
          <td><abbr title="ISO 639-1 code"><a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</td>
        </tr>
        <tr>
          <td>mask</td>
          <td><code>Function</code></td>
          <td><code>null</code></td>
          <td>Mask function that receive and edit the value.</td>
        </tr>
        <tr>
          <td>maxlength</td>
          <td><code>Number</code></td>
          <td><code>null</code></td>
          <td></td>
        </tr>
        <tr>
          <td>minlength</td>
          <td><code>Number</code></td>
          <td><code>0</code></td>
          <td></td>
        </tr>
        <tr>
          <td>name</td>
          <td><code>String</code></td>
          <td><code>null</code></td>
          <td></td>
        </tr>
        <tr>
          <td>pattern</td>
          <td><code>String</code> or <code>Function</code></td>
          <td><code>null</code></td>
          <td>Validation pattern.</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td><code>String</code></td>
          <td><code>null</code></td>
          <td></td>
        </tr>
        <tr>
          <td>required</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td></td>
        </tr>
        <tr>
          <td>type</td>
          <td><code>String</code></td>
          <td><code>'text'</code></td>
          <td></td>
        </tr>
        <tr>
          <td>validation-delay</td>
          <td><code>Number</code></td>
          <td><code>250</code></td>
          <td></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import bsInput from 'src/Input.vue'

export default {
  components: {
    bsInput
  },
  data () {
    return {
      check: {
        label:true
      },
      input: null,
      match: null
    }
  },
  methods: {
    mask (value) {
      return value.toLowerCase().replace(/^[^a-z]+/,'').replace(/\W/g,'')
    }
  }
}
</script>
