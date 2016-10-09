<template>
  <doc-section id="tooltip" name="Tooltip">
    <div class="bs-example">
      <tooltip v-for="place in ['top','left','right','bottom']" header content="Lorem ipsum dolor sit amet" :placement="place">
        <button class="btn btn-default">Popover on {{place}}</button>
      </tooltip>
      <hr>
      <h4>Trigger</h4>
      <p>
        <tooltip effect="scale" content="Lorem ipsum dolor sit amet" placement="top" trigger="click">
          <button class="btn btn-default">Click</button>
        </tooltip>
        <tooltip effect="scale" content="Lorem ipsum dolor sit amet" placement="top" trigger="contextmenu">
          <button class="btn btn-default">Contextmenu (right click)</button>
        </tooltip>
      </p>
      <tooltip effect="scale" content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">
        <bs-input type="text" placeholder="Focus"></bs-input>
      </tooltip>
    </div>
    <doc-code language="markup">
      <tooltip effect="scale" placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
        <button class="btn btn-default">tooltip on bottom</button>
      </tooltip>
    </doc-code>
    <doc-table>
      <div>
        <p>trigger</p>
        <p><code>String</code>, one of <code>click</code> <code>focus</code> <code>hover</code> <code>contextmenu</code></p>
        <p><code>click</code></p>
        <p>How the tooltip is triggered.</p>
      </div>
      <div>
        <p>effect</p>
        <p><code>String</code>, one of <code>scale</code> <code>fadein</code></p>
        <p><code>scale</code></p>
        <p></p>
      <div>
        <p>content</p>
        <p><code>String</code></p>
        <p></p>
        <p></p>
      </div>
      <div>
        <p>placement</p>
        <p><code>String</code>, one of <code>top</code>
        <code>left</code>
        <code>right</code>
        <code>bottom</code></p>
        <p></p>
        <p>How to position the tooltip.</p>
      </div>
    </doc-table>
  </div>
</template>

<script>
import docSection from './docSection.vue'
import docTable from './docTable.vue'
import docCode from './docCode.vue'
import bsInput from 'src/Input.vue'
import tooltip from 'src/Tooltip.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    bsInput,
    tooltip
  },
  data () {
    return {
      text: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod'
    }
  }
}
</script>
