<template>
  <div class="bs-docs-section" id="spnner">
    <h1 class="page-header"><a href="#spnner" class="anchor">Spnner</a></h1>
    <div class="bs-example">

      <!-- Html controls start-->
      <div >
        <label>fixed <input type="checkbox" v-model="fixed"></label>
        <label>size
          <select v-model="size">
            <option v-for="option in sizes" v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
        </label>
      </div>
      <!-- Html controls end-->

      <!-- Html markup start-->
      <div >
        <button v-on:click="$broadcast('show::spinner')">show spinner</button>
        <spinner id="spinner-box" :size="size" :fixed="fixed" text="I will close in 2 secs"></spinner>
      </div>
      <!-- Html markup end-->

    </div>

    <pre><code class="language-markup"><script type="language-mark-up">
		<spinner id="spinner-box" :size="(sm,md,lg...)" :fixed="(true,false)" 
			text="I will close in 2 secs" v-ref:spinner></spinner>
	</script></code></pre>

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
  import spinner from 'src/Spinner.vue';

  const sizes = [
    {
      text: 'sm',
      value: 'sm'
    }, {
      text: 'md',
      value: 'md'
    }, {
      text: 'lg',
      value: 'lg'
    }
  ]

  export default {
    data() {
      return {
        fixed: false,
        size: 'lg',
        sizes: sizes.concat({text: 'xl', value: 'xl'}),
      }
    },
    components: {
      spinner
    },
    events: {
      'shown::spinner'(id) {
        setTimeout(() => {
          this.$root.$broadcast('hide::spinner', id)
	    }, 2000)
      }
    }
  }
</script>
