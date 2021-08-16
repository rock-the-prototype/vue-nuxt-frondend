<template>
  <nav :class="{ mobile: isMobile, 'text-danger': hasError }">
    <ul id="menu" :class="{ active: isMobile, 'text-danger': hasError }">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/test">Test</NuxtLink></li>
      <li><NuxtLink to="/map">Map</NuxtLink></li>
      <li><NuxtLink to="/profile">Profile</NuxtLink></li>
    </ul>
    <div
      class="mobile-bar"
      @click="toggleMobileMenu()"
      :class="{ active: isMobile, 'text-danger': hasError }"
    >
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
  </nav>

  <!--
  <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
    <b-navbar-brand to="/" class="d-flex align-items-center">
      <h1 class="h2">NUXT.JS – Let's rock the prototype!</h1>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/"> Home </b-nav-item>
        <b-nav-item to="/test"> Test </b-nav-item>
        <b-nav-item to="/map"> Map </b-nav-item>
        <b-nav-item to="/profile"> Profile </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>-->
</template>

<script>
export default {
  name: "Navigation.vue",
  data() {
    return {
      isMobile: false,
      hasError: false,
    };
  },
  created() {
    this.$nuxt.$on("changeClass", () => this.changeClass());
  },
  methods: {
    toggleMobileMenu() {
      //document.querySelector("#menu").classList.toggle("active");
      //document.querySelector(".mobile-bar").classList.toggle("active");
      if (!this.isMobile) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
};
</script>