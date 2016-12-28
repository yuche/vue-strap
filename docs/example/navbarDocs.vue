<template>
  <doc-section id="navbar" name="Navbar">
    <div class="bs-example">
      <navbar :placement="placement" :type="type">
        <a href="/" title="Home" slot="brand" class="navbar-brand">VueStrap</a>
        <dropdown text="Component List" type="primary">
          <li v-for="s in sections"><a :href="'#'+s.id" v-text="s.name"></a></li>
        </dropdown>
        <li>
          <a href="https://github.com/wffranco/vue-strap" target="_blank">
            Fork this project on Github
            <svg height="16px" fill="#777" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
        </li>
      </navbar>
      <div class="form-group">
        <label>Placement</label>
        <v-select v-model="placement" clear-button :options="['top','bottom','static']"></v-select>
      </div>
      <div class="form-group">
        <label>Type</label>
        <v-select v-model="type" :options="['default','inverse']"></v-select>
      </div>
    </div>
    <doc-code language="markup">
      &lt;navbar placement="top" type="default">
        &lt;!-- Brand as slot -->
        &lt;a slot="brand" href="/" title="Home" class="navbar-brand">VueStrap&lt;/a>
        &lt;!-- You can use dropdown component -->
        &lt;dropdown text="Dropdown">
          &lt;li>&lt;a href="link">Option&lt;/a>&lt;/li>
        &lt;/dropdown>
        &lt;!-- Or normal bootstrap style -->
        &lt;li class="dropdown">
          &lt;a href="#" class="dropdown-toggle">Dropdown&lt;/a>
          &lt;ul class="dropdown-menu">
            &lt;li>&lt;a href="link">Option&lt;/a>&lt;/li>
          &lt;/ul>
        &lt;/li>
        &lt;!-- For positioning use slot="left" or slot="right" -->
        &lt;li slot="right">
          &lt;a href="https://github.com/wffranco/vue-strap" target="_blank">Fork...&lt;/a>
        &lt;/li>
      &lt;/navbar>
    </doc-code>
    <doc-table>
      <div>
        <p>placement</p>
        <p><code>String</code>, one of <code>top</code>, <code>bottom</code>, <code>static</code>, or empty for normal.</p>
        <p><code>''</code></p>
        <p></p>
      </div>
      <div>
        <p>type</p>
        <p><code>String</code>, one of <code>inverse</code>, <code>default</code>.</p>
        <p><code>default</code></p>
        <p></p>
      </div>
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import Dropdown from 'src/Dropdown.vue'
import Navbar from 'src/Navbar.vue'
import Tooltip from 'src/Tooltip.vue'
import vSelect from 'src/Select.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    Dropdown,
    Navbar,
    Tooltip,
    vSelect
  },
  data () {
    return {
      placement : 'top',
      type : 'default'
    }
  },
  computed: {
    sections () { return this.$root.sections }
  }
}
</script>
