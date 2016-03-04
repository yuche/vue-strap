<template>
  <header class="navbar navbar-static-top bs-docs-nav" id="top" role="banner">
    <navbar>
      <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="../" class="navbar-brand">VueStrap</a>
      <nav id="bs-navbar" class="collapse navbar-collapse" slot="dropdown-menu">
        <ul class="nav navbar-nav">
          <li>
            <a href="#accordion" style="color:#19986B">Components</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="https://github.com/yuche/vue-strap">
            <span class="icon-github-circled"></span>
            GitHub
          </a></li>
        </ul>
      </nav>
    </navbar>
  </header>
</template>

<script>
  import navbar from 'src/Navbar.vue'
  export default {
    components: {
      navbar
    }
  }
</script>
