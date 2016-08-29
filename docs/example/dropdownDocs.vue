<template>
  <doc-section id="dropdown" name="Dropdown">
    <div class="bs-example">
      <dropdown>
        <button slot="button" type="button" class="btn btn-default dropdown-toggle">
          Action
          <span class="caret"></span>
        </button>
        <ul slot="dropdown-menu" class="dropdown-menu">
          <li><a href="#dropdown">Action</a></li>
          <li><a href="#dropdown">Another action</a></li>
          <li><a href="#dropdown">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#dropdown">Separated link</a></li>
        </ul>
      </dropdown>
      <dropdown text="Action" type="primary">
        <li><a href="#dropdown">Action</a></li>
        <li><a href="#dropdown">Another action</a></li>
        <li><a href="#dropdown">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#dropdown">Separated link</a></li>
      </dropdown>
      <dropdown>
        <button slot="button" type="button" class="btn btn-success dropdown-toggle">
          Action <span class="caret"></span>
        </button>
        <ul slot="dropdown-menu" class="dropdown-menu">
          <li><a href="#dropdown">Action</a></li>
          <li><a href="#dropdown">Another action</a></li>
          <li><a href="#dropdown">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#dropdown">Separated link</a></li>
        </ul>
      </dropdown>
      <dropdown text="Disabled" type="warning" disabled>
        <li><a href="#dropdown">Action</a></li>
      </dropdown>
      <div class="btn-group btn-group-justified" role="group">
        <a href="#dropdown" class="btn btn-default" role="button">Left</a>
        <dropdown>
          <a slot="button" href="#dropdown" class="btn btn-default">
            Dropdown <span class="caret"></span>
          </a>
          <ul slot="dropdown-menu" class="dropdown-menu">
            <li><a href="#dropdown">Action</a></li>
            <li><a href="#dropdown">Another action</a></li>
            <li><a href="#dropdown">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#dropdown">Separated link</a></li>
          </ul>
        </dropdown>
        <a href="#dropdown" class="btn btn-default" role="button">Right</a>
      </div>
    </div>
    <doc-code language="markup">
      Boostrap style:
      <dropdown>
        <button type="button" class="btn btn-default">
          Action
          <span class="caret"></span>
        </button>
        <ul slot="dropdown-menu" class="dropdown-menu">
          <li><a href="#dropdown">Action</a></li>
          <li><a href="#dropdown">Another action</a></li>
          <li><a href="#dropdown">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#dropdown">Separated link</a></li>
        </ul>
      </dropdown>

      Component style:
      <dropdown text="Action" type="primary">
        <li><a href="#dropdown">Action</a></li>
        <li><a href="#dropdown">Another action</a></li>
        <li><a href="#dropdown">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#dropdown">Separated link</a></li>
      </dropdown>
      <dropdown text="Disabled" type="warning" disabled>
        <li><a href="#dropdown">Action</a></li>
      </dropdown>
    </doc-code>
    <doc-options>
      <div>
        <p>show</p>
        <p><code>Boolean</code></p>
        <p></p>
        <p>Whether show the component.</p>
      </div>
      <div>
        <p>class</p>
        <p><code>String</code></p>
        <p><code>null</code></p>
        <p>classes to change the style.</p>
      </div>
      <div>
        <p>disabled</p>
        <p><code>Boolean</code></p>
        <p><code>false</code></p>
        <p></p>
      </div>
      <div>
        <p>text</p>
        <p><code>String</code></p>
        <p></p>
        <p>Dropdown button text.</p>
      </div>
      <div>
        <p>type</p>
        <p><code>String</code>, one of <code>default</code>
        <code>primary</code>
        <code>danger</code>
        <code>info</code>
        <code>warning</code>
        <code>success</code></p>
        <p><code>default</code></p>
        <p></p>
      </div>
    </doc-options>
    <h2>Usage</h2>
    <p>Just like the examples. Can use it as the <a target="_blank" href="http://getbootstrap.com/javascript/#dropdowns">original Bootstrap way</a>.</p>
  </doc-section>
</template>

<script>
import docSection from './docSection.vue'
import docOptions from './docOptions.vue'
import docCode from './docCode.vue'
import dropdown from 'src/Dropdown.vue'

export default {
  components: {
    docSection,
    docOptions,
    docCode,
    dropdown
  }
}
</script>
