export default {
  render: function (createElement) {
    // create kebabCase id
    var headingId = getChildrenTextContent(this.$slots.default).toLowerCase().replace(/\W+/g, '-').replace(/(^\-|\-$)/g, '')
    return createElement(this.as, this.$slots.default )
  },
  props: {
    as: {
      type: String,
      required: true
    }
  }
}
