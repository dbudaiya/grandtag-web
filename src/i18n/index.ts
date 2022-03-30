import { createI18n } from "vue-i18n";

// 语言模板
const LangMoudle = import.meta.globEager('./locales/*.ts')

import { getLanguages, getLanguageType } from '../util/languageFilter'

const { locales: messages } = getLanguages(LangMoudle)
console.log(messages)
const i18n = createI18n({
  legacy: false,
  locale: getLanguageType(),
  globalInjection: true,
  messages
})

export default i18n 
