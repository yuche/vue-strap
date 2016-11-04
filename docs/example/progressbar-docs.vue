<template>
  <doc-section id="progressbar" name="Progressbar">
    <div class="bs-example">
      <h4>Static</h4>
      <div class="row">
        <div class="col-md-4">
          <div class="progress">
            <progressbar now="20" type="success"></progressbar>
          </div>
        </div>
        <div class="col-md-4">
          <div class="progress">
            <progressbar now="40" type="info"></progressbar>
          </div>
        </div>
        <div class="col-md-4">
          <div class="progress">
            <progressbar now="60" type="primary"></progressbar>
          </div>
        </div>
      </div>
      <hr/>
      <h4>Dynamic <button type="button" class="btn btn-default" @click="dynamicClick">Randomize</button></h4>
      <div class="progress">
        <progressbar :now="dynamicData[0]" type="info"></progressbar>
      </div>
      <div class="progress">
        <progressbar :now="dynamicData[1]" type="warning"></progressbar>
      </div>
      <div class="progress">
        <progressbar :now="dynamicData[2]" type="danger"></progressbar>
      </div>
      <div class="progress">
        <progressbar :now="dynamicData[3]" type="success" striped></progressbar>
      </div>
      <div class="progress">
        <progressbar :now="dynamicData[4]" type="success" striped animated></progressbar>
      </div>
      <hr/>
      <h4>Stacked <button type="button" class="btn btn-default" @click="stackedClick">Randomize</button></h4>
      <div class="progress">
        <progressbar :now="stackedData[0]" label type="warning" striped></progressbar>
        <progressbar :now="stackedData[1]" label type="success" ></progressbar>
        <progressbar :now="stackedData[2]" label type="danger"></progressbar>
        <progressbar :now="stackedData[3]" label type="primary" striped animated></progressbar>
      </div>

    </div>
    <doc-code language="markup">
      &lt;!-- Single -->
      &lt;div class="progress">
        &lt;progressbar now="" label type="warning" striped>&lt;/progressbar>
      &lt;/div>
      &lt;!-- Stacked -->
      &lt;div class="progress">
        &lt;progressbar now="..." label type="warning" striped>&lt;/progressbar>
        &lt;progressbar now="..." label type="success">&lt;/progressbar>
        &lt;progressbar now="..." label type="danger">&lt;/progressbar>
        &lt;progressbar now="..." label type="primary" striped animated>&lt;/progressbar>
      &lt;/div>
    </doc-code>
    <doc-table>
      <div>
        <p>now</p>
        <p><code>Number</code></p>
        <p></p>
        <p>The current value of progress completed. Required.</p>
      </div>
      <div>
        <p>type</p>
        <p><code>String</code></p>
        <p></p>
        <p>Style type. Possible values are 'success', 'warning' etc.</p>
      </div>
      <div>
        <p>label</p>
        <p><code>Boolean</code></p>
        <p>false</p>
        <p>Whether to show the label.</p>
      </div>
      <div>
        <p>striped</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Whether the progressbar has striped effect or not.</p>
      </div>
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import progressbar from 'src/Progressbar.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    progressbar
  },
  data () {
    return {
      dynamicData: [10, 30, 50, 70, 90],
      stackedData: [10, 20, 30, 40]
    }
  },
  methods: {
    dynamicClick () {
      this.dynamicData = this.dynamicData.map(() => {
        return Math.floor(Math.random() * 100)
      })
    },
    stackedClick () {
      let i = 100
      this.stackedData = this.stackedData.map(() => {
        const random = Math.floor(Math.random() * i)
        i = i - random
        return random
      })
    }
  }
}
</script>
