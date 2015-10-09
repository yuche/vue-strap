<template>
  <div class="bs-docs-section" id="modal">
    <h1 class="page-header"><a href="#modal" class="anchor">Modal</a></h1>
    <div class="bs-example">
      <button class="btn btn-default btn-lg" v-on="click:showModal = true">Show modal</button>
      <modal title="Modal" show="{{@showModal}}" effect="fade" width="400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </modal>
      <button class="btn btn-success btn-lg" v-on="click:bigModal = true">Big modal</button>
      <modal title="Big Modal" show="{{@bigModal}}" effect="fade" width="800">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </modal>
      <button class="btn btn-primary btn-lg" v-on="click:zoomModal = true">Zoom modal</button>
      <modal title="Zoom Modal" show="{{@zoomModal}}" effect="zoom" width="400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </modal>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<button class="btn btn-default btn-lg"
  v-on="click:showModal = true"
  >Show modal
</button>
<modal title="Modal" show="{{@showModal}}" effect="fade" width="400">
  ...
</modal>

<button class="btn btn-primary btn-lg"
  v-on="click:bigModal = true">
  Big modal
</button>
<modal title="Big Modal" show="{{@bigModal}}" effect="fade" width="800">
  ...
</modal>

<button class="btn btn-success btn-lg"
  v-on="click:zoomModal = true">
  Zoom modal
</button>
<modal title="Zoom Modal" show="{{@zoomModal}}" effect="zoom" width="400">
  ...
</modal>
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
        <td>Title</td>
        <td><code>String</code></td>
        <td></td>
        <td>Title of the modal component.</td>
      </tr>
      <tr>
        <td>footer</td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>Whether to show the footer of the modal.</td>
      </tr>
      <tr>
        <td>width</td>
        <td><code>Number</code></td>
        <td><code>600</code></td>
        <td></td>
      </tr>
      <tr>
        <td>callback</td>
        <td><code>Function</code></td>
        <td></td>
        <td>A callback Function when you click the modal primary button.</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import modal from 'src/modal.vue'
  export default {
    data() {
      return {
        showModal: false,
        bigModal: false,
        zoomModal: false
      }
    },
    components: {
      modal
    }
  }
</script>
