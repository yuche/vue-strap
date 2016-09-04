// return all the translations
let text = {
  daysOfWeek: {
    en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    es: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    'pt-BR': ['Do', 'Se', 'Te', 'Qa', 'Qi', 'Sx', 'Sa'],
    fr: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa']
  },
  limit: {
    en: 'Limit reached ({{limit}} items max).',
    es: 'Limite alcanzado (máximo {{limit}} items).',
    'pt-BR': 'Limite atingido (máximo {{limit}} items).',
    fr: 'Limite atteinte ({{limit}} éléments max).'
  },
  loading: {
    en: 'Loading...',
    es: 'Cargando...',
    'pt-BR': 'Cargando...',
    fr: 'Chargement en cours...'
  },
  minLength: {
    en: 'Min. Length',
    es: 'Tamaño Mínimo',
    'pt-BR': 'Tamanho Mínimo',
    fr: 'Longueur Minimum'
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
    'pt-BR': [
      'Janeiro', 'Fevereiro', 'Março',
      'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro',
      'Outubro', 'Novembro', 'Dezembro'
    ],
    fr: [
      'Janvier', 'Février', 'Mars',
      'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre',
      'Octobre', 'Novembre', 'Décembre'
    ]
  },
  notSelected: {
    en: 'Nothing Selected',
    es: 'Nada seleccionado',
    'pt-BR': 'Nada selecionado',
    fr: 'Aucune sélection'
  },
  required: {
    en: 'Required',
    es: 'Requerido',
    'pt-BR': 'Requerido',
    fr: 'Requis'
  },
  search: {
    en: 'Search',
    es: 'Buscar',
    'pt-BR': 'Buscar',
    fr: 'Recherche'
  }
}
export default (lang = 'en') => {
  let tr = {}
  for (let i in text) {
    tr[i] = text[i][lang] || text[i]['en']
  }
  return tr
}
