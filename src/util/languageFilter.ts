import { set } from 'lodash-es';

// 语言模板
export function getLanguages(langs: any, prefix = 'lang') {
  let obj = {}
  Object.keys(langs).forEach((key) => {
    const mod = langs[key].default;

    let k = key.replace(`./${prefix}/`, '').replace(/^\.\//, '')
    const lastIndex = k.lastIndexOf('.')
    k = k.substring(0, lastIndex)
    const keyList = k.split('/')
    const lang = keyList.shift()
    const objKey = keyList.join('.')
    if (lang) {
      set(obj, lang, obj[lang] || {})
      set(obj[lang], objKey, mod)
    }

  })
  return obj
}


export function getLanguageType() {
  const language = localStorage.getItem('locale') || window.navigator.language.toLowerCase() || 'en'
  localStorage.setItem('locale',language)
  return language
}
