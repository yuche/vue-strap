// return all the translations
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
export default (lang = 'en') => {
  return window.VueStrapLang ? window.VueStrapLang(lang) : text
}
