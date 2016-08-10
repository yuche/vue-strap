export default (self,callback) => {
  // load all the sections in the page
  window.addEventListener('load', () => {
    if (self.$root.sections) {
      self.sections = self.$root.sections
    } else {
      document.querySelectorAll('.bs-docs-section').forEach((el) => {
        self.sections.push({
          id: el.id,
          name: el.querySelector('.anchor').innerText,
          top: el.offsetTop
        })
      })
      self.$root.sections = self.sections
    }
    if (callback) callback()
  })
}