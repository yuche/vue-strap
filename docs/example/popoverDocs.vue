<template>
  <div class="bs-docs-section" id="popover">
    <h1 class="page-header"><a href="#popover" class="anchor">Popover</a></h1>
    <div class="bs-example">
      <popover effect="fade" :header="true" title="Title" content="Lorem ipsum dolor sit amet" placement="top">
        <button class="btn btn-default ">Popover on top</button>
      </popover>
      <popover effect="fade" :header="true" title="Title" content="Lorem ipsum dolor sit amet" placement="left">
        <button class="btn btn-default ">Popover on left</button>
      </popover>
      <popover effect="fade" :header="true" title="Title" content="Lorem ipsum dolor sit amet" placement="right">
        <button class="btn btn-default ">Popover on right</button>
      </popover>
      <popover effect="fade" placement="bottom" :header="true" title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
        <button class="btn btn-default ">Popover on bottom</button>
      </popover>
      <hr>
      <h4>No title</h4>
      <popover effect="fade"  title="Title" content="Lorem ipsum dolor sit amet" placement="top">
        <button class="btn btn-default ">Popover on top</button>
      </popover>
      <popover effect="fade"  title="Title" content="Lorem ipsum dolor sit amet" placement="left">
        <button class="btn btn-default ">Popover on left</button>
      </popover>
      <popover effect="fade"  title="Title" content="Lorem ipsum dolor sit amet" placement="right">
        <button class="btn btn-default ">Popover on right</button>
      </popover>
      <popover effect="fade" placement="bottom"  title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
        <button class="btn btn-default ">Popover on bottom</button>
      </popover>
      <hr>
      <h4>Triger</h4>
      <p>
        <popover effect="scale"  title="Title" content="Lorem ipsum dolor sit amet" placement="top" trigger="hover">
            <button class="btn btn-default ">Mouseenter</button>
        </popover>
      </p>
      <popover effect="scale"
      title="Title" content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">
        <input type="text" class="form-control" placeholder="Focus">
      </popover>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<popover
  effect="fade"
  placement="bottom"
  title="Title"
  content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
  <button class="btn btn-default ">Popover on bottom</button>
</popover>
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
        <td><code>String</code>, one of <code>click</code>
        <code>focus</code>
        <code>hover</code></td>
        <td><code>click</code></td>
        <td>How the popover is triggered.</td>
      </tr>
      <tr>
        <td>effect</td>
        <td><code>String</code>, one of <code>scale</code> <code>fade</code></td>
        <td><code>fade</code></td>
        <td></td>
      </tr>
      <tr>
        <td>title</td>
        <td><code>String</code></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>content</td>
        <td><code>String</code></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>header</td>
        <td><code>Boolean</code></td>
        <td><code>true</code></td>
        <td>Whether to show the header.</td>
      </tr>
      <tr>
        <td>placement</td>
        <td><code>String</code>, one of <code>top</code>
        <code>left</code>
        <code>right</code>
        <code>bottom</code></td>
        <td></td>
        <td>How to position the popover.</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import popover from 'src/Popover.vue'
  export default {
    data() {
      return {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet'
      }
    },
    components: {
      popover
    }
  }
</script>
