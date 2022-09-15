import { defineStore } from "pinia";

export const useLocaleStore = defineStore("locale", {
  state: () => {
    return {
      locale: "en",
    };
  },
  actions: {
    changeLocale(str: string) {
      this.locale = str;
    },
  },
});
