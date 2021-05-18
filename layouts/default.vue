<template>
  <div>
    <Nuxt />
    <Navigation />
    <nuxt />
    <l-map ref="myMap"> </l-map>
    <Footer />
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css';

export default {
  mounted() {
    this.$nextTick(() => {
      this.$refs.myMap.mapObject.ANY_LEAFLET_MAP_METHOD();
    });
  },
  components: {
    Navigation,
    Footer
  },
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
