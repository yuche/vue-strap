<template>
  <doc-section id="dropdown" name="Dropdown">
    <div class="bs-example">
      <dropdown>
        <strong slot="button">Action (bold)</strong>
        <ul slot="dropdown-menu" class="dropdown-menu">
          <li><a href="#dropdown">Action</a></li>
          <li><a href="#dropdown">Another action</a></li>
          <li><a href="#dropdown">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#dropdown">Separated link</a></li>
        </ul>
      </dropdown>
      <dropdown text="Action" type="primary">
        <li><a href="#dropdown">Action</a></li>
        <li><a href="#dropdown">Another action</a></li>
        <li><a href="#dropdown">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#dropdown">Separated link</a></li>
      </dropdown>
      <dropdown>
        <i slot="button">Action (italic)</i>
        <ul slot="dropdown-menu" class="dropdown-menu">
          <li><a href="#dropdown">Action</a></li>
          <li><a href="#dropdown">Another action</a></li>
          <li><a href="#dropdown">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#dropdown">Separated link</a></li>
        </ul>
      </dropdown>
      <dropdown text="Disabled" type="warning" disabled>
        <li><a href="#dropdown">Action</a></li>
      </dropdown>
      <dropdown type="info">
        <button slot="before" type="button" class="btn btn-info">Segmented</button>
        <li><a href="#dropdown">Action</a></li>
      </dropdown>
      <div class="btn-group btn-group-justified">
        <a href="#dropdown" class="btn btn-default" role="button">Left</a>
        <dropdown>
          <u slot="button">Dropdown (underlined)</u>
          <ul slot="dropdown-menu" class="dropdown-menu">
            <li><a href="#dropdown">Action</a></li>
            <li><a href="#dropdown">Another action</a></li>
            <li><a href="#dropdown">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#dropdown">Separated link</a></li>
          </ul>
        </dropdown>
        <a href="#dropdown" class="btn btn-default" role="button">Right</a>
      </div>
    </div>
    <doc-code>
      &lt;dropdown text="Action" type="primary">
        &lt;li>&lt;a href="#dropdown">Action&lt;/a>&lt;/li>
        &lt;li role="separator" class="divider">&lt;/li>
        &lt;li>&lt;a href="#dropdown">Separated link&lt;/a>&lt;/li>
      &lt;/dropdown>
      // For segmented dropdown, ignore text and add a "before" slot
      &lt;dropdown type="info">
        &lt;button slot="before" type="button" class="btn btn-info">Segmented&lt;/button>
        &lt;li>&lt;a href="#dropdown">...&lt;/a>&lt;/li>
      &lt;/dropdown>
      // In a button group
      &lt;div class="btn-group btn-group-justified">
        &lt;a href="#dropdown" class="btn btn-default" role="button">Left&lt;/a>
        &lt;dropdown>...&lt;/dropdown>
        &lt;a href="#dropdown" class="btn btn-default" role="button">Right&lt;/a>
      &lt;/div>
      // Use slots for some elements as native bootstrap
      &lt;dropdown>
        // main button limited only to html styling
        &lt;u slot="button">Action (underlined)&lt;/u>
        &lt;ul slot="dropdown-menu" class="dropdown-menu">
          &lt;li>&lt;a href="#dropdown">Action&lt;/a>&lt;/li>
          &lt;li>&lt;a href="#dropdown">Another action&lt;/a>&lt;/li>
          &lt;li>&lt;a href="#dropdown">Something else here&lt;/a>&lt;/li>
          &lt;li role="separator" class="divider">&lt;/li>
          &lt;li>&lt;a href="#dropdown">Separated link&lt;/a>&lt;/li>
        &lt;/ul>
      &lt;/dropdown>
    </doc-code>
    <doc-table>
      <div>
        <p>value (v-model)</p>
        <p><code>Boolean</code></p>
        <p>false</p>
        <p>Whether show the component.</p>
      </div>
      <div>
        <p>disabled</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p></p>
      </div>
      <div>
        <p>text</p>
        <p><code>String</code></p>
        <p></p>
        <p>Dropdown button text.</p>
      </div>
      <div>
        <p>type</p>
        <p>
          <code>String</code>, one of
          <code>default</code>
          <code>primary</code>
          <code>danger</code>
          <code>info</code>
          <code>warning</code>
          <code>success</code>
        </p>
        <p><code>default</code></p>
        <p></p>
      </div>
    </doc-table>
    <doc-table type="Events">
      <div>
        <p>input</p>
        <p>(<code>show:boolean</code>)</p>
        <p>Return if the dropdown is shown.</p>
      </div>
    </doc-table>
    <h2>Usage</h2>
    <p>Just like the examples. With slots you can use it as the <a target="_blank" href="http://getbootstrap.com/javascript/#dropdowns">original Bootstrap way</a>.</p>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import dropdown from 'src/Dropdown.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    dropdown
  }
}
</script>
