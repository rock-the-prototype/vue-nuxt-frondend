<template>
  <nav :class="{ mobile: isMobile, 'text-danger': hasError }">
    <ul id="menu" :class="{ active: isMobile, 'text-danger': hasError }">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/test">Test</NuxtLink></li>
      <li><NuxtLink to="/map">Map</NuxtLink></li>
      <li><NuxtLink to="/profile">Profile</NuxtLink></li>
    </ul>
    <div class="mobile-bar" @click="toggleMobileMenu()">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
  </nav>
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
  methods: {
    toggleMobileMenu() {
      if (!this.isMobile) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
};
</script>