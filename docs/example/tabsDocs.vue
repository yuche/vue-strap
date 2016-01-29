<template>
  <div class="bs-docs-section" id="tabs">
    <h1 class="page-header"><a href="#tabs" class="anchor">Tabs</a></h1>
    <div class="bs-example">
      <tabs>
        <tab header="one">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </tab>
        <tab header="two">
           <p>
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
           </p>
        </tab>
        <tab header="three" disabled>
          ...
        </tab>
      </tabs>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<tabs :active="0">
  <tab header="one">
    ...
  </tab>
  <tab header="two">
    ...
  </tab>
  <tab header="three" disabled>
    ...
  </tab>
</tabs>
</script></code></pre>
  <h2>Tabs Options</h2>
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
        <td>active</td>
        <td><code>Number</code></td>
        <td></td>
        <td>Active tab index (0 based)</td>
      </tr>
    </tbody>
  </table>
  <h2>Tab Options (NOT TABS)</h2>
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
        <td>header</td>
        <td><code>String</code></td>
        <td></td>
        <td>Heading text of the tab.</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td><code>Boolean</code></td>
        <td>false</td>
        <td>Whether tab is clickable and can be activated. </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import tabs from 'src/Tabset.vue'
  import tab from 'src/Tab.vue'
  export default {
    components: {
      tabs,
      tab
    }
  }
</script>
