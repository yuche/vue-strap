<template>
  <doc-section id="datepicker" name="Datepicker">
    <div class="bs-example">
      <p>
        <pre>Selected date is: {{new Date($refs.dp.parse()).toString()}}</pre>
      </p>
      <datepicker v-ref:dp :value.sync="value" :disabled-days-of-Week="disabled" :format="format.toString()" :clear-button="clear" :placeholder="placeholder" width="370px"></datepicker>
      <h4>Disabled days of week</h4>

      <v-select multiple :value.sync="disabled" :options="[0,1,2,3,4,5,6]"></v-select>

      <h4>Format</h4>
      <v-select :value.sync="format" :options="formats"></v-select>

      <h4>Reset button</h4>
      <checkbox :checked.sync="clear" type="primary">toggle clear button</checkbox>

      <h4>Placeholder</h4>
      <input :value="placeholder" type="text" style="width: 370px"></input>
    </div>
    <doc-code language="markup">
      <datepicker
        :value.sync="value"
        :disabled-days-of-Week="disabled"
        :format="format"
        :clear-button="clear"
        :placeholder="placeholder">
      </datepicker>
    </doc-code>
    <doc-table>
      <div>
        <p>value</p>
        <p><code>String</code></p>
        <p></p>
        <p>Value of the input DOM</p>
      </div>
      <div>
        <p>width</p>
        <p><code>String</code></p>
        <p>200px</p>
        <p>Width of the input DOM</p>
      </div>
      <div>
        <p>format</p>
        <p><code>String</code></p>
        <p><code>MMMM/dd/yyyy</code></p>
        <p>The date format, combination of d, dd, M, MM, MMM, MMMM, yyyy.</p>
      </div>
      <div>
        <p>disabled-days-of-week</p>
        <p><code>Array</code></p>
        <p></p>
        <p>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).
           Multiple values should be comma-separated.</p>
      </div>
      <div>
        <p>clear-button</p>
        <p><code>Boolean</code></p>
        <p>false</p>
        <p>If <strong>true</strong> shows an &times; shaped button to clear the selected date.
          Usefull in forms where date entry is optional.</p>
      </div>
      <div>
        <p>placeholder</p>
        <p><code>String</code></p>
        <p></p>
        <p>Placeholder to put on the input field when no date (null or empty) is set</p>
      </div>
    </doc-table>
  </div>
  <div></div>
</template>

<script>
import docSection from './docSection.vue'
import docTable from './docTable.vue'
import docCode from './docCode.vue'
import checkbox from 'src/Checkbox.vue'
import datepicker from 'src/Datepicker.vue'
import vSelect from 'src/Select.vue'
import vOption from 'src/Option.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    checkbox,
    datepicker,
    vSelect,
    vOption
  },
  data () {
    return {
      disabled: [],
      value: '2015-06-10',
      formats: [
        {value: 'dd/MM/yyyy', label: 'dd/MM/yyyy'},
        {value: 'dd-MM-yyyy', label: 'dd-MM-yyyy'},
        {value: 'yyyy,MM,dd', label: 'yyyy,MM,dd'},
        {value: 'yyyy-MM-dd', label: 'yyyy-MM-dd'},
        {value: 'yyyy.MM.dd', label: 'yyyy.MM.dd'},
        {value: 'MMM/dd/yyyy', label: 'MMM/dd/yyyy'},
        {value: 'MMMM/dd/yyyy', label: 'MMMM/dd/yyyy'},
        {value: 'MM/dd/yyyy', label: 'MM/dd/yyyy'},
        {value: 'MM-dd-yyyy', label: 'MM-dd-yyyy'}
      ],
      format: ['yyyy-MM-dd'],
      clear: true,
      placeholder: 'placeholder is displayed when value is null or empty'
    }
  },
  watch: {
    disabled () {
      this.$refs.dp.getDateRange()
    },
    format (newV) {
      this.value = this.$refs.dp.stringify()
    }
  }
}
</script>
