<template>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin=""/>
  #mapid { height: 180px; }
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

export default {
  name: "map.vue",
  src:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",
  integrity:"sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==",
  crossorigin:""
}
</script>

<style scoped>

</style>
