<template>
  <div class="bs-docs-section" id="accordion">
    <h1 class="page-header"><a href="#accordion" class="anchor">Accordion</a></h1>
    <div class="bs-example">
      <p>
        <input type="checkbox" v-model="checked">
        Open only one at a time.
      </p>
      <accordion one-at-atime="{{checked}}">
        <panel header="Panel #1" is-open="true">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
        <panel header="Panel #2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
        <panel header="Panel #3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
        <panel header="Panel #4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
      </accordion>
      <pre><code class="language-markup"><script type="language-mark-up">
      <p>
        <input type="checkbox" v-model="checked">
        Open only one at a time.
      </p>
      <accordion one-at-atime="{{checked}}">
        <panel header="Panel #1" is-open="true">
          ...
        </panel>
        <panel header="Panel #2">
          ...
        </panel>
        <panel header="Panel #3">
          ...
        </panel>
        <panel header="Panel #4">
          ...
        </panel>
      </accordion>
      </script></code></pre>
    </div>
  </div>
</template>

<script>
import accordion from '../../src/Accordion.vue'
import panel from '../../src/Panel.vue'
  export default {
    data() {
      return {
        checked: true
      }
    },
    components: {
      accordion,
      panel
    }
  }
</script>
