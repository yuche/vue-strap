var Vue = require('vue')
var alert = require('./Alert.vue')

var alertBasic = new Vue({
  el: '#app',

  components: {
    'alert': alert
  }
})