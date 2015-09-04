var Vue = require('vue')
var alert = require('./Alert.vue')
var accordion = require('./Accordion.vue')
var panel = require('./Panel.vue')

var alertBasic = new Vue({
  el: '#app',

  components: {
    'alert': alert,
    'accordion': accordion,
    'panel': panel
  }
})