<template>
  <doc-section id="accordion" name="Accordion">
    <div class="bs-example">
      <checkbox :checked.sync="checked" type="primary">Open only one at a time.</checkbox>
      <p><v-select :options="types" clear-button :value.sync="selected" placeholder="Global type"></v-select></p>
      <p><v-select :options="types" clear-button :value.sync="first" placeholder="First element type"></v-select></p>
      <accordion :one-at-atime="checked" :type="selected">
        <panel header="Panel #1" :is-open="true" :type="first=='panel'?null:first">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
        <panel header="Panel #2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
        <panel header="Panel #3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
        <panel header="Panel #4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
      </accordion>
    </div>
    <pre><code class="language-markup">
&lt;accordion :one-at-atime="checked" type="info">
  &lt;panel header="Panel #1" :is-open="true" type="primary">
    ...
  &lt;/panel>
  &lt;panel header="Panel #2">
    ...
  &lt;/panel>
  &lt;panel header="Panel #3">
    ...
  &lt;/panel>
  &lt;panel header="Panel #4">
    ...
  &lt;/panel>
&lt;/accordion>
    </code></pre>
    <doc-options>
      <div>
        <p>type</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p>Define the type of color for the tabs (global).</p>
      </div>
      <div>
        <p>one-at-time</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Control whether expanding an item will cause the other items to close.</p>
      </div>
    </doc-options>
    <doc-options name="Panel">
      <div>
        <p>header</p>
        <p><code>String</code></p>
        <p></p>
        <p>The clickable text on the group's header. You need one to be able to click on the header for toggling.</p>
      </div>
      <div>
        <p>is-open</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Whether accordion group is open or closed.</p>
      </div>
      <div>
        <p>type</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p>Define the type of color for the tab (single).</p>
      </div>
    </doc-options>
  </doc-section>
</template>

<script>
import docSection from './docSection.vue'
import docOptions from './docOptions.vue'
import accordion from 'src/Accordion.vue'
import checkbox from 'src/Checkbox.vue'
import panel from 'src/Panel.vue'
import vSelect from 'src/Select.vue'

export default {
  components: {
    docSection,
    docOptions,
    accordion,
    checkbox,
    panel,
    vSelect
  },
  data () {
    return {
      checked: true,
      selected: 'info',
      first: 'primary',
      types: ['default', 'primary', 'info', 'success', 'warning', 'danger']
    }
  }
}
</script>
