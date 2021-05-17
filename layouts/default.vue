<template>
  <div>
    <Nuxt />
    <Navigation />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css';

export default {
  components: {
    Navigation,
    Footer,
  }
}
</script>

<style>
.nuxt-link-exact-active {
  color: #41bb83 !important;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
