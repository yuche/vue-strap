<template>
  <doc-section id="form-validator" name="Form Validator">
    <p>This is not a style component, but a global validation manager.</p>
    <p>If you need to evaluate if a group of components are valids, you can handle easier with this component.</p>
    <p>Actually only supported input & select components.</p>
    <p>In this example, the buttons and tabs are disabled while the inner elements are empty.</p>
    <div class="bs-example">
      <h4>Basic Usage:</h4>
      <doc-code>
        &lt;!-- Using v-model -->
        &lt;!-- The starting variable value will be ignored. -->
        &lt;form-validator v-model="valid">
          ...
        &lt;/form-validator>
        &lt;!-- Using event isvalid -->
          &lt;form-validator @isvalid="valid = arguments[0]">...&lt;/form-validator>
          &lt;!-- or -->
          &lt;form-validator @isvalid="validMethod">
            &lt;!-- the method receive true or false in the first argument -->
          &lt;/form-validator>
        &lt;!-- Using events valid and/or invalid -->
        &lt;form-validator @valid="valid.all = true" @invalid="valid.all = false">
            ...
        &lt;/form-validator>
      </doc-code>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <p><pre>Valid user data : {{valid.user}}</pre></p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <p><pre>Valid direction : {{valid.direction}}</pre></p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <p><pre>All valid : {{valid.all}}</pre></p>
        </div>
      </div>
      <div class="row">
        <form-validator v-model="valid.all">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <tabs v-model="active">
              <tab header="User">
                <form-validator v-model="valid.user">
                  <bs-input label="User Name" required></bs-input>
                  <bs-input label="Email" type="email" required></bs-input>
                </form-validator>
                <button type="button" class="btn btn-primary" :disabled="!valid.user" @click="active = 1">Continue</button>
              </tab>
              <tab header="Direction" :disabled="!valid.user">
                <form-validator v-model="valid.direction">
                  <div class="form-validator">
                    <label class="control-label">Continent</label>
                    <v-select required justified :options="['America','Europe']" clear-button></v-select>
                  </div>
                  <bs-input label="City" type="text" required></bs-input>
                </form-validator>
                <button type="button" class="btn btn-primary" :disabled="!valid.all">Done!!</button>
              </tab>
            </tabs>
          </div>
        </form-validator>
      </div>
    </div>
    <doc-code language="markup">
        &lt;form-validator v-model="valid.all">
          &lt;div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            &lt;tabs v-model="active">
              &lt;tab header="User">
                &lt;form-validator @valid="valid.user = true" @invalid="valid.user = false">
                  &lt;bs-input label="User Name" required>&lt;/bs-input>
                  &lt;bs-input label="Email" type="email" required>&lt;/bs-input>
                &lt;/form-validator>
                &lt;button type="button" class="btn btn-primary" :disabled="!valid.user" @click="active = 1">Continue&lt;/button>
              &lt;/tab>
              &lt;tab header="Direction" :disabled="!valid.user">
                &lt;form-validator @isvalid="valid.direction = arguments[0]">
                  &lt;div class="form-validator">
                    &lt;label class="control-label">Continent&lt;/label>
                    &lt;v-select required justified :options="['America','Europe']" clear-button>&lt;/v-select>
                  &lt;/div>
                  &lt;bs-input label="City" type="text" required>&lt;/bs-input>
                &lt;/form-validator>
                &lt;button type="button" class="btn btn-primary" :disabled="!valid.all">Done!!&lt;/button>
              &lt;/tab>
            &lt;/tabs>
          &lt;/div>
        &lt;/form-validator>
    </doc-code>
    <doc-table>
      <div>
        <p>valid</p>
        <p><code>Boolean</code></p>
        <p></p>
        <p>Return if all the internal form elements (<code>select</code>, <code>input</code>) are valids.</p>
      </div>
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import formValidator from 'src/FormValidator.vue'
import bsInput from 'src/Input.vue'
import tab from 'src/Tab.vue'
import tabs from 'src/Tabs.vue'
import vSelect from 'src/Select.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    formValidator,
    bsInput,
    tab,
    tabs,
    vSelect
  },
  data () {
    var valid = {}; ['all', 'direction', 'user'].forEach(el => { valid[el] = null })
    return {
      active: 0,
      valid
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
