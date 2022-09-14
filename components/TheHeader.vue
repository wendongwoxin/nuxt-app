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
              >{{ item.name }}</a
            >
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
</template>

<script lang="ts" setup>
const visible = ref(false);
const toggleNav = () => {
  visible.value = !visible.value;
};
const scrollY = computed(() => globalThis.scrollY);
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
  console.log(item);
};
</script>

<style scoped lang="scss">
div {
  color: blue;
}
</style>
