<template>
  <div class="bs-docs-section" id="spnner">
    <h1 class="page-header"><a href="#spnner" class="anchor">Spnner</a></h1>
    <div class="bs-example">
      <p><checkbox :checked.sync="fixed" type="info">fixed</checkbox></p>
      <p><v-select :options="sizes" :value.sync="size">size</v-select></p>
      <p><button class="btn btn-info" v-on:click="$broadcast('show::spinner')">show spinner</button></p>
      <div><spinner id="spinner-box" :size="size" :fixed="fixed" text="I will close in 2 secs"></spinner></div>
    </div>

    <pre><code class="language-markup">
&lt;spinner id="spinner-box" :size="(sm,md,lg...)" :fixed="(true,false)"
  text="I will close in 2 secs" v-ref:spinner>&lt;/spinner>
    </code></pre>

    <p>To close the spinner, use the following code:</p>
    <pre><code class="language-markup"><script type="language-mark-up">this.$refs.spinner.hide()</script></code></pre>
    <h2>Spinner Options</h2>
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
          <td>size</td>
          <td><code>Text</code></td>
          <td>md</td>
          <td>The size of the spinner (either [sm, md, lg]).</td>
        </tr>
        <tr>
          <td>fixed</td>
          <td><code>Boolean</code></td>
          <td>false</td>
          <td>Set to true if you want the spinner to occupy the entire window space.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import checkbox from 'src/Checkbox.vue'
import vSelect from 'src/Select.vue'
import spinner from 'src/Spinner.vue'

export default {
  components: {
    checkbox,
    spinner,
    vSelect
  },
  data () {
    return {
      fixed: false,
      size: 'lg',
      sizes: ['sm','md','lg','xl']
    }
  },
  events: {
    'shown::spinner' (id) {
      setTimeout(() => {
        this.$root.$broadcast('hide::spinner', id)
      }, 2000)
    }
  }
}
</script>
