<template>
  <div
    id="hero"
    class="hero route bg-image"
    style="background-image: url(assets/img/bg.jpg)"
  >
    <div class="overlay-itro"></div>
    <div class="hero-content display-table">
      <div class="table-cell">
        <div class="container">
          <h1 class="hero-title mb-4">{{ $t("hello", { name: "vue-i18n" }) }}</h1>
          <h1 class="hero-title mb-4">I am Jinwen Wu,</h1>
          <p class="hero-subtitle">
            <span class="typed"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import Typed from "typed.js";
onMounted(() => {
  var options = {
    strings: ["Front-end Developer", "Game Lover", "Code Lover"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 500,
  };
  var typed = new Typed(".typed", options);
});
</script>
