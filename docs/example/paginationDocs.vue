<template>
  <div class="bs-docs-section" id="pagination">
    <h1 class="page-header"><a href="#pagination" class="anchor">Pagination</a></h1>
    <div class="bs-example">
      <pagination :page-count="20"></pagination>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<pagination page-count="20"></pagination>
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
        <td>page-count</td>
        <td><code>Number</code></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>cur-page</td>
        <td><code>Number</code></td>
        <td>1</td>
        <td>Current page number.</td>
      </tr>
      <tr>
        <td>goto-page</td>
        <td><code>Function</code></td>
        <td></td>
        <td>Callback function with the page number as its parameter.</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import pagination from 'src/Pagination.vue'
  export default {
    components: {
      pagination
    }
  }
</script>
