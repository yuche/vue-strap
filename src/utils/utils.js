// coerce convert som types of data into another type
export const coerce = {
	// Convert a string to booleam. Otherwise, return the value without modification, so if is not boolean, Vue throw a warning.
	boolean: (val) => (typeof val !== 'string' ? val : val === 'true' ? true : val === 'false' ? false : val === 'null' ? false : val === 'undefined' ? false : val),
	// Attempt to convert a string value to a Number. Otherwise, return 0.
	number: (val, alt = null) => (typeof val === 'number' ? val : val === undefined || val === null || isNaN(Number(val)) ? alt : Number(val))
}

// callAjax (only get)
export function callAjax (url, callback) {
  let request = new window.XMLHttpRequest()
  let data = {}
  // p (-simulated- promise)
  let p = {
    then (fn1, fn2, fn3) {
      return p.done(fn1).fail(fn2).always(fn3)
    }
  }
  for (let name of ['done', 'fail', 'always']) {
    data[name] = []
    p[name] = (fn) => {
      if (fn instanceof Function) data[name].push(fn)
      return p
    }
  }
  p.done(callback)
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        try {
          let response = JSON.parse(request.responseText)
          for (let done of data.done) done(response)
        } catch (e) {
          for (let fail of data.fail) { fail(e) }
        }
      } else {
        for (let fail of data.fail) {
          fail({status: request.status})
        }
      }
      for (let always of data.always) {
        always({status: request.status})
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