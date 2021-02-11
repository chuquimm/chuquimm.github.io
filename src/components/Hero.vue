<template>
  <section
    class="site-hero site-hero-background"
    id="section-home"
    data-stellar-background-ratio="0.5"
  >
    <div class="container">
      <div class="row intro-text align-items-center justify-content-center">
        <div class="col-md-10 text-center" style="padding-top: 175px">
          <h1 class="site-heading site-animate">
            Hola, soy <strong>Marcos Chuquicondor</strong>
          </h1>
          <p class="lead site-subheading mb-4 site-animate">IT Developer</p>
          <p>
            <a
              href="#section-about"
              class="smoothscroll btn btn-primary px-4 py-3"
              >Sobre mí</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.site-hero-background {
  background-image: url(~@/assets/images/principal.webp);
}
</style>