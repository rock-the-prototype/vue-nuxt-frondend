<template>
  <div id="components-demo">
    <button-counter></button-counter>
  </div>
</template>

<script>
// Define a new component called button-counter
Vue.component('button-counter', {
  //A component's data must be a function, that returns an object
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
</script>

<style scoped>

</style>
