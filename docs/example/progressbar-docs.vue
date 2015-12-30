<template>
  <div class="bs-docs-section" id="progressbar">
    <h1 class="page-header"><a href="#progressbar" class="anchor">Progressbar</a></h1>
    <div class="bs-example">
      <h4>Static</h4>
      <div class="row">
        <div class="col-md-4">
          <div class="progress">
            <progressbar :now="20" type="success"></progressbar>
          </div>
        </div>
        <div class="col-md-4">
          <div class="progress">
            <progressbar :now="40" type="info"></progressbar>
          </div>
        </div>
        <div class="col-md-4">
          <div class="progress">
            <progressbar :now="60" type="primary"></progressbar>
          </div>
        </div>
      </div>

      <hr>

      <h4>
        Dynamic
        <button type="button" class="btn btn-default" @click="dynamicClick">Randomize</button>
      </h4>
      <div class="progress">
        <progressbar :now="dynamicData[0] * 2" type="info"></progressbar>
      </div>
      <div class="progress">
        <progressbar :now="dynamicData[1] * 2" type="warning"></progressbar>
      </div>
      <div class="progress">
        <progressbar :now="dynamicData[2] * 2" type="danger"></progressbar>
      </div>
      <div class="progress">
        <progressbar :now="dynamicData[3] * 2" type="success" striped></progressbar>
      </div>
      <div class="progress">
        <progressbar :now="dynamicData[4] * 2" type="success" striped animated></progressbar>
      </div>

      <hr>

      <h4>
        Stacked
        <button type="button" class="btn btn-default" @click="stackedClick">Randomize</button>
      </h4>

      <div class="progress">
        <progressbar :now="stackedData[0]" label type="warning" striped></progressbar>

        <progressbar :now="stackedData[1]" label type="success" ></progressbar>

        <progressbar :now="stackedData[2]" label type="danger"></progressbar>

        <progressbar :now="stackedData[3]" label type="primary" striped animated></progressbar>
      </div>

    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<!-- Stacked -->
<div class="progress">
  <progressbar :now="" label type="warning" striped></progressbar>

  <progressbar :now="" label type="success" ></progressbar>

  <progressbar :now="" label type="danger"></progressbar>

  <progressbar :now="" label type="primary" striped animated></progressbar>
</div>
<!-- Single -->
<div class="progress">
  <progressbar :now="" label type="warning" striped></progressbar>
</div>
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
          <td>now</td>
          <td><code>Number</code></td>
          <td></td>
          <td>The current value of progress completed.</td>
        </tr>
        <tr>
          <td>type</td>
          <td><code>String</code></td>
          <td></td>
          <td>Style type. Possible values are 'success', 'warning' etc.</td>
        </tr>
        <tr>
          <td>label</td>
          <td><code>Boolean</code></td>
          <td>false</td>
          <td>Whether to show the label.</td>
        </tr>
        <tr>
          <td>striped</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>Whether the progressbar has striped effect or not.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import progressbar from 'src/Progressbar.vue'
  export default {
    data() {
      return {
        dynamicData: [5, 15, 25, 35, 45],
        stackedData: [10, 20, 30, 40],
      }
    },
    components: {
      progressbar
    },
    methods: {
      dynamicClick() {
        this.dynamicData = this.dynamicData.map(() => {
          return Math.floor(Math.random() * 50)
        })
      },
      stackedClick() {
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
