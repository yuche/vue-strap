export default {
  render: function (createElement) {
    var defaultHeaders = {
      events: ['Name', 'Arguments', 'Description'],
      options: ['Name', 'Type', 'Default', 'Description']
    }
    var headers = this.headers || defaultHeaders[this.type.toLowerCase()] || []
    var len = headers.length
    headers = [createElement('tr',
      headers.map(name => createElement('th', name))
    )]
    var options = this.$slots.default.filter(el => el.tag)
    options.forEach(el => {
      el.tag = 'tr'
      el.children = el.children.filter(el => el.tag).filter((el, i) => i < len)
      el.children.forEach(el => { el.tag = 'td' })
    })
    return createElement('div', [
      createElement('h2', this.name + ' ' + this.type),
      createElement('div', {attrs: {class: 'table-responsive'}}, [
        createElement('table', {attrs: {class: 'table table-bordered'}}, [
          createElement('thead', headers),
          createElement('tbody', options)
        ])
      ])
    ])
  },
  props: {
    name: {type: String, default: ''},
    type: {type: String, default: 'Options'},
    headers: {type: Array, default: null}
  }
}
