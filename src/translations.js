// return all the translations
let text = {
  daysOfWeek: {
    en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    es: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    fr: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa']
  },
  limit: {
    en: 'Limit reached ({{limit}} items max).',
    es: 'Limite alcanzado (máximo {{limit}} items).',
    fr: 'Limite atteinte ({{limit}} éléments maximum)'
  },
  loading: {
    en: 'Loading...',
    es: 'Cargando...',
    fr: 'Chargement...'
  },
  minLength: {
    en: 'Min. Length',
    es: 'Tamaño Mínimo',
    fr: 'Taille Minimum'
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
    ],
    fr: 'Janvier', 'Février', 'Mars',
      'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre',
      'Octobre', 'Novembre', 'Décembre'
  },
  notSelected: {
    en: 'Nothing Selected',
    es: 'Nada seleccionado',
    fr: 'Rien sélectionné'
  },
  required: {
    en: 'Required',
    es: 'Requerido',
    fr: 'Requis'
  },
  search: {
    en: 'Search',
    es: 'Buscar',
    fr: 'Rechercher'
  }
}
export default (lang = 'en') => {
  let tr = {}
  for (let i in text) {
    tr[i] = text[i][lang] || text[i]['en']
  }
  return tr
}
