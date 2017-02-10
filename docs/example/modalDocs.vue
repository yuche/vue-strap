<template>
  <doc-section id="modal" name="Modal">
    <div class="bs-example">
      <button class="btn btn-default" @click="showModal = true">Show modal</button>
      <modal title="Modal title" v-model="showModal" @ok="showModal = false">
        <div slot="modal-header" class="modal-header">
          <h4 class="modal-title">Modal <b>Title</b></h4>
        </div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </modal>
      <button class="btn btn-success" @click="fadeModal = true">Fade modal</button>
      <modal title="Fade Modal" effect="fade" width="800" v-model="fadeModal" @ok="fadeModal = ok()">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </modal>
      <button class="btn btn-default" @click="showCustomModal = true">Show custom modal</button>
      <modal effect="fade" width="50%" v-model="showCustomModal" @ok="showCustomModal = ok()">
        <div slot="modal-header" class="modal-header">
          <h4 class="modal-title"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>
        </div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <div slot="modal-footer" class="modal-footer">
          <button type="button" class="btn btn-default" @click="showCustomModal = false">Exit</button>
          <button type="button" class="btn btn-success" @click="showCustomModal = ok()">Custom Save</button>
          <button type="button" class="btn btn-success" @click="alert">Another Action</button>
        </div>
      </modal>
      <button class="btn btn-primary" @click="zoomModal = true">Zoom modal</button>
      <modal title="Zoom Modal" effect="zoom" width="400" v-model="zoomModal" @ok="zoomModal = ok()">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </modal>
      <button class="btn btn-warning" @click="largeModal = true">Large modal</button>
      <modal title="Large Modal" large v-model="largeModal" @ok="largeModal = ok()">
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
      </modal>
      <button class="btn btn-danger" @click="smallModal = true">Small modal</button>
      <modal title="Small Modal" small v-model="smallModal" @ok="smallModal = ok()">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
      </modal>
    </div>
    <hr/>
    Have different ways to use it:
    <doc-code language="html">
      &lt;!-- with v-model ("cancel" event close the modal, "ok" don't, so you have to do it manual) -->
      &lt;modal v-model="show" @ok="show = false">
        ...
      &lt;/modal>
      &lt;!-- handling ok &amp; cancel events -->
      &lt;modal title="Fade/Zoom Modal" effect="fade/zoom"
        :value="show" @ok="okAction" @cancel="cancelAction"
      >
        ...
      &lt;/modal>
      &lt;modal v-model="show" effect="fade">
        &lt;!-- custom header -->
        &lt;div slot="modal-header" class="modal-header">
          &lt;h4 class="modal-title">
            &lt;i>Custom&lt;/i> &lt;code>Modal&lt;/code> &lt;b>Title&lt;/b>
          &lt;/h4>
        &lt;/div>
        ...
        &lt;!-- custom buttons -->
        &lt;div slot="modal-footer" class="modal-footer">
          &lt;button type="button" class="btn btn-default" @click="show = false">Exit&lt;/button>
          &lt;button type="button" class="btn btn-success" @click="saveMethod">Custom Save&lt;/button>
          &lt;button type="button" class="btn btn-success" @click="otherMethod">Another Action&lt;/button>
        &lt;/div>
      &lt;/modal>
    </doc-code>
    <doc-table>
      <div>
        <p>backdrop</p>
        <p><code>Boolean</code></p>
        <p><code>true</code></p>
        <p>Enables/disables closing the modal by clicking on the backdrop.</p>
      </div>
      <div>
        <p>callback</p>
        <p><code>Function</code></p>
        <p></p>
        <p>A callback Function when you click the modal primary button.</p>
      </div>
      <div>
        <p>cancel-text</p>
        <p><code>String</code></p>
        <p>Close</p>
        <p>Text for cancel button</p>
      </div>
      <div>
        <p>effect</p>
        <p><code>String</code></p>
        <p></p>
        <p>set the name of the effect to use on modal, like fade or zoom</p>
      </div>
      <div>
        <p>large</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Large modal (see boostrap's documentation for .modal-lg)</p>
      </div>
      <div>
        <p>ok-text</p>
        <p><code>String</code></p>
        <p>Save changes</p>
        <p>Text for OK button</p>
      </div>
      <div>
        <p>small</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Small modal (see boostrap's documentation for .modal-sm)</p>
      </div>
      <div>
        <p>title</p>
        <p><code>String</code></p>
        <p></p>
        <p>Title of the modal component.</p>
      </div>
      <div>
        <p>value</p>
        <p><code>Boolean</code></p>
        <p></p>
        <p>true if modal need to be shown, note the Modal has no intenal state</p>
      </div>
      <div>
        <p>width</p>
        <p><code>Number, String or null</code></p>
        <p><code>null</code></p>
        <p>Pass a Number in pixels or a String with relational sizes ( e.g. '80%' or '5em' ). If null, the modal will be responsive per bootstrap's default.</p>
      </div>
    </doc-table>
    <doc-table type="Events">
      <div>
        <p>input</p>
        <p>(<code>show:boolean</code>)</p>
        <p>Return if the modal is shown.</p>
      </div>
      <div>
        <p>ok</p>
        <p></p>
        <p>Called if the modal was accepted.</p>
      </div>
      <div>
        <p>cancel</p>
        <p></p>
        <p>Called if the modal was canceled.</p>
      </div>
      <div>
        <p>opened</p>
        <p></p>
        <p>Called when the modal is opened.</p>
      </div>
      <div>
        <p>closed</p>
        <p></p>
        <p>Called when the modal is closed.</p>
      </div>
    </doc-table>
    <p><strong>Note:</strong> The default events are called if you use the default footer. Using a footer slot, you must implement your own events to the buttons.</p>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
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
  },
  methods: {
    ok () {
      return !confirm("Ok event.\nClose Modal?")
    },
    alert () {
      alert('Another Action.\nClose the modal...')
      this.showCustomModal = false
    }
  }
}
</script>
