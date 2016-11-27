<template>
  <doc-section id="popover" name="Popover">
    <div class="bs-example">
      <popover v-for="place in placements" effect="fade" :content="text" :placement="place">
        <button class="btn btn-default">Popover on {{place}}</button>
      </popover>
      <hr>
      <h4>Title</h4>
      <popover v-for="place in placements" effect="fade" header title="Title" :content="text" :placement="place">
        <button class="btn btn-default">Popover on {{place}}</button>
      </popover>
      <hr>
      <h4>Trigger</h4>
      <p>
        <popover effect="scale" title="Title" :content="content" placement="top" trigger="hover">
          <button class="btn btn-default">Mouseenter</button>
        </popover>
        <popover effect="scale" title="Title" :content="text" placement="top" trigger="contextmenu">
          <button class="btn btn-default">Contextmenu (right click)</button>
        </popover>
      </p>
      <popover effect="scale" title="Title" :content="text" placement="bottom" trigger="focus">
        <bs-input type="text" placeholder="Focus"></bs-input>
      </popover>
    </div>
    <doc-code language="markup">
      &lt;popover effect="fade" placement="bottom" title="Title" content="content">
        &lt;button class="btn btn-default">Popover on bottom&lt;/button>
      &lt;/popover>
    </doc-code>
    <doc-table>
      <div>
        <p>trigger</p>
        <p><code>String</code>, one of <code>click</code> <code>focus</code> <code>hover</code> <code>contextmenu</code></p>
        <p><code>click</code></p>
        <p>How the popover is triggered.</p>
      </div>
      <div>
        <p>effect</p>
        <p><code>String</code>, one of <code>scale</code> <code>fade</code></p>
        <p><code>fade</code></p>
        <p></p>
      </div>
      <div>
        <p>title</p>
        <p><code>String</code></p>
        <p></p>
        <p></p>
      </div>
      <div>
        <p>content</p>
        <p><code>String</code></p>
        <p></p>
        <p></p>
      </div>
      <div>
        <p>header</p>
        <p><code>Boolean</code></p>
        <p><code>true</code></p>
        <p>Whether to show the header.</p>
      </div>
      <div>
        <p>placement</p>
        <p><code>String</code>, one of <code>top</code>
        <code>left</code>
        <code>right</code>
        <code>bottom</code></p>
        <p></p>
        <p>How to position the popover.</p>
      </div>
    </doc-table>
  </doc-section>
</template>

<script>
import docSection from './utils/docSection.vue'
import docTable from './utils/docTable.js'
import docCode from './utils/docCode.js'
import popover from 'src/Popover.vue'
import bsInput from 'src/Input.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    bsInput,
    popover
  },
  data () {
    return {
      placements: ['top', 'left', 'right', 'bottom'],
      text: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod'
    }
  }
}
</script>
