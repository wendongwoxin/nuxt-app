import { createI18n } from "vue-i18n";
import { useLocaleStore } from "~/store/locale";
import cn from "../locales/cn.json";
import en from "../locales/en.json";
console.log(en)
export default defineNuxtPlugin(({ vueApp }) => {
  const useLocale = useLocaleStore();
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,

    locale: useLocale.locale,
    messages: {
      "en-US": {},
      en,
      cn,
    },
  });
  vueApp.use(i18n);
});
