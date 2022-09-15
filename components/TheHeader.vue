<template>
  <header
    id="header"
    class="fixed-top"
    :class="scrollY > 100 ? 'header-scrolled' : ''"
  >
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo"><a href="#">Wendongwoxin</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar" :class="visible ? 'navbar-mobile' : ''">
        <ul>
          <li v-for="item in MenuList" :key="item.name">
            <a
              class="nav-link scrollto"
              :class="curHash === item.id ? 'active' : ''"
              @click="navTo(item)"
              >{{ $t(item.name) }}</a
            >
          </li>
          <li>
            <button
              type="button"
              class="button"
              @click="changeLocale(locale, $i18n)"
            >
              {{ locale }}
            </button>
          </li>
        </ul>
        <i
          class="bi mobile-nav-toggle"
          :class="visible ? 'bi-x' : 'bi-list'"
          @click="toggleNav"
        ></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  <a
    href="#"
    :class="scrollY > 100 ? 'active' : ''"
    class="back-to-top d-flex align-items-center justify-content-center"
    ><i class="bi bi-arrow-up-short"></i
  ></a>
</template>

<script lang="ts" setup>
import { useLocaleStore } from "../store/locale";
const useLocale = useLocaleStore();
const locale = ref(useLocale.locale);
const visible = ref(false);
const toggleNav = () => {
  visible.value = !visible.value;
};
const scrollY = ref(globalThis.scrollY);
const curHash = ref("hero");
const MenuList = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Work", id: "work" },
  { name: "Blog", id: "blog" },
  { name: "Contact", id: "contact" },
];

const navTo = (item) => {
  curHash.value = item.id;
  const offset = document.getElementById("header")?.offsetHeight - 16;
  let elementPos = document.getElementById(item.id).offsetTop;
  globalThis.scrollTo({
    top: elementPos - offset,
    behavior: "smooth",
  });
};
onMounted(() => {
  globalThis.addEventListener("scroll", getScroll, true);
});
const getScroll = () => {
  scrollY.value = globalThis.scrollY;
  let position = scrollY.value + 200;
  MenuList.map((item) => {
    let section = document.getElementById(item.id);
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      curHash.value = item.id;
    }
  });
};

onUnmounted(() => {
  globalThis.removeEventListener("scroll", getScroll, true);
});

const changeLocale = (lang: string, i18n) => {
  if (lang === "en") {
    useLocale.changeLocale("cn");
  } else {
    useLocale.changeLocale("en");
  }
  locale.value = useLocale.locale;
  i18n.locale = useLocale.locale;
};
</script>

<style scoped lang="scss">
div {
  color: blue;
}
</style>
