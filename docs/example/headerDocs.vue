<template>
  <navbar>
    <a href="/" title="Home" slot="brand" class="navbar-brand">VueStrap</a>
    <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Component List <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li><a href="#accordion">Accordion</a></li>
        <li><a href="#affix">Affix</a></li>
        <li><a href="#alert">Alert</a></li>
        <li><a href="#aside">Aside</a></li>
        <li><a href="#buttons">Buttons</a></li>
      </ul>
    </li>
  </navbar>
</template>

<script>
  import navbar from 'src/Navbar.vue'
  export default {
    components: {
      navbar
    }
  }
</script>
