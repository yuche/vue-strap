<template>
  <doc-section id="modal" name="Modal">
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
    <doc-code language="markup">
      <modal :show.sync="...">
        <div slot="modal-header" class="modal-header">
          <h4 class="modal-title">Modal title</h4>
        </div>
        <div slot="modal-body" class="modal-body">...</div>
      </modal>

      <modal title="Fade Modal" :show.sync="..." effect="fade" width="800">
        <div slot="modal-body" class="modal-body">...</div>
      </modal>

      <modal title="Zoom Modal" :show.sync="..." effect="zoom" width="400">
        <div slot="modal-body" class="modal-body">...</div>
      </modal>

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
      <modal title="Large Modal" large :show.sync="...">
        <div slot="modal-body" class="modal-body">...</div>
      </modal>
      <modal title="Small Modal" small :show.sync="...">
        <div slot="modal-body" class="modal-body">...</div>
      </modal>
  </doc-code>
  <doc-table>
    <div>
      <p>title</p>
      <p><code>String</code></p>
      <p></p>
      <p>Title of the modal component.</p>
    </div>
    <div>
      <p>ok-text</p>
      <p><code>String</code></p>
      <p>Save changes</p>
      <p>Text for OK button</p>
    </div>
    <div>
      <p>cancel-text</p>
      <p><code>String</code></p>
      <p>Close</p>
      <p>Text for cancel button</p>
    </div>
    <div>
      <p>width</p>
      <p><code>Number, String or null</code></p>
      <p><code>null</code></p>
      <p>Pass a Number in pixels or a String with relational sizes ( e.g. '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default.</p>
    </div>
    <div>
      <p>callback</p>
      <p><code>Function</code></p>
      <p></p>
      <p>A callback Function when you click the modal primary button.</p>
    </div>
    <div>
      <p>large</p>
      <p><code>Boolean</code></p>
      <p><code>false</code></p>
      <p>Creates a large modal ( see boostrap's documentation for .modal-lg )</p>
    </div>
    <div>
      <p>small</p>
      <p><code>Boolean</code></p>
      <p><code>false</code></p>
      <p>Creates a small modal ( see boostrap's documentation for .modal-sm )</p>
    </div>
    <div>
      <p>backdrop</p>
      <p><code>Boolean</code></p>
      <p><code>true</code></p>
      <p>Enables/disables closing the modal by clicking on the backdrop.</p>
    </div>
  </doc-table>
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
import docSection from './docSection.vue'
import docTable from './docTable.vue'
import docCode from './docCode.vue'
import modal from 'src/Modal.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    modal
  },
  data () {
    return {
      showModal: false,
      fadeModal: false,
      zoomModal: false,
      showCustomModal: false,
      largeModal: false,
      smallModal: false
    }
  }
}
</script>
