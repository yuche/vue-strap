<template>
  <doc-section id="datepicker" name="Datepicker">
    <div class="bs-example">
      <p>
        <pre>Selected date is: {{new Date($refs.dp.parse()).toString()}}</pre>
      </p>
      <datepicker ref="dp" v-model="value" :disabled-days-of-Week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder" width="370px"></datepicker>
      <h4>Disabled days of week</h4>

      <v-select multiple v-model="disabled" :options="[0,1,2,3,4,5,6]"></v-select>

      <h4>Format</h4>
      <v-select v-model="format" :options="formats"></v-select>

      <h4>Reset button</h4>
      <checkbox :checked="clear" @checked="clear = arguments[0]" type="primary">toggle clear button</checkbox>
    </div>
    <doc-code language="markup">
      <datepicker v-model="value" :disabled-days-of-Week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder"></datepicker>
    </doc-code>
    <doc-table>
      <div>
        <p>clear-button</p>
        <p><code>Boolean</code></p>
        <p>false</p>
        <p>If <strong>true</strong> shows an &times; shaped button to clear the selected date.
          Usefull in forms where date entry is optional.</p>
      </div>
      <div>
        <p>disabled-days-of-week</p>
        <p><code>Array</code></p>
        <p></p>
        <p>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).
           Multiple values should be comma-separated.</p>
      </div>
      <div>
        <p>format</p>
        <p><code>String</code></p>
        <p><code>MMMM/dd/yyyy</code></p>
        <p>The date format, combination of d, dd, M, MM, MMM, MMMM, yyyy.</p>
      </div>
      <div>
        <p>placeholder</p>
        <p><code>String</code></p>
        <p></p>
        <p>Placeholder to put on the input field when no date (null or empty) is set</p>
      </div>
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
    </doc-table>
  </div>
  <div></div>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.vue'
import docCode from './utils/docCode.vue'
import checkbox from 'src/Checkbox.vue'
import datepicker from 'src/Datepicker.vue'
import vSelect from 'src/components/Select.vue'
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
      clear: true,
      disabled: [],
      format: 'yyyy-MM-dd',
      formats: ['dd/MM/yyyy', 'dd-MM-yyyy', 'yyyy,MM,dd', 'yyyy-MM-dd', 'yyyy.MM.dd', 'MMM/dd/yyyy', 'MMMM/dd/yyyy', 'MM/dd/yyyy', 'MM-dd-yyyy'],
      placeholder: 'placeholder is displayed when value is null or empty',
      value: '2015-06-10'
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
