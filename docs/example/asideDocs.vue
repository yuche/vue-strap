<template>
  <doc-section id="aside" name="Aside">
    <div class="bs-example">
      <button class="btn btn-danger btn-lg" @click="showLeft = true">Show Aside on left</button>
      <button class="btn btn-success btn-lg" @click="showRight = true">Show Aside on right</button>

      <sidebar :show.sync="showLeft" placement="left" header="Title" :width="350">
        <h4>Text in aside</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</p>
        <p> Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.</p>
        <doc-code language="javascript">
          if (talk === cheap){
            code.style.display = 'block'
          }
        </doc-code>
        <div class="aside-footer">
          <button type="button" class="btn btn-default" @click="showLeft=false">Close</button>
        </div>
      </sidebar>
      <sidebar :show.sync="showRight" placement="right" header="Title" :width="350">
        <h4>Text in aside</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</p>
        <p> Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.</p>
        <doc-code language="javascript">
          if (talk === cheap){
            code.style.display = 'block'
          }
        </doc-code>
        <div class="aside-footer">
          <button type="button" class="btn btn-default" @click="showRight=false">Close</button>
        </div>
      </sidebar>
    </div>
    <doc-code language="markup">
      <aside :show.sync="showRight" placement="right" header="Title" width="350">
        ...
      </aside>
      <aside :show.sync="showLeft" placement="left" header="Title" width="350">
        ...
      </aside>
    </doc-code>
    <doc-table>
      <div>
        <p>show</p>
        <p><code>Boolean</code></p>
        <p></p>
        <p>Whether show the component.</p>
      </div>
      <div>
        <p>placement</p>
        <p><code>String</code>, one of <code>left</code>, <code>right</code></p>
        <p><code>right</code></p>
        <p>how to position the component.</p>
      </div>
      <div>
        <p>header</p>
        <p><code>String</code></p>
        <p></p>
        <p>Header text of the aside component.</p>
      </div>
      <div>
        <p>width</p>
        <p><code>Number</code></p>
        <p></p>
        <p></p>
      </div>
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './docSection.vue'
import docTable from './docTable.vue'
import docCode from './docCode.vue'
import sidebar from 'src/Aside.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    sidebar
  },
  data () {
    return {
      showLeft: false,
      showRight: false
    }
  }
}
</script>
