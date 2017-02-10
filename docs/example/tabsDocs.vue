<template>
  <doc-section id="tabs" name="Tabs">
    <div class="bs-example">
      <p>Style: <v-select v-model="navStyle" :options="['tabs','pills','stacked']"></v-select></p>
      <p v-if="navStyle!='stacked'">Justified: <v-select v-model="justified" :options="[true,false]"></v-select></p>
      <!-- <checkbox v-model="justified">Justified</checkbox> -->
      <tabs :nav-style="navStyle" :justified="justified">
        <tab header="zero">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </tab>
        <tab header="one">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </tab>
        <tab header="two" disabled>
          ...
        </tab>
        <tab-group header="group1">
          <tab header="three">
           <p>
              Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
           </p>
          </tab>
          <tab header="four" disabled>
            ...
          </tab>
        </tab-group>
        <tab-group header="group2" disabled>
          <tab header="five">
            ...
          </tab>
        </tab-group>
      </tabs>
    </div>
    <doc-code language="markup">
      &lt;tabs v-model="activeTab" nav-style="tabs" justified>
        &lt;tab header="zero">
          ...
        &lt;/tab>
        &lt;tab header="one">
          ...
        &lt;/tab>
        &lt;tab header="two" disabled>
          ...
        &lt;/tab>
        &lt;tab-group header="group1">
          &lt;tab header="three">
            ...
          &lt;/tab>
          &lt;tab header="four" disabled>
            ...
          &lt;/tab>
        &lt;/tab-group>
        &lt;tab-group header="group2">
          &lt;tab header="five">
            ...
          &lt;/tab>
        &lt;/tab-group>
      &lt;/tabs>
    </doc-code>
    <doc-table name="Tabs (container)">
      <div>
        <p>value (v-model)</p>
        <p><code>Number</code></p>
        <p><code>0</code></p>
        <p>Active tab index (0 based)</p>
      </div>
      <div>
        <p>justified</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Justify (<code>tabs</code> and <code>pills</code>).</p>
      </div>
      <div>
        <p>nav-style</p>
        <p><code>String</code>. One of <code>tabs</code>, <code>pills</code>, <code>stacked</code>.</p>
        <p><code>'tabs'</code></p>
        <p>Style for tabs</p>
      </div>
    </doc-table>
    <doc-table name="Tabs" type="Events">
      <div>
        <p>active / input</p>
        <p>(<code>index:number</code>)</p>
        <p>Return the Active tab index (0 based).</p>
      </div>
    </doc-table>
    <doc-table name="TabGroup & Tab">
      <div>
        <p>disabled</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Option can't be selected.</p>
      </div>
      <div>
        <p>header</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p>Title</p>
      </div>
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import checkbox from 'src/Checkbox.vue'
import tabs from 'src/Tabs.vue'
import tabGroup from 'src/TabGroup.vue'
import tab from 'src/Tab.vue'
import vSelect from 'src/Select.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    checkbox,
    tabGroup,
    tabs,
    tab,
    vSelect
  },
  data () {
    return {
      justified: false,
      navStyle: 'tabs'
    }
  },
  watch: {
    navStyle (val) {
      if (val === 'stacked') { this.justified = false }
    }
  }
}
</script>
