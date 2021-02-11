<template>
  <div id="app">
    <Navbar />
    <Hero />
    <About />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    About,
    Footer
  },
};
</script>

<style>
</style>
