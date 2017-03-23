<template>
  <doc-section id="typeahead" name="Typeahead">
    <div class="bs-example">
      Typeahead failing.
      <h4>Static arrays</h4>
      <typeahead :data="USstate" placeholder="USA states"></typeahead>
      <hr>
      <h4>
      Asynchronous results
      <tooltip trigger="click" content="The suggestions via a Google Map API, are you behind a FireWall?" placement="top">
        <small style="cursor:pointer">(not working?)</small>
      </tooltip>
      </h4>
      <typeahead
        placeholder="CCCAddress, async via maps.googleapis.com"
        async-key="results"
        async="https://maps.googleapis.com/maps/api/geocode/json?address="
        :template="asyncTemplate"
        :on-hit="googleCallback"
      ></typeahead>
      <hr>
      <h4>
      Custom templates for results
      </h4>
      <typeahead
        placeholder="Github users, async via api.github.com"
        async-key="items"
        async="https://api.github.com/search/users?q="
        :template="githubTemplate"
        :on-hit="githubCallback"
      ></typeahead>
    </div>
    <doc-code language="markup">
      &lt;h4>Static arrays&lt;/h4>
      &lt;typeahead
        :data="USstate"
        placeholder="USA states">
      &lt;/typeahead>

      &lt;h4>Asynchronous results&lt;/h4>
        &lt;typeahead
          placeholder="Address, async via maps.googleapis.com"
          async-key="results"
          src="https://maps.googleapis.com/maps/api/geocode/json?address="
          :template="asyncTemplate"
          :on-hit="googleCallback">
      &lt;/typeahead>

      &lt;h4>Custom templates for results&lt;/h4>
        &lt;typeahead
          placeholder="Github users, async via api.github.com"
          async-key="items"
          src="https://api.github.com/search/users?q="
          :template="githubTemplate"
          :on-hit="githubCallback">
      &lt;/typeahead>
    </doc-code>
    <doc-code language="javascript">
      new Vue {
        components: {
          typeahead
        },
        data() {
          return {
            USstate: ['Alabama', 'Alaska', 'Arizona',...],
            asynchronous: '{{'{{'}}item.formatted_address}}',
            customTemplate: '&lt;img width="18px" height="18px" :src="item.avatar_url"/>&lt;span>{{'{{'}}item.login}}&lt;/span>'
          }
        },
        methods: {
          googleCallback(items) {
            return items.formatted_address
          },
          githubCallback(items) {
            window.open(items.html_url, '_blank')
            return item.login
          }
        }
      }
    </doc-code>
    <doc-table>
      <div>
        <p>value</p>
        <p><code>String</code></p>
        <p><code>''</code></p>
        <p></p>
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
        <p>type</p>
        <p><code>String</code></p>
        <p><code>text</code></p>
        <p>Input type. Not dinamic (is set once, can't be changed later).</p>
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
import typeahead from 'src/Typeahead.vue'
import tooltip from 'src/Tooltip.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    typeahead,
    tooltip
  },
  data () {
    return {
      USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      asyncTemplate: '{{ item.formatted_address }}',
      githubTemplate: '<img width="18px" height="18px" :src="item.avatar_url"/> <span>{{item.login}}</span>'
    }
  },
  methods: {
    googleCallback (item) {
      return item.formatted_address
    },
    githubCallback (item) {
      window.open(item.html_url, '_blank')
      return item.login
    }
  }
}
</script>
