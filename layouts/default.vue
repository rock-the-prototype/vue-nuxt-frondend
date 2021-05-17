<template>
  <div>
    <Nuxt />
    <Navigation />
    <nuxt />
    <Footer />
    <l-map ref="myMap"> </l-map>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

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
