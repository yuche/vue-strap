<template>
  <doc-section id="typeahead" name="Typeahead">
    <div class="bs-example">
      <h4>
        Static arrays
      </h4>
      <typeahead
        :data="USstate"
        placeholder="USA states"
      ></typeahead>
      <hr>
      <h4>
      Asynchronous results
      <tooltip trigger="click" content="The suggestions via a Google Map API, are you behind a FireWall?" placement="top">
        <small style="cursor:pointer">(not working?)</small>
      </tooltip>
      </h4>
      <typeahead
        placeholder="CCCAddress, async via maps.googleapis.com"
        key="results"
        async="https://maps.googleapis.com/maps/api/geocode/json?address="
        template-name="async"
        :template="asyncTemplate"
        :on-hit="googleCallback"
      ></typeahead>
      <hr>
      <h4>
      Custom templates for results
      </h4>
      <typeahead
        placeholder="Github users, async via api.github.com"
        key="items"
        async="https://api.github.com/search/users?q="
        template-name="github"
        :template="githubTemplate"
        :on-hit="githubCallback"
      ></typeahead>
    </div>
    <doc-code language="markup">
      <h4>Static arrays</h4>
      <typeahead
        :data="USstate"
        placeholder="USA states">
      </typeahead>

      <h4>Asynchronous results</h4>
        <typeahead
          placeholder="Address, async via maps.googleapis.com"
          key="results"
          src="https://maps.googleapis.com/maps/api/geocode/json?address="
          template-name="async"
          :template="asyncTemplate"
          :on-hit="googleCallback">
      </typeahead>

      <h4>Custom templates for results</h4>
        <typeahead
          placeholder="Github users, async via api.github.com"
          key="items"
          src="https://api.github.com/search/users?q="
          template-name="typeahead-github-template"
          :template="githubTemplate"
          :on-hit="githubCallback">
      </typeahead>
    </doc-code>
    <doc-code language="javascript">
      new Vue {
        components: {
          typeahead
        },
        data() {
          return {
            USstate: ['Alabama', 'Alaska', 'Arizona',...],
            asyncTemplate: '{{ item.formatted_address }}',
            githubTemplate: '<img width="18px" height="18px" :src="item.avatar_url"/> <span>{{item.login}}</span>'
          }
        },
        methods: {
          googleCallback(items, targetVM) {
            const that = targetVM;
            that.reset()
            that.value = items.formatted_address
          },
          githubCallback(items) {
            window.open(items.html_url, '_blank')
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
        <p>limit</p>
        <p><code>Number</code></p>
        <p><code>8</code></p>
        <p>The max number of suggestions to be displayed.</p>
      </div>
      <div>
        <p>key</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p>The remote JSON key you want to render. if null, render directly using the remote JSON(should be Array).</p>
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
        <p></p>
        <p>A callback function when you click or hit return on an item.</p>
      </div>
      <div>
        <p>template</p>
        <p><code>String</code></p>
        <p><code>&lt;span v-html=&quot;$value | highlight query&quot;&gt;&lt;/span&gt;</code></p>
        <p>Used to render suggestion.</p>
      </div>
    </doc-table>
  </div>
</template>

<script>
import docSection from './docSection.vue'
import docTable from './docTable.vue'
import docCode from './docCode.vue'
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
  partials: {},
  data () {
    return {
      USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      'asyncTemplate': '{{ item.formatted_address }}',
      'githubTemplate': '<img width="18px" height="18px" :src="item.avatar_url"/> <span>{{item.login}}</span>'
    }
  },
  methods: {
    googleCallback (items, targetVM) {
      targetVM.reset()
      targetVM.value = items.formatted_address
    },
    githubCallback (items) {
      window.open(items.html_url, '_blank')
    }
  }
}
</script>
