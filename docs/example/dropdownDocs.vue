<template>
  <div class="bs-docs-section" id="dropdown">
    <h1 class="page-header"><a href="#dropdown" class="anchor">Dropdown</a></h1>
    <div class="bs-example">
      <dropdown>
        <button type="button" class="btn btn-default" data-toggle="dropdown">
          Action
          <span class="caret"></span>
        </button>
        <ul slot="dropdown-menu" class="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </dropdown>
      <dropdown>
        <button type="button" class="btn btn-success" data-toggle="dropdown">
          Action <span class="caret"></span>
        </button>
        <ul slot="dropdown-menu" class="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </dropdown>
      <dropdown>
        <button type="button" class="btn btn-primary" data-toggle="dropdown">
          Action <span class="caret"></span>
        </button>
        <ul slot="dropdown-menu" class="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </dropdown>
      <div class="btn-group btn-group-justified" role="group">
        <a href="#" class="btn btn-default" role="button">Left</a>
        <a href="#" class="btn btn-default" role="button">Middle</a>
        <dropdown>
          <a href="#" class="btn btn-default" data-toggle="dropdown">
            Dropdown <span class="caret"></span>
          </a>
          <ul slot="dropdown-menu" class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </dropdown>
      </div>
      <dropdown :ref.sync='refDropdown'>
        <button type="button" class="btn btn-default" data-toggle="dropdown">
          I can be open/close by the button beside me
          <span class="caret"></span>
        </button>
        <ul slot="dropdown-menu" class="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </dropdown>
      <button class='btn btn-primary' @click.stop='toggleDropdown()'>open/close dropdown</button>
      <div>
        <label>Before Toggle Event:</label>
        <span>{{ txtBeforeToggle }}</span>
      </div>
      <div>
        <label>After Toggle Event:</label>
        <span>{{ txtAfterToggle }}</span>
      </div>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<dropdown>
  <button type="button" class="btn btn-default" data-toggle="dropdown">
    Action
    <span class="caret"></span>
  </button>
  <ul slot="dropdown-menu" class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</dropdown>
</script></code></pre>
    <h2>Usage</h2>
    <p>
      Just use as <a target="_blank" href="http://getbootstrap.com/javascript/#dropdowns">original Bootstrap way</a>.
      Working on progress, considered refactoring with directive. Currently the other components(Select, etc..) not depend on this component.
    </p>
  </div>
</template>

<script>
  import dropdown from 'src/Dropdown.vue'
  export default {
    components: {
      dropdown
    },
    data() {
      return {
        txtBeforeToggle: '',
        txtAfterToggle: '',
        refDropdown: {
          // here for user to define events
          beforeToggle: () => {
            console.log('dropdown - before')
            this.txtBeforeToggle = 'Before Evnet Fired!'
          },
          afterToggle: () => {
            console.log('dropdown - after')
            this.txtAfterToggle = 'After Evnet Fired!'
          }
        }
      }
    },
    methods: {
      toggleDropdown() {
        // use .stop for the click
        this.refDropdown.toggle()
      }
    }
  }
</script>
