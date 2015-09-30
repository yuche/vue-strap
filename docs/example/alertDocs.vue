<template>
  <div class="bs-docs-section" >
    <h1 class="page-header"> Alerts</h1>
    <h2>Basic Alerts</h2>
    <div class="bs-example" >
      <div id="alert-basic">
      <alert type="success" >
        <strong>Well Done!</strong> You successfully read this important alert message.
      </alert>
      <alert type="info" >
        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
      </alert>
      <alert type="danger" >
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </alert>
      <alert type="warning" >
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
      </alert>
      </div>
    </div>

    <pre class="language-markup"><code class="language-markup"><script type="language-mark-up"><alert type="success" >
      <!-- Your content goes to here -->
      <strong>Well Done!</strong> You successfully read this important alert message.
    </alert>

    <alert type="info" >
      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </alert>

    <alert type="danger" >
      <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </alert>

    <alert type="warning" >
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </alert></script></code></pre>
        <br>
    <h2>Closeable alerts</h2>
    <div class="bs-example">
      <alert type="success" dismiss="true">
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
      </alert>
      <alert type="warning" dismiss="true">
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
      </alert>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up"><alert type="success" dismiss="true">
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </alert>

    <alert type="warning" dismiss="true">
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </alert></script></code></pre>
  </div>
</template>

<script>
  import alert from '../../src/Alert.vue'
  export default {
    components: {
      alert
    }
  }
</script>