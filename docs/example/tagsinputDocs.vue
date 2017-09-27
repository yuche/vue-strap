<template>
  <doc-section id="tagsinput" name="Tagsinput">
    <div class="bs-example">
      <h4>Simple Tagsinput</h4>
      <tagsinput name="usstates" placeholder="Your tags here ..."></tagsinput>
      <hr>
     <h4>Typeahead with static arrays</h4>
      <tagsinput name="usstates" :data="USstate" placeholder="USA states"></tagsinput>
      <hr>
      <h4>
      Typeahead with asynchronous results
      <tooltip trigger="click" content="The suggestions via a Google Map API, are you behind a FireWall?" placement="top">
        <small style="cursor:pointer">(not working?)</small>
      </tooltip>
      </h4>
      <tagsinput
        name="addresses"
        placeholder="CCCAddress, async via maps.googleapis.com"
        :quote="true"
        async-key="results"
        async="https://maps.googleapis.com/maps/api/geocode/json?address="
        :template="asyncTemplate"
        :on-hit="googleCallback"
      ></tagsinput>
     </div>
    <doc-code language="markup">
      &lt;h4>Simple Tagsinput&lt;/h4>
      &lt;tagsinput
        placeholder="Your tags here ...">
      &lt;/tagsinput>

      &lt;h4>Typeahead with static arrays&lt;/h4>
      &lt;tagsinput
        :data="USstate"
        placeholder="USA states">
      &lt;/tagsinput>

      &lt;h4>Typeahead with asynchronous results&lt;/h4>
      &lt;tagsinput
          placeholder="Address, async via maps.googleapis.com"
          :quote="true"
          async-key="results"
          async="https://maps.googleapis.com/maps/api/geocode/json?address="
          :template="asyncTemplate"
          :on-hit="googleCallback">
      &lt;/tagsinput>
    </doc-code>
    <doc-code language="javascript">
      new Vue {
        components: {
          tagsinput
        },
        data() {
          return {
            // example #1
            USstate: ['Alabama', 'Alaska', 'Arizona',...],
            // example #2
            asyncTemplate: '{{'{{'}}item.formatted_address}}'
          }
        },
        methods: {
          // example #2
          googleCallback(items) {
            return items.formatted_address
          }
        }
      }
    </doc-code>
    <doc-table>
      <div>
        <p>id</p>
        <p><code>String</code></p>
        <p><code>''</code></p>
        <p></p>
      </div>
      <div>
        <p>name</p>
        <p><code>String</code></p>
        <p><code>''</code></p>
        <p>The name of the submitted value.</p>
      </div>
      <div>
        <p>value</p>
        <p><code>String</code></p>
        <p><code>''</code></p>
        <p></p>
      </div>
      <div>
        <p>separator</p>
        <p><code>String</code></p>
        <p><code>,</code></p>
        <p>The tag-separator character.</p>
      </div>
      <div>
        <p>quote</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Puts the value to submit in comma separated double quotes.</p>
      </div>
      <div>
        <p>delay</p>
        <p><code>Number</code></p>
        <p><code>300</code></p>
        <p>The throttling-value in milliseconds.</p>
      </div>
      <div>
        <p>data</p>
        <p><code>Array</code></p>
        <p></p>
        <p>The local data source for suggestions. Expected to be a primitive array.</p>
      </div>
      <div>
        <p>async</p>
        <p><code>String</code></p>
        <p></p>
        <p>An HTTP URL for asynchronous suggestions. Expected to return a JSON object.</p>
      </div>
      <div>
        <p>async-key</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p>The remote JSON key you want to render. if null, render directly using the remote JSON(should be Array).</p>
      </div>
      <div>
        <p>limit</p>
        <p><code>Number</code></p>
        <p><code>8</code></p>
        <p>The max number of suggestions to be displayed.</p>
      </div>
      <div>
        <p>match-case</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Case sensitive for suggestions.</p>
      </div>
      <div>
        <p>match-start</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Match only against start of suggestions. E.g. if true, "a" matches "ab" but not "ba".</p>
      </div>
      <div>
        <p>on-hit</p>
        <p><code>Function</code></p>
        <p><code>function(item){ return item }</code></p>
        <p>A callback function when you hit on an item. Must return the value to asign to the input after selecting.</p>
      </div>
      <div>
        <p>template</p>
        <p><code>String</code></p>
        <p><code>&lt;span v-html="item">&lt;/span></code></p>
        <p>Used to render every suggestion. Handler:<code>item</code>. The item can be whatever (e.g. <code>string</code>/<code>array</code>/<code>object</code>)</p>
      </div>
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import tagsinput from 'src/Tagsinput.vue'
import tooltip from 'src/Tooltip.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    tagsinput,
    tooltip
  },
  data () {
    return {
      USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      asyncTemplate: '{{ item.formatted_address }}'
    }
  },
  methods: {
    googleCallback (item) {
      return item.formatted_address
    }
  }
}
</script>
