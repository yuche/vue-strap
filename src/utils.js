const Utils = {
  detectClickOutside(targetDom, callback) {
    document.addEventListener('click', e => {
      let level = 0
      for (let element = e.target; element; element = element.parentNode) {
        if (element === targetDom) {
          // console.log('insie')
          return
        }
        level++
      }
      callback()
    })
  }
}

export default Utils