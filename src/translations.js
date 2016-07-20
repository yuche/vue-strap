// return all the translations
let text = {
  limit: {
    en: 'Limit reached ({{limit}} items max).',
    es: 'Limite alcanzado (máximo {{limit}} items).',
  },
  loading: {
    en: 'Loading...',
    es: 'Cargando...'
  },
  search: {
    en: 'Search',
    es: 'Buscar'
  },
  notSelected: {
    en: 'Nothing Selected',
    es: 'Nada seleccionado'
  },
  daysOfWeek: {
    en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    es: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa']
  },
  months: {
    en: [
      'January', 'February', 'March',
      'April', 'May', 'June',
      'July', 'August', 'September',
      'October', 'November', 'December'
    ],
    es: [
      'Enero', 'Febrero', 'Marzo',
      'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre',
      'Octubre', 'Noviembre', 'Diciembre'
    ]
  }
}
export default (lang = 'en') => {
  let tr = {}
  for (let i in text) {
    tr[i] = text[i][lang] || text[i]['en']
  }
  return tr
}
