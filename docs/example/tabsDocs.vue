<template>
  <doc-section id="tabs" name="Tabs">
    <div class="bs-example">
      <tabs>
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
      <tabs>
        <tab header="one">
          ...
        </tab>
        <tab header="two" disabled>
          ...
        </tab>
        <tab-group header="group1">
          <tab header="three">
            ...
          </tab>
          <tab header="four" disabled>
            ...
          </tab>
        </tab-group>
        <tab-group header="group2">
          <tab header="five">
            ...
          </tab>
        </tab-group>
      </tabs>
    </doc-code>
    <doc-code language="javascript">
      components: {
        tabs: VueStrap.tabset,
        tabGroup: VueStrap.tabGroup,
        tab: VueStrap.tab
      }
    </doc-code>
    <doc-table name="Tabset (container)">
      <div>
        <p>active</p>
        <p><code>Number</code></p>
        <p><code>0</code></p>
        <p>Active tab index (0 based)</p>
      </div>
    </doc-table>
    <doc-table name="TabGroup (dropdown)">
      <div>
        <p>disabled</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p>Whether tabgroup is clickable.</p>
      </div>
      <div>
        <p>header</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p>Group Title</p>
      </div>
    </doc-table>
    <doc-table name="Tab (element)">
      <div>
        <p>header</p>
        <p><code>String</code></p>
        <p></p>
        <p>Tab Title</p>
      </div>
      <div>
        <p>disabled</p>
        <p><code>Boolean</code></p>
        <p>false</p>
        <p>Whether tab is clickable and can be activated.</p>
      </div>
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './docSection.vue'
import docTable from './docTable.vue'
import docCode from './docCode.vue'
import tabs from 'src/Tabset.vue'
import tabGroup from 'src/TabGroup.vue'
import tab from 'src/Tab.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    tabGroup,
    tabs,
    tab
  }
}
</script>
