<template>
  <div class="bs-docs-section" id="datepicker">
    <h1 class="page-header"><a href="#datepicker" class="anchor">Datepicker</a></h1>
    <div class="bs-example">
      <p>
        <pre>
Selected date is: {{new Date(value).toString().slice(0, -23)}}
        </pre>
      </p>
      <datepicker v-ref="dp" value="{{@value}}" disabled-days-of-Week="{{disabled}}"
      format="{{format.toString()}}"></datepicker>
      <h4>Disabled days of week</h4>
      <select multiple value="{{@disabled}}">
        <option value="{{(0).toString()}}"></option>
        <option value="{{(1).toString()}}"></option>
        <option value="{{(2).toString()}}"></option>
        <option value="{{(3).toString()}}"></option>
        <option value="{{(4).toString()}}"></option>
        <option value="{{(5).toString()}}"></option>
        <option value="{{(6).toString()}}"></option>
      </select>
      <h4>Format</h4>
      <select  value="{{@format}}">
        <option value="yyyy,MM,dd"></option>
        <option value="yyyy-MM-dd"></option>
        <option value="yyyy.MM.dd"></option>
        <option value="MMM/dd/yyyy"></option>
        <option value="MMMM/dd/yyyy"></option>
      </select>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<datepicker
  value="{{@value}}"
  disabled-days-of-Week="{{disabled}}"
  format="{{format}}">
</datepicker>

<select multiple value="{{@disabled}}">
  <option value="0"></option>
  <option value="1"></option>
  <option value="2"></option>
  <option value="3"></option>
  <option value="4"></option>
  <option value="5"></option>
  <option value="6"></option>
</select>
<select  value="{{@format}}">
  <option value="yyyy,MM,dd"></option>
  <option value="yyyy-MM-dd"></option>
  <option value="yyyy.MM.dd"></option>
  <option value="MMM/dd/yyyy"></option>
  <option value="MMMM/dd/yyyy"></option>
</select>
    </script></code></pre>
    <h2>Option</h2>
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
          <td></td>
          <td>Value of the input DOM</td>
        </tr>
        <tr>
          <td>Width</td>
          <td><code>String</code></td>
          <td>200px</td>
          <td>Width of the input DOM</td>
        </tr>
        <tr>
          <td>format</td>
          <td><code>String</code></td>
          <td><code>MMMM/dd/yyyy</code></td>
          <td>The date format, combination of d, dd, M, MM ,MMM , MMMM, yyyy.</td>
        </tr>
        <tr>
          <td>disabledDaysOfWeek</td>
          <td><code>Array</code></td>
          <td></td>
          <td>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday).
             Multiple values should be comma-separated.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import datepicker from 'src/Datepicker.vue'
  import select from 'src/Select.vue'
  import option from 'src/Option.vue'
  export default {
    components: {
      datepicker,
      select,
      option
    },
    data() {
      return {
        disabled: [],
        value: 'Oct/06/2015',
        format: ['MMM/dd/yyyy']
      }
    },
    watch: {
      disabled() {
        this.$.dp.getDateRange()
      },
      format() {
        this.value = this.$.dp.stringify(new Date(this.value))
      }
    }
  }
</script>
