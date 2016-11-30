<template>
  <div>
    <link v-if="local" rel="stylesheet" type="text/css" href="node_modules/bootstrap/dist/css/bootstrap.css">
    <link v-else href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha256-7s5uDGW3AHqw6xtJmNNtr+OBRJUlgkNJEo78P4b0yRw= sha512-nNo+yCHEyn0smMxSswnf/OnX6/KwJuZTlNZBjauKhTK0c+zT+q5JOCx0UFhXQ6rJR9jg6Es8gPuD2uZcYDLqSw==" crossorigin="anonymous">
    <div id="wrapper">
      <div class="bs-docs-header">
        <div class="container">
          <h1>VueStrap</h1>
          <p>Bootstrap components built with <a target="_blank" href="http://vuejs.org/">Vue.js</a>.</p>
          <p>No jQuery, bootstrap.js, or any 3rd party plugins required.</p>
          <br>
          <p><a class="btn btn-outline-inverse btn-lg" href="https://github.com/wffranco/vue-strap">Code on GitHub</a></p>
        </div>
      </div>
      <div class="container bs-docs-container">
        <div class="row">
          <div class="col-md-9">
            <getting-started></getting-started>
            <accordion-docs></accordion-docs>
            <affix-docs></affix-docs>
            <alert-docs></alert-docs>
            <aside-docs></aside-docs>
            <button-group-docs></button-group-docs>
            <carousel-docs></carousel-docs>
            <checkbox-docs></checkbox-docs>
            <datepicker-docs></datepicker-docs>
            <dropdown-docs></dropdown-docs>
            <form-validator-docs></form-validator-docs>
            <input-docs></input-docs>
            <modal-docs></modal-docs>
            <navbar-docs></navbar-docs>
            <popover-docs></popover-docs>
            <progressbar-docs></progressbar-docs>
            <radio-docs></radio-docs>
            <select-docs></select-docs>
            <spinner-docs></spinner-docs>
            <tabs-docs></tabs-docs>
            <toggle-button-docs></toggle-button-docs>
            <tooltip-docs></tooltip-docs>
            <typeahead-docs></typeahead-docs>
            <!--<form-group-docs></form-group-docs>-->
          </div>
          <div class="col-md-3">
            <affix-sidebar></affix-sidebar>
          </div>
        </div>
      </div>
    </div>
    <footer class="bs-docs-footer">
      <div class="container">
        <p>Designed and built by <a href="https://github.com/yuche/">yuche</a>.</p>
        <p>Vue 2 version built by <a href="https://github.com/wffranco/">wffranco</a>.</p>
        <p>
          Using <a href="http://twitter.github.com/bootstrap" target="_blank">Twitter Bootstrap</a>
          and the <a href="css/docs.css" target="_blank">Bootstrap's docs styles</a> designed and built by <a href="http://twitter.com/mdo" target="_blank">@mdo</a>
          and <a href="http://twitter.com/fat" target="_blank">@fat</a>.
        </p>
        <p>
          Code licensed under <a href="//github.com/mgcrea/angular-strap/blob/master/LICENSE.md" target="_blank">The MIT License</a>,
          documentation under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import accordionDocs from './example/accordionDocs.vue'
import affixDocs from './example/affixDocs.vue'
import affixSidebar from './affixSidebar.vue'
import alertDocs from './example/alertDocs.vue'
import asideDocs from './example/asideDocs.vue'
import buttonGroupDocs  from './example/buttonGroupDocs.vue'
import carouselDocs from './example/carouselDocs.vue'
import checkboxDocs from './example/checkboxDocs.vue'
import datepickerDocs from './example/datepickerDocs.vue'
import dropdownDocs from './example/dropdownDocs.vue'
import formGroupDocs from './example/formGroupDocs.vue'
import formValidatorDocs from './example/formValidatorDocs.vue'
import gettingStarted from './example/gettingStarted.vue'
import inputDocs from './example/inputDocs.vue'
import modalDocs from './example/modalDocs.vue'
import navbarDocs from './example/navbarDocs.vue'
import popoverDocs from './example/popoverDocs.vue'
import progressbarDocs from './example/progressbarDocs.vue'
import radioDocs from './example/radioDocs.vue'
import selectDocs from './example/selectDocs.vue'
import spinnerDocs from './example/spinnerDocs.vue'
import tabsDocs from './example/tabsDocs.vue'
import toggleButtonDocs from './example/toggleButtonDocs.vue'
import tooltipDocs from './example/tooltipDocs.vue'
import typeaheadDocs from './example/typeaheadDocs.vue'

export default {
  components: {
    accordionDocs,
    affixDocs,
    affixSidebar,
    alertDocs,
    asideDocs,
    buttonGroupDocs,
    carouselDocs,
    checkboxDocs,
    datepickerDocs,
    dropdownDocs,
    formGroupDocs,
    formValidatorDocs,
    gettingStarted,
    inputDocs,
    modalDocs,
    navbarDocs,
    popoverDocs,
    progressbarDocs,
    radioDocs,
    selectDocs,
    spinnerDocs,
    tabsDocs,
    toggleButtonDocs,
    tooltipDocs,
    typeaheadDocs
  },
  computed: {
    local () { return location.hostname === 'localhost' }
  }
}
</script>