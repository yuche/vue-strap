<template>
  <div class="bs-docs-section" >
    <h1 class="page-header"> Alerts</h1>
    <div class="bs-example" >
      <alert type="success" >
        <strong>Well Done!</strong> You successfully read this important alert message.
      </alert>
      <alert type="info" >
        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
      </alert>
      <alert type="danger" dismiss>
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </alert>
      <alert type="warning" dismiss>
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
      </alert>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<alert type="success" >
  <!-- Your content goes to here -->
  <strong>Well Done!</strong> You successfully read this important alert message.
</alert>

<alert type="info" >
  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
</alert>

<alert type="danger" dismiss>
  <strong>Oh snap!</strong> Change a few things up and try submitting again.
</alert>

<alert type="warning" dismiss>
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</alert>
</script></code></pre>
  </div>
</template>

<script>
  import alert from '../../src/Alert.vue'
  export default {
    components: {
      alert,
    }
  }
</script>
