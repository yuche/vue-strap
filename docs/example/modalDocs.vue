<template>
  <div class="bs-docs-section" id="modal">
  	<h1>TEST</h1>
	 <modal :show.sync="showModal"  :width="400" title="modalTitle">
        <div slot="modal-body">BODY</div>
        <div slot="modal-footer" class="modal-footer">FOOTER</div>
    </modal>


    <h1 class="page-header"><a href="#modal" class="anchor">Modal</a></h1>
    <div class="bs-example">
      <button class="btn btn-secondary btn-lg" @click="showModal = true">Show modal</button>
      <button class="btn btn-success btn-lg" @click="bigModal = true">Big modal</button>
      <modal title="Big Modal" :show.sync="bigModal" effect="fade" :width="800">
        <div class="modal-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </modal>
      <button class="btn btn-primary btn-lg" @click="zoomModal = true">Zoom modal</button>
      <modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" :width="400">
        <div class="modal-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </modal>
      <button class="btn btn-secondary btn-lg" @click="showCustomModal = true">Show custom modal</button>
      <modal :show.sync="showCustomModal" effect="fade" :width="400">
        <div slot="modal-header" name="modal-header">
          <h4 class="modal-title"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>
        </div>
        <div class="modal-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div slot="modal-footer"  class="modal-footer">
          <button type="button" class="btn btn-secondary" @click='showCustomModal = false'>Exit</button>
          <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>
        </div>
      </modal>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<button class="btn btn-secondary btn-lg"
  @click="showModal = true"
  >Show modal
</button>
<modal :show.sync="showModal" effect="fade" :width="400">
  <div class="modal-header">
    <h4 class="modal-title">Modal title</h4>
  </div>
  <div class="modal-body">...</div>
</modal>

<button class="btn btn-primary btn-lg"
  @click="bigModal = true">
  Big modal
</button>
<modal title="Big Modal" :show.sync="bigModal" effect="fade" :width="800">
  <div class="modal-body">...</div>
</modal>

<button class="btn btn-success btn-lg"
  @click="zoomModal = true">
  Zoom modal
</button>
<modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" :width="400">
  <div class="modal-body">...</div>
</modal>

<button class="btn btn-secondary btn-lg"
  @click="showCustomModal = true">
  Show custom modal
</button>
<modal :show.sync="showCustomModal" effect="fade" :width="400">
  <div class="modal-header">
    <h4 class="modal-title">
      <i>Custom</i> <code>Modal</code> <b>Title</b>
    </h4>
  </div>
  <div class="modal-body">...</div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" @click='showCustomModal = false'>Exit</button>
    <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>
  </div>
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
  <h2>Usage</h2>
  <p>
    If you just need a simple modal, you can use the <code>title</code> prop and the default footer. However, if you
    need to put custom HTML or a custom footer, you can override the header or footer block by using
    <code>&lt;div class="modal-title"&gt;...&lt;/div&gt;</code> and
    <code>&lt;div class="modal-footer"&gt;...&lt;/div&gt;</code>.
  </p>
  </div>
</template>

<script>
  import modal from 'src/Modal.vue'
  export default {
    data() {
      return {
        showModal: false,
        bigModal: false,
        zoomModal: false,
        showCustomModal: false
      }
    },
    components: {
      modal
    }
  }
</script>
