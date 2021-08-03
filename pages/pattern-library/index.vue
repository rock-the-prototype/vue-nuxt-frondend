<template>
  <div
    :class="{ mobile: isMobile, 'text-danger': hasError }"
    class="library-container"
  >
    <section class="library-bar">
      <a class="header-1" href="#">Layout</a>
      <a class="header-2" href="#">Colors</a>
      <a class="header-3" href="#">Fonts</a>
      <a class="header-4" href="#">Components</a>
      <a class="header-5" href="#">Media assets</a>
      <a class="header-6" href="#">tbd</a>
    </section>
  </div>
</template>
<script>
export default {
  name: "index.vue",
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
    changeClass() {
      if (!this.isMobile) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }

      console.log(this.isMobile);
    },
  },
};
</script>
