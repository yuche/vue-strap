<template>
  <doc-section id="datepicker" name="Datepicker">
    <div class="bs-example">
      <p>
        <pre>Selected date is: {{dateString}}</pre>
      </p>
      <datepicker ref="dp" v-model="date" :disabled-days-of-week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder" width="370px"></datepicker>
      <h4>Disabled days of week</h4>

      <v-select multiple v-model="disabled" :options="[0,1,2,3,4,5,6]"></v-select>

      <h4>Format</h4>
      <v-select v-model="format" :options="formats"></v-select>

      <h4>Reset button</h4>
      <checkbox :value="clear" @checked="clear = arguments[0]" type="primary">toggle clear button</checkbox>
    </div>
    <doc-code language="markup">
      &lt;datepicker v-model="value" :disabled-days-of-Week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder">&lt;/datepicker>
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
        <p></p>
        <p>Width of the input DOM</p>
      </div>
      <div>
        <p>icons-font</p>
        <p><code>String</code></p>
        <p><code>glyphicon</code></p>
        <p>The icon font used for arrows. Can be 'glyphicon' or 'fa' (Font Awesome)</p>
      </div>
    </doc-table>
    <doc-table type="Events">
      <div>
        <p>input</p>
        <p>(<code>value:string</code>)</p>
        <p>Return the selected value.</p>
      </div>
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import Checkbox from 'src/Checkbox.vue'
import Datepicker from 'src/Datepicker.vue'
import vSelect from 'src/Select.vue'
import vOption from 'src/Option.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    Checkbox,
    Datepicker,
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
      date: '2015-06-10'
    }
  },
  computed: {
    dateString () {
      let date
      if (this.date.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy')) {
        date = new Date(this.date.substring(6, 10), this.date.substring(3, 5), this.date.substring(0, 2))
      } else {
        date = new Date(this.date)
      }
      return isNaN(date.getFullYear()) ? new Date().toString() : date.toString()
    }
  },
}
</script>
