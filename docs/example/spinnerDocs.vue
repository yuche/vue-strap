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
  </div>
</template>

<script type="es6">
  import spinner from 'src/Spinner.vue'

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
