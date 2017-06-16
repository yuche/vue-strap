<template>
  <doc-section id="panel" name="Panel">
    <div class="bs-example">
      <p><v-select :options="types" clear-button v-model="type" placeholder="Type"></v-select></p>
      <panel :type="type">
        <h4 class="panel-title" slot="header">Panel #1</h4>
        <strong>Panel with heading slot.</strong> Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </panel>
      <panel :type="type" header="Panel #2">
        <strong>Panel with heading slot.</strong> Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </panel>
      <panel :type="type">
        <strong>Panel without heading.</strong> Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </panel>
    </div>
    <doc-code language="markup">
      &lt;panel type="primary">
        &lt;h4 class="panel-title" slot="header">Panel #1&lt;/h4>
        &lt;strong>Panel with header slot.&lt;strong> ...
      &lt;/panel>

      &lt;panel type="primary" header="Panel #2">
        &lt;strong>Panel with header property.&lt;strong> ...
      &lt;/panel>

      &lt;panel type="primary">
        &lt;strong>Panel without heading property.&lt;strong> ...
      &lt;/panel>

    </doc-code>
    <doc-table>
      <div>
        <p>header</p>
        <p><code>String</code></p>
        <p></p>
        <p>The text to be displayed in panel header.</p>
      </div>
      <div>
        <p>is-open</p>
        <p><code>Boolean</code></p>
        <p><code>true (if not in accordion group)</code></p>
        <p>Only applies if panel is in an accordion group.</p>
      </div>
      <div>
        <p>type</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p>Define the type of color for the header</p>
      </div>
    </doc-table>
    <p>
      If you want to personalise your header with some html you can use the slot instead of header
      attribute (panel&nbsp;#1 in the example). If no header property or slot is
      defined and the panel is not nested in an accordion, the header will be hidden.
    </p>
    <p>See <a href="#accordion">Accordion</a> for more options.</p>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import Panel from 'src/Panel.vue'
import vSelect from 'src/Select.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    Panel,
    vSelect
  },
  data () {
    return {
      type: 'default',
      types: ['default', 'primary', 'info', 'success', 'warning', 'danger']
    }
  }
}
</script>
