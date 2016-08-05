<template>
  <div class="bs-docs-section" id="accordion">
    <h1 class="page-header"><a href="#accordion" class="anchor">Accordion</a></h1>
    <div class="bs-example">
      <p>
        <input type="checkbox" v-model="checked">
        Open only one at a time.
      </p>
      <p>
        <v-select :options="types" clear-button :value.sync="selected" placeholder="Global type"></v-select>
      </p>
      <p>
        <v-select :options="types" clear-button :value.sync="first" placeholder="First element type"></v-select>
      </p>
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
    <pre><code class="language-markup"><script type="language-mark-up">
<accordion :one-at-atime="checked" type="info">
  <panel header="Panel #1" :is-open="true" type="primary">
    ...
  </panel>
  <panel header="Panel #2">
    ...
  </panel>
  <panel header="Panel #3">
    ...
  </panel>
  <panel header="Panel #4">
    ...
  </panel>
</accordion>
</script></code></pre>
    <h2>Accordion Options</h2>
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
          <td>type</td>
          <td><code>String</code></td>
          <td><code>null</code></td>
          <td>Define the type of color for the tabs (global).</td>
        </tr>
        <tr>
          <td>one-at-time</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>Control whether expanding an item will cause the other items to close.</td>
        </tr>
      </tbody>
    </table>
    <h2>Panel Options</h2>
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
          <td>header</td>
          <td><code>String</code></td>
          <td></td>
          <td>The clickable text on the group's header. You need one to be able to click on the header for toggling.</td>
        </tr>
        <tr>
          <td>is-open</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>Whether accordion group is open or closed.</td>
        </tr>
        <tr>
          <td>type</td>
          <td><code>String</code></td>
          <td><code>null</code></td>
          <td>Define the type of color for the tab (single).</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import accordion from 'src/Accordion.vue'
import panel from 'src/Panel.vue'
import vSelect from 'src/Select.vue'

export default {
  components: {
    accordion,
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
