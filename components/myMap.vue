<template>
  <client-only>
    <l-map></l-map>
  </client-only>
</template>

<script>
// If you need to reference 'L', such as in 'L.icon', then be sure to
// explicitly import 'leaflet' into your component
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import Vue from 'vue';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

export default {
  name: 'myMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
};
</script>

<style scoped>

</style>
