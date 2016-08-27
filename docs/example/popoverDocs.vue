<template>
  <doc-section id="popover" name="Popover">
    <div class="bs-example">
      <popover effect="fade" content="Lorem ipsum dolor sit amet" placement="top">
        <button class="btn btn-default ">Popover on top</button>
      </popover>
      <popover effect="fade" content="Lorem ipsum dolor sit amet" placement="left">
        <button class="btn btn-default ">Popover on left</button>
      </popover>
      <popover effect="fade" content="Lorem ipsum dolor sit amet" placement="right">
        <button class="btn btn-default ">Popover on right</button>
      </popover>
      <popover effect="fade" placement="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
        <button class="btn btn-default ">Popover on bottom</button>
      </popover>
      <hr>
      <h4>Title</h4>
      <popover effect="fade" header title="Title" content="Lorem ipsum dolor sit amet" placement="top">
        <button class="btn btn-default ">Popover on top</button>
      </popover>
      <popover effect="fade" header title="Title" content="Lorem ipsum dolor sit amet" placement="left">
        <button class="btn btn-default ">Popover on left</button>
      </popover>
      <popover effect="fade" header title="Title" content="Lorem ipsum dolor sit amet" placement="right">
        <button class="btn btn-default ">Popover on right</button>
      </popover>
      <popover effect="fade" placement="bottom" header title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
        <button class="btn btn-default ">Popover on bottom</button>
      </popover>
      <hr>
      <h4>Trigger</h4>
      <p>
        <popover effect="scale" title="Title" content="Lorem ipsum dolor sit amet" placement="top" trigger="hover">
          <button class="btn btn-default ">Mouseenter</button>
        </popover>
      </p>
      <p>
      <popover effect="scale" title="Title" content="Lorem ipsum dolor sit amet" placement="bottom" trigger="focus">
        <input type="text" class="form-control" placeholder="Focus">
      </popover>
      </p>
      <p>
      <popover effect="scale" title="Title" content="Lorem ipsum dolor sit amet" placement="bottom" trigger="contextmenu">
        <input type="text" class="form-control" placeholder="ContextMenu (right-click)">
      </popover>
      </p>
      <p>
        <popover effect="scale" title="Title" content="Lorem ipsum dolor sit amet" placement="top" trigger="none" v-ref:notrigger>
          <input type="text" class="form-control" placeholder="Triggered by an external event (in this case, the button)">
        </popover>
        <button class="btn btn-default" v-on:click="doPopoverToggle">Trigger the popover</button>
      </p>
    </div>
    <doc-code language="markup">
      <popover effect="fade" placement="bottom" title="Title"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
        <button class="btn btn-default">Popover on bottom</button>
      </popover>
    </doc-code>
    <doc-options>
      <div>
        <p>trigger</p>
        <p><code>String</code>, one of <code>click</code>
        <code>focus</code>
        <code>hover</code>
        <code>contextmenu</code>
        <code>none</code></p>
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
    </doc-options>
  </doc-section>
</template>

<script>
import docSection from './docSection.vue'
import docOptions from './docOptions.vue'
import docCode from './docCode.vue'
import popover from 'src/Popover.vue'

export default {
  components: {
    docSection,
    docOptions,
    docCode,
    popover
  },
  data () {
    return {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet'
    }
  },
  methods: {
    doPopoverToggle: function (event) {
      this.$refs.notrigger.toggle()
    }
  }
}
</script>
