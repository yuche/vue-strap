<template>
  <div class="bs-docs-section" id="affix">
    <h1 class="page-header"><a href="#affix" class="anchor">Affix</a></h1>
    <div class="bs-example">
      <h3>
        The sub-navigation on the RIGHT is a live demo of the affix.
        <tooltip trigger="hover" effect="fadein" content="I'm a direction, not jerking off!" placement="left">
          <span class="glyphicon glyphicon-hand-right pull-right animated shake"></span>
        </tooltip>
      </h3>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<affix offset="">
  <nav class="sidebar">
    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
    </ul>
  </nav>
</affix>
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
          <td>offset</td>
          <td><code>Number</code></td>
          <td><code>0</code></td>
          <td>Pixels to offset from top of screen when calculating position of scroll.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import tooltip from 'src/Tooltip.vue'
  export default {
    components: {
      tooltip
    }
  }
</script>

<style>
.animated {
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-iteration-count: infinite
}
@keyframes shake {
    0%, 100% {transform: translateX(0);}
    10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);}
    20%, 40%, 60%, 80% {transform: translateX(5px);}
}
.shake {
    -webkit-animation-name: shake;
    animation-name: shake;
}
</style>
