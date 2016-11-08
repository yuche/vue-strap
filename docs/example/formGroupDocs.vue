<template>
  <doc-section id="form-group" name="Form Group">
    <p>This is not a style component, is just a global validation manager.</p>
    <p>If you need to evaluate if a group of elements are all valids, you can handle easier with this component.</p>
    <p>In this example, the buttons and tabs are disabled while the inner elements are empty.</p>
    <div class="bs-example">
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
        <form-group :valid.sync="valid.all">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <tabs :active.sync="active">
              <tab header="User">
                <form-group :valid.sync="valid.user">
                  <bs-input label="User Name" required></bs-input>
                  <bs-input label="Email" type="email" required></bs-input>
                </form-group>
                <button type="button" class="btn btn-primary" :disabled="!valid.user" @click="active = 1">Continue</button>
              </tab>
              <tab header="Direction" :disabled="!valid.user">
                <form-group :valid.sync="valid.direction">
                  <div class="form-group">
                    <label class="control-label">Continent</label>
                    <v-select required justified :options="['America','Europe']" clear-button></v-select>
                  </div>
                  <bs-input label="City" type="text" required></bs-input>
                </form-group>
                <button type="button" class="btn btn-primary" :disabled="!valid.all">Done!!</button>
              </tab>
            </tabs>
          </div>
        </form-group>
      </div>
    </div>
    <doc-code language="markup">
        <form-group :valid.sync="valid.all">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <tabs :active.sync="active">
              <tab header="User">
                <form-group :valid.sync="valid.user">
                  <bs-input label="User Name" required></bs-input>
                  <bs-input label="Email" type="email" required></bs-input>
                </form-group>
                <button type="button" class="btn btn-primary" :disabled="!valid.user" @click="active = 1">Continue</button>
              </tab>
              <tab header="Direction" :disabled="!valid.user">
                <form-group :valid.sync="valid.direction">
                  <div class="form-group">
                    <label class="control-label">Continent</label>
                    <v-select required justified :options="['America','Europe']" clear-button></v-select>
                  </div>
                  <bs-input label="City" type="text" required></bs-input>
                </form-group>
                <button type="button" class="btn btn-primary" :disabled="!valid.all">Done!!</button>
              </tab>
            </tabs>
          </div>
        </form-group>
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
import docSection from './docSection.vue'
import docTable from './docTable.vue'
import docCode from './docCode.vue'
import formGroup from 'src/formGroup.vue'
import bsInput from 'src/Input.vue'
import tab from 'src/Tab.vue'
import tabs from 'src/Tabset.vue'
import vSelect from 'src/Select.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    formGroup,
    bsInput,
    tab,
    tabs,
    vSelect
  },
  data () {
    return {
      active: 0,
      valid: {}
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
