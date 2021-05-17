<template>
  <section class="container">
    <div>
      <h1 class="title">
        Test-Seite
      </h1>
      <h2 class="subtitle">
        Ein Test mit OpenMaps
      </h2>
      <div id="mapid"></div>
    </div>
  </section>
</template>

<script>
// If you need to reference 'L', such as in 'L.icon', then be sure to
// explicitly import 'leaflet' into your component
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: "map.vue",
  src:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",
  integrity:"sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==",
  crossorigin:"",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    'l-map': window.Vue2Leaflet.LMap,
  },
};

</script>

<style scoped>

</style>
