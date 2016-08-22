  daysOfWeek: {
    en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    es: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    'zh-CN':['日','一', '二', '三', '四', '五', '六']
  },
  limit: {
    en: 'Limit reached ({{limit}} items max).',
    es: 'Limite alcanzado (máximo {{limit}} items).',
    'zh-CN': '达到最大限制（{{limit}}）'
  },
  loading: {
    en: 'Loading...',
    es: 'Cargando...',
    'zh-CN': '加载中...'
  },
  minLength: {
    en: 'Min. Length',
    es: 'Tamaño Mínimo',
    'zh-CN': '最小长度'
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
    'zh-CN':[
      '一月','二月', '三月',
      '四月', '五月', '六月',
      '七月','八月', '九月',
      '十月', '十一月', '十二月']
  },
  notSelected: {
    en: 'Nothing Selected',
    es: 'Nada seleccionado',
    'zh-CN': '未选中任何选项',
  },
  required: {
    en: 'Required',
    es: 'Requerido',
    'zh-CN': '必填',
  },
  search: {
    en: 'Search',
    es: 'Buscar',
    'zh-CN': '查找',
  }
}
export default (lang = 'en') => {
  let tr = {}
  for (let i in text) {
    tr[i] = text[i][lang] || text[i]['en']
  }
  return tr
}
