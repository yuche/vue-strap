<template>
  <doc-section id="toggle-button" name="ToggleButton">
    <div class="bs-example form-group">
      <h4>ToggleButton</h4>
      <p>A 2 states button (single true/false) but with a better looking.</p>
      <div class="form-group">
        <toggle-button v-model="one">One</toggle-button>
        <toggle-button v-model="two">Two</toggle-button>
        <toggle-button v-model="two" true-type="info" disabled>Two (disabled)</toggle-button>
        <toggle-button v-model="two" false-type="warning" readonly>Two (readonly)</toggle-button>
        <toggle-button v-model="three" true-type="success" false-type="danger">Three</toggle-button>
      </div>
      <div class="form-group">
        <bs-input v-model="content" :disabled="!input" placeholder="Will be cleaned when is disabled.">
          <span slot="before" class="input-group-btn">
            <toggle-button v-model="input" @disabled="content=''">Toggle Input:</toggle-button>
          </span>
        </bs-input>
      </div>
      <p>
        <pre>Toggle values: {{ $data }}</pre>
      </p>
    </div>
    <doc-code language="markup">
      &lt;toggle-button v-model="one">One&lt;/toggle-button>
      &lt;toggle-button v-model="two">Two&lt;/toggle-button>
      &lt;toggle-button v-model="two" true-type="info" disabled>Two (disabled)&lt;/toggle-button>
      &lt;toggle-button v-model="two" false-type="warning" readonly>Two (readonly)&lt;/toggle-button>
      &lt;toggle-button v-model="three" true-type="success" false-type="danger">Three&lt;/toggle-button>
      &lt;bs-input v-model="content" :disabled="!input" placeholder="Will be cleaned when is disabled.">
        &lt;span slot="before" class="input-group-btn">
          &lt;toggle-button v-model="input" @disabled="content=''">Toggle Input:&lt;/toggle-button>
        &lt;/span>
      &lt;/bs-input>
    </doc-code>
    <doc-table>
      <div>
        <p>value</p>
        <p><code>Mixed</code></p>
        <p></p>
        <p>Handle the selected value.</p>
      </div>
      <div>
        <p>true-type</p>
        <p><code>String</code>, one of <code>default</code>
        <code>primary</code>
        <code>danger</code>
        <code>info</code>
        <code>warning</code>
        <code>success</code></p>
        <p><code>primary</code></p>
        <p></p>
      </div>
      <div>
        <p>false-type</p>
        <p><code>String</code>, one of <code>default</code>
        <code>primary</code>
        <code>danger</code>
        <code>info</code>
        <code>warning</code>
        <code>success</code></p>
        <p><code>default</code></p>
        <p></p>
      </div>
    </doc-table>
    <doc-table type="Events">
      <div>
        <p>changed</p>
        <p>(<code>value:boolean</code>)</p>
        <p>If changed, return the actual state.</p>
      </div>
      <div>
        <p>disabled</p>
        <p></p>
        <p>Call this event if the button was disabled.</p>
      </div>
      <div>
        <p>enabled</p>
        <p></p>
        <p>Call this event if the button was enabled.</p>
      </div>
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import bsInput from 'src/Input.vue'
import ToggleButton from 'src/ToggleButton.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    bsInput,
    ToggleButton
  },
  data () {
    return {
      one: false,
      two: true,
      three: false,
      input: false,
      content: ''
    }
  }
}
</script>
