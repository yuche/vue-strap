<template>
  <div class="bs-docs-section" id="typeahead">
    <h1 class="page-header"><a href="#typeahead" class="anchor">Typeahead</a></h1>
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
    <pre><code class="language-markup"><script type="language-mark-up">
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
  </script></code></pre>
    <pre><code class="language-javascript"><script type="language-javascript">
new Vue {
  components: {
    typeahead
  },
  data() {
    return {
      USstate: ['Alabama', 'Alaska', 'Arizona',...],
      asynchronous: '{{formatted_address}}',
      customTemplate: '<img width="18px" height="18px" v-attr="src:avatar_url"/>' +
      '<span>{{login}}</span>'
    }
  },
  methods: {
    googleCallback(items, targetVM) {
      const that = targetVM;
      that.reset()
      that.query = items.formatted_address
    },
    githubCallback(items) {
      window.open(items.html_url, '_blank')
    }
  }
}
    </script></code></pre>

    <h2>Options</h2>
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
          <td>data</td>
          <td><code>Array</code></td>
          <td></td>
          <td>The local data source for suggestions. Expected to be a primitive array.</td>
        </tr>
        <tr>
          <td>async</td>
          <td><code>String</code></td>
          <td></td>
          <td>An HTTP URL for asynchronous suggestions. Expected to return a JSON object.</td>
        </tr>
        <tr>
          <td>limit</td>
          <td><code>Number</code></td>
          <td><code>8</code></td>
          <td>The max number of suggestions to be displayed.</td>
        </tr>
        <tr>
          <td>key</td>
          <td><code>String</code></td>
          <td></td>
          <td>The remote JSON key you want to render.</td>
        </tr>
        <tr>
          <td>match-case</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>Case sensitive for suggestions.</td>
        </tr>
        <tr>
          <td>match-start</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>Match only against start of suggestions. E.g. if true, "a" matches "ab" but not "ba".</td>
        </tr>
        <tr>
          <td>on-hit</td>
          <td><code>Function</code></td>
          <td></td>
          <td>A callback function when you click or hit return on an item.</td>
        </tr>
        <tr>
          <td>template</td>
          <td><code>String</code></td>
          <td><code>&lt;span v-html=&quot;$value | highlight query&quot;&gt;&lt;/span&gt;</code></td>
          <td>Used to render suggestion.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import typeahead from 'src/Typeahead.vue'
  import tooltip from 'src/Tooltip.vue'
  export default {
    components: {
      typeahead,
      tooltip
    },
    partials: {
    },
    data() {
      return {
        USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
        'asyncTemplate': '{{ item.formatted_address }}',
        'githubTemplate': '<img width="18px" height="18px" :src="item.avatar_url"/> <span>{{item.login}}</span>'
      }
    },
    methods: {
      googleCallback(items, targetVM) {
        const that = targetVM;
        that.reset()
        that.query = items.formatted_address
      },
      githubCallback(items) {
        window.open(items.html_url, '_blank')
      }
    }
  }
</script>
