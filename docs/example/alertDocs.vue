<template>
  <doc-section id="alert" name="Alert">
    <div class="bs-example">
      <button class="btn btn-danger btn-lg"
        @click="showTop = !showTop">
        Click to toggle alert on top
      </button>
      <alert v-model="showTop" placement="top" :duration="3000"
        type="danger" width="400px" dismissable
      >
        <span class="icon-info-circled alert-icon-float-left"></span>
        <strong>Heads up!</strong>
        <p>This alert needs your attention.</p>
      </alert>
      <button class="btn btn-success btn-lg"
        @click="showRight = !showRight">
        Click to toggle alert on right
      </button>
      <alert v-model="showRight" placement="top-right" :duration="3000"
        type="success" width="400px" dismissable
      >
        <span class="icon-ok-circled alert-icon-float-left"></span>
        <strong>Well Done!</strong>
        <p>You successfully read this important alert message.</p>
      </alert>
      <hr>
      <alert type="success">
        <strong>Well Done!</strong>
        You successfully read this important alert message.
      </alert>
      <alert type="info">
        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
      </alert>
      <alert type="danger" dismissable>
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </alert>
      <alert type="warning" dismissable>
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
      </alert>
    </div>

    <doc-code language="markup">
      &lt;alert type="success/info/danger/warning">
        ...
      &lt;/alert>

      &lt;alert v-model="showRight" placement="top-right" duration="3000" type="success" width="400px" dismissable>
        &lt;span class="icon-ok-circled alert-icon-float-left">&lt;/span>
        &lt;strong>Well Done!&lt;/strong>
        &lt;p>You successfully read this important alert message.&lt;/p>
      &lt;/alert>

      &lt;alert v-models="showTop" placement="top" duration="3000" type="danger" width="400px" dismissable>
        &lt;span class="icon-info-circled alert-icon-float-left">&lt;/span>
        &lt;strong>Heads up!&lt;/strong>
        &lt;p>This alert needs your attention.&lt;/p>
      &lt;/alert>
    </doc-code>
    <doc-table>
      <div>
        <p>value</p>
        <p><code>Boolean</code></p>
        <p><code>true</code></p>
        <p>Whether show the component</p>
      </div>
      <div>
        <p>dismissable</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Whether show close button</p>
      </div>
      <div>
        <p>type</p>
        <p><code>String</code>, one of
        <code>success</code>
        <code>info</code>
        <code>warning</code>
        <code>danger</code></p>
        <p><code>success</code></p>
        <p>Components styles</p>
      </div>
      <div>
        <p>duration</p>
        <p><code>Number</code></p>
        <p><code>0</code></p>
        <p>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</p>
      </div>
      <div>
        <p>width</p>
        <p><code>String</code></p>
        <p></p>
      </div>
      <div>
        <p>placement</p>
        <p><code>String</code>. one of <code>top</code>, <code>top-right</code></p>
        <p></p>
        <p>how to position the component.</p>
      </div>
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import alert from 'src/Alert.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    alert
  },
  data () {
    return {
      showRight: false,
      showTop: false
    }
  }
}
</script>

<style>
.alert-icon-float-left {
  font-size:32px;
  float:left;
  margin-right:5px;
}
</style>
