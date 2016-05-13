<template>
  <div class="bs-docs-section" id="modal">
    <h1 class="page-header"><a href="#modal" class="anchor">Modal</a></h1>
    <div class="bs-example">
      <button class="btn btn-default" @click="showModal = true">Show modal</button>
      <modal title="Modal title" :show.sync="showModal">
        <div slot="modal-header" class="modal-header">
          <h4 class="modal-title">Modal <b>Title</b></h4>
        </div>
        <div slot="modal-body" class="modal-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </modal>
      <button class="btn btn-success" @click="fadeModal = true">Fade modal</button>
      <modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800">
        <div slot="modal-body" class="modal-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </modal>
      <button class="btn btn-primary" @click="zoomModal = true">Zoom modal</button>
      <modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400">
        <div slot="modal-body" class="modal-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </modal>
      <button class="btn btn-default" @click="showCustomModal = true">Show custom modal</button>
      <modal :show.sync="showCustomModal" effect="fade" width="50%">
        <div slot="modal-header" class="modal-header">
          <h4 class="modal-title"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>
        </div>
        <div slot="modal-body" class="modal-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div slot="modal-footer" class="modal-footer">
          <button type="button" class="btn btn-default" @click='showCustomModal = false'>Exit</button>
          <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>
        </div>
      </modal>
      <button class="btn btn-warning" @click="largeModal = true">Large modal</button>
      <modal title="Large Modal" :show.sync="largeModal" large>
        <div slot="modal-body" class="modal-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </modal>
      <button class="btn btn-danger" @click="smallModal = true">Small modal</button>
      <modal title="Small Modal" :show.sync="smallModal" small>
        <div slot="modal-body" class="modal-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </div>
      </modal>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<button class="btn btn-default"
  @click="showModal = true"
  >Show modal
</button>
<modal :show.sync="showModal">
  <div slot="modal-header" class="modal-header">
    <h4 class="modal-title">Modal title</h4>
  </div>
  <div slot="modal-body" class="modal-body">...</div>
</modal>

<button class="btn btn-primary"
  @click="fadeModal = true">
  Fade modal
</button>
<modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800">
  <div slot="modal-body" class="modal-body">...</div>
</modal>

<button class="btn btn-success"
  @click="zoomModal = true">
  Zoom modal
</button>
<modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400">
  <div slot="modal-body" class="modal-body">...</div>
</modal>

<button class="btn btn-default"
  @click="showCustomModal = true">
  Show custom modal
</button>
<modal :show.sync="showCustomModal" effect="fade" width="400">
  <div slot="modal-header" class="modal-header">
    <h4 class="modal-title">
      <i>Custom</i> <code>Modal</code> <b>Title</b>
    </h4>
  </div>
  <div slot="modal-body" class="modal-body">...</div>
  <div slot="modal-footer" class="modal-footer">
    <button type="button" class="btn btn-default" @click='showCustomModal = false'>Exit</button>
    <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>
  </div>
</modal>
<button class="btn btn-default"
  @click="largeModal = true"
  >Large Modal
</button>
<modal :show.sync="largeModal">
  <div slot="modal-body" class="modal-body">...</div>
</modal>
<button class="btn btn-default"
  @click="smallModal = true"
  >Small Modal
</button>
<modal :show.sync="smallModal">
  <div slot="modal-body" class="modal-body">...</div>
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
        <td>title</td>
        <td><code>String</code></td>
        <td></td>
        <td>Title of the modal component.</td>
      </tr>
      <tr>
        <td>ok-text</td>
        <td><code>String</code></td>
        <td>Save changes</td>
        <td>Text for OK button</td>
      </tr>
      <tr>
        <td>cancel-text</td>
        <td><code>String</code></td>
        <td>Close</td>
        <td>Text for cancel button</td>
      </tr>
      <tr>
        <td>width</td>
        <td><code>Number, String or null</code></td>
        <td><code>null</code></td>
        <td>Pass a Number in pixels or a String with relational sizes ( ex: '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default.</td>
      </tr>
      <tr>
        <td>callback</td>
        <td><code>Function</code></td>
        <td></td>
        <td>A callback Function when you click the modal primary button.</td>
      </tr>
      <tr>
        <td>large</td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>Creates a large modal ( see boostrap's documentation for .modal-lg )</td>
      </tr>
      <tr>
        <td>small</td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>Creates a small modal ( see boostrap's documentation for .modal-sm )</td>
      </tr>
      <tr>
        <td>backdrop</td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>Enables/disables closing the modal by clicking on the backdrop.</td>
      </tr>
    </tbody>
  </table>
  <h2>Usage</h2>
  <p>
    If you just need a simple modal, you can use the <code>title</code> prop and the default footer. However, if you
    need to put custom HTML or a custom footer, you can override the header or footer block by using
    <code>&lt;div slot="modal-title" class="modal-title"&gt;...&lt;/div&gt;</code> and
    <code>&lt;div slot="modal-footer" class="modal-footer"&gt;...&lt;/div&gt;</code>.
  </p>
  </div>
</template>

<script>
  import modal from 'src/Modal.vue'
  export default {
    data() {
      return {
        showModal: false,
        fadeModal: false,
        zoomModal: false,
        showCustomModal: false,
        largeModal: false,
        smallModal: false
      }
    },
    components: {
      modal
    }
  }
</script>
