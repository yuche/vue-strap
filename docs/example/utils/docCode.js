export default {
  props: {
    language: {type: String, default: 'html'}
  },
  render: function (createElement) {
    var content = this.$slots.default && this.$slots.default[0].text
    if (~['html','markup'].indexOf(this.language)) content = content.replace(/(\w+)=""/g, '$1')
    let matches = content.match(/(\n|\r)[ ]*\S/g)
    if (matches) {
      let values = matches.map(el => (el.length - 2))
      let min = Math.min.apply(Math, values)
      content = content.replace(/(\n|\r)([^\n\S]*)/g, (str, nr, s) => {
        return nr + s.substr(min)
      })
    }
    return createElement('pre', [
      createElement('code', {attrs: {class: this.language ? 'language-' + this.language : null}}, !this.language ? content : [
        createElement('script',
          {attrs: {type: this.language === 'markup' ? 'language-mark-up' : this.language ? 'language-' + this.language : null}},
          content.replace(/^([ \t]*[\r\n]+)+|([\r\n]+[ \t]*)+$/g, '')
        )
      ])
    ])
  }
}
