<template>
  <doc-section id="input" name="Input">
    <div class="bs-example text-left">
      <form action="." method="get" accept-charset="utf-8">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <bs-input name="username"
              :disabled="check.disabled"
              :error="check.error && 'Insert user name'"
              help="Only allows lowercase letters and numbers."
              :enter-submit="check.enterSubmit"
              :icon="check.icon"
              :label="check.label && 'User Name'"
              :mask="check.mask?mask:null"
              :minlength="check.minlength?5:0"
              pattern="^[a-z][a-z0-9]+$"
              :placeholder="check.placeholder && 'Username can\'t start with a number.'"
              :readonly="check.readonly"
              :required="check.required"
              :hide-help="check.hideHelp"
              :clear-button="check.clearButton"
              :value.sync="input"
            ></bs-input>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <bs-input name="match" required label="Match value" type="password" :match="input" :icon="check.icon" :enter-submit="check.enterSubmit" help="Match the User Name"></bs-input>
          </div>
        </div>
        <div class="row">
          <button-group type="primary" buttons="false">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <p><checkbox :checked.sync="check.label">Label</checkbox></p>
              <p><checkbox :checked.sync="check.placeholder">placeholder</checkbox></p>
              <p><checkbox :checked.sync="check.hideHelp">hide help</checkbox></p>
              <p><checkbox :checked.sync="check.disabled">disabled</checkbox></p>
              <p><checkbox :checked.sync="check.error">error</checkbox></p>
              <p><checkbox :checked.sync="check.icon">icon</checkbox></p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <p><checkbox :checked.sync="check.mask">mask</checkbox></p>
              <p><checkbox :checked.sync="check.minlength">minlength=5</checkbox></p>
              <p><checkbox :checked.sync="check.readonly">readonly</checkbox></p>
              <p><checkbox :checked.sync="check.required">required</checkbox></p>
              <p><checkbox :checked.sync="check.clearButton">clear button</checkbox></p>
              <p><checkbox :checked.sync="check.enterSubmit">enter submit</checkbox></p>
            </div>
          </button-group>
        </div>
        <hr/>
        <bs-input label="Input with slots" type="text" required icon clear-button>
          <span slot="before" class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
          <span slot="after" class="input-group-addon"><span class="glyphicon glyphicon-question-sign"></span></span>
        </bs-input>
        <bs-input name="textarea" label="Textarea" type="textarea" :icon="check.icon" :enter-submit="check.enterSubmit"
          @focus="event = 'focused'"
          @blur="event = 'blured'"
        ></bs-input>
        <pre> Test event on textarea: {{event}}</pre>
      </form>
    </div>
    <doc-code language="markup">
      <bs-input :value.sync="input"
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
      ></bs-input>
      <bs-input required label="Match value" type="password" :match="input"></bs-input>
      <bs-input label="Textarea" type="textarea" @focus="event = 'focused'" @blur="event = 'blured'"></bs-input>
    </doc-code>
    <doc-code language="javascript">
      mask: function (value) {
        // change to lowercase, remove first non-letter and all other unsupported characters
        return value.toLowerCase().replace(/^[^a-z]+/,'').replace(/\W/g,'');
      }
    </doc-code>
    <doc-options>
      <div>
        <p>value</p>
        <p><code>String</code></p>
        <p><code>''</code></p>
        <p>Input value. Use <code>:value.sync="value"</code></p>
      </div>
      <div>
        <p>match</p>
        <p><code>String</code></p>
        <p><code>''</code></p>
        <p>Matching value. Both have to be the same value.</p>
      </div>
      <div>
        <p>disabled</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p></p>
      </div>
      <div>
        <p>enterSubmit</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Submit when you press <code>Enter</code>. Not supported on type <code>textarea</code>.</p>
      </div>
      <div>
        <p>error</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p>Error message.</p>
      </div>
      <div>
        <p>help</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p>Help text behind the input</p>
      </div>
      <div>
        <p>hide-help</p>
        <p><code>Boolean</code></p>
        <p><code>true</code></p>
        <p>Only work with help and error.<br/>Hide the help if have to show any error message.</p>
      </div>
      <div>
        <p>icon</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p></p>
      </div>
      <div>
        <p>label</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p>Enable input label (name).</p>
      </div>
      <div>
        <p>lang</p>
        <p><code>String</code></p>
        <p>Browser language</p>
        <p><abbr title="ISO 639-1 code"><a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">Language</a></abbr>. Default <code>en</code> if the translation doesn't exist.</p>
      </div>
      <div>
        <p>mask</p>
        <p><code>Function</code></p>
        <p><code>null</code></p>
        <p>Mask function that receive and edit the value.</p>
      </div>
      <div>
        <p>maxlength</p>
        <p><code>Number</code></p>
        <p><code>null</code></p>
        <p></p>
      </div>
      <div>
        <p>minlength</p>
        <p><code>Number</code></p>
        <p><code>0</code></p>
        <p></p>
      </div>
      <div>
        <p>name</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p></p>
      </div>
      <div>
        <p>pattern</p>
        <p><code>String</code>, <code>RegExp</code> or <code>Function</code></p>
        <p><code>null</code></p>
        <p>Validation pattern. A full <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank">regular expression</a> or a function that evaluate the content and return <code>true</code> or <code>false</code>.</p>
      </div>
      <div>
        <p>placeholder</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p></p>
      </div>
      <div>
        <p>required</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p></p>
      </div>
      <div>
        <p>type</p>
        <p><code>String</code></p>
        <p><code>text</code></p>
        <p></p>
      </div>
      <div>
        <p>validation-delay</p>
        <p><code>Number</code></p>
        <p><code>250</code></p>
        <p></p>
      </div>
    </doc-options>
    <doc-options name="Supported Native Validator">
      <div>
        <p>type</p>
        <p></p>
        <p></p>
        <p>Use native validation with <code>url</code> and <code>email</code>.</p>
      </div>
      <div>
        <p>min / max / step</p>
        <p></p>
        <p></p>
        <p>
          That attributes handle the values supported.
          Work with the following input types: <code>number</code>, <code>range</code>, <code>date</code>, <code>datetime-local</code>, <code>month</code>, <code>time</code> and <code>week</code>.
        </p>
      </div>
    </doc-options>
    That validations only work in browsers that support <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation" target="_blank">HTML5 form validations (all modern browsers support it).</a>

  </doc-section>
</template>

<script>
import docSection from './docSection.vue'
import docOptions from './docOptions.vue'
import docCode from './docCode.vue'
import bsInput from 'src/Input.vue'
import baseInput from 'src/BaseInput.vue'
import buttonGroup from 'src/buttonGroup.vue'
import checkbox from 'src/Checkbox.vue'

export default {
  components: {
    baseInput,
    docSection,
    docOptions,
    docCode,
    bsInput,
    buttonGroup,
    checkbox
  },
  data () {
    return {
      check: {
        hideHelp: true,
        label: true,
        error: true
      },
      event: null,
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
