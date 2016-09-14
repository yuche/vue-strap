// coerce convert som types of data into another type
export const coerce = {
	// Convert a string to booleam. Otherwise, return the value without modification, so if is not boolean, Vue throw a warning.
	boolean: (val) => (typeof val !== 'string' ? val : val === 'true' ? true : val === 'false' ? false : val === 'null' ? false : val === 'undefined' ? false : val),
	// Attempt to convert a string value to a Number. Otherwise, return 0.
	number: (val, alt = null) => (typeof val === 'number' ? val : val === undefined || val === null || isNaN(Number(val)) ? alt : Number(val))
}

export function getJSON (url) {
  let request = new window.XMLHttpRequest()
  let data = {}
  // p (-simulated- promise)
  let p = {
    then (fn1, fn2) { return p.done(fn1).fail(fn2) },
    catch (fn) { return p.fail(fn) },
    always (fn) { return p.done(fn).fail(fn) }
  }
  for (let name of ['done', 'fail']) {
    data[name] = []
    p[name] = (fn) => {
      if (fn instanceof Function) data[name].push(fn)
      return p
    }
  }
  p.done(JSON.parse)
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      let e = {status: request.status}
      if (request.status === 200) {
        try {
          let value, response = request.responseText
          for (let done of data.done) {
            if ((value = done(response)) !== undefined) { response = value }
          }
        } catch (e) {
          for (let fail of data.fail) fail(e)
        }
      } else {
        for (let fail of data.fail) fail(e)
      }
    }
  }
  request.open('GET', url)
  request.setRequestHeader('Accept', 'application/json')
  request.send()
  return p
}

export function getScrollBarWidth () {
  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
    return 0
  }
  let inner = document.createElement('p')
  inner.style.width = '100%'
  inner.style.height = '200px'

  let outer = document.createElement('div')
  outer.style.position = 'absolute'
  outer.style.top = '0px'
  outer.style.left = '0px'
  outer.style.visibility = 'hidden'
  outer.style.width = '200px'
  outer.style.height = '150px'
  outer.style.overflow = 'hidden'
  outer.appendChild(inner)

  document.body.appendChild(outer)
  let w1 = inner.offsetWidth
  outer.style.overflow = 'scroll'
  let w2 = inner.offsetWidth
  if (w1 === w2) w2 = outer.clientWidth

  document.body.removeChild(outer)

  return (w1 - w2)
}

// return all the translations or the default language (english)
export function translations (lang) {
  lang = lang || 'en'
  let text = {
    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    limit: 'Limit reached ({{limit}} items max).',
    loading: 'Loading...',
    minLength: 'Min. Length',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    notSelected: 'Nothing Selected',
    required: 'Required',
    search: 'Search'
  }
  return window.VueStrapLang ? window.VueStrapLang(lang) : text
}