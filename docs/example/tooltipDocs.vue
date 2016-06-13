<template>
  <div class="bs-docs-section" id="tooltip">
    <h1 class="page-header"><a href="#tooltip" class="anchor">Tooltip</a></h1>
    <div class="bs-example">
      <tooltip  :header="true" content="Lorem ipsum dolor sit amet" placement="top">
        <button class="btn btn-default ">tooltip on top</button>
      </tooltip>
      <tooltip  :header="true" content="Lorem ipsum dolor sit amet" placement="left">
        <button class="btn btn-default ">tooltip on left</button>
      </tooltip>
      <tooltip  :header="true" content="Lorem ipsum dolor sit amet" placement="right">
        <button class="btn btn-default ">tooltip on right</button>
      </tooltip>
      <tooltip  placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
        <button class="btn btn-default ">tooltip on bottom</button>
      </tooltip>
      <hr>
      <h4>Triger</h4>
      <p>
        <tooltip trigger="click"
        effect="scale" content="Lorem ipsum dolor sit amet" placement="top" trigger="hover">
            <button class="btn btn-default ">Click</button>
        </tooltip>
      </p>
      <tooltip effect="scale"
    content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">
        <input type="text" class="form-control" placeholder="Focus">
      </tooltip>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<tooltip
  effect="scale"
  placement="bottom"
  content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
  <button class="btn btn-default ">tooltip on bottom</button>
</tooltip>
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
        <td>trigger</td>
        <td><code>String</code>, one of <code>hover</code>
        <code>focus</code>
        <code>hover</code></td>
        <td><code>click</code></td>
        <td>How the tooltip is triggered.</td>
      </tr>
      <tr>
        <td>effect</td>
        <td><code>String</code>, one of <code>scale</code> <code>fadein</code></td>
        <td><code>scale</code></td>
        <td></td>
      <tr>
        <td>content</td>
        <td><code>String</code></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>placement</td>
        <td><code>String</code>, one of <code>top</code>
        <code>left</code>
        <code>right</code>
        <code>bottom</code></td>
        <td></td>
        <td>How to position the tooltip.</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import tooltip from 'src/Tooltip.vue'
  export default {
    data() {
      return {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet'
      }
    },
    components: {
      tooltip
    }
  }
</script>
