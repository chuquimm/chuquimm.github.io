<template>
  <section class="site-section" id="section-about">
    <div class="container">
      <div class="row mb-5 align-items-center">
        <div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
          <img
            src="../assets/images/avatar.webp"
            alt="Image placeholder"
            class="img-fluid"
          />
        </div>
        <div class="col-lg-5 pl-lg-5">
          <div class="section-heading">
            <h2>Sobre <strong>mí</strong></h2>
          </div>
          <p>
            Tengo una gran confianza y cariño hacia la tecnología. Así que me
            dedico a mejorar mis habilidades técnicas y entender mejor las
            necesidades de las personas.
          </p>
          <p class="lead">
            Si estas buscando alguna solución tecnológica, sé que puede ser
            complicado. No te preocupes mi meta personal es ayudarte a elegir
            que opción es la mejor para ti.
          </p>
          <p class="mb-5">
            Mi misión es desarrollar sistemas de información enfocados en el
            bienestar del los humanos que la usan y que puedan beneficiar a la
            sociedad.
          </p>

          <p>
            <a
              href="https://www.linkedin.com/in/marcos-chuquicondor/"
              class="btn btn-primary px-4 py-2 btn-sm smoothscroll"
              >LinkedIn</a
            >
            <!-- <a
              href="./documents/Profile.pdf"
              class="btn btn-secondary px-4 py-2 btn-sm"
              download="./documents/Profile.pdf"
              >Descarga CV</a
            > -->
            <!-- <a href="./documents/Profile.pdf" class="btn btn-primary px-4 py-2 btn-sm smoothscroll" download="./documents/Profile.pdf">Descarga CV</a> -->
          </p>
        </div>
      </div>

      <div class="row pt-5">
        <div class="col-md-3 mb-3">
          <div class="section-heading">
            <h2>Mis <strong>Habilidades</strong></h2>
          </div>
        </div>
        <div class="col-md-9">
          <SkillProgressBar
            :label="label_of(backend.details)"
            :progress="frontend.progress"
          />
          <SkillProgressBar
            :label="label_of(frontend.details)"
            :progress="backend.progress"
          />
          <SkillProgressBar
            :label="label_of(management.details)"
            :progress="management.progress"
          />
          <SkillProgressBar
            :label="label_of(teamwork.details)"
            :progress="teamwork.progress"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillProgressBar from "@/components/SkillProgressBar.vue";

export default {
  components: {
    SkillProgressBar,
  },
  data() {
    return {
      backend: {
        progress: 100,
        details: ["Ruby on Rails", "Node.js", "Laravel"],
      },
      frontend: {
        progress: 100,
        details: ["Vue.js", "Bootstrap", "Vuetify"],
      },
      management: {
        progress: 100,
        details: ["Project management"],
      },
      teamwork: {
        progress: 100,
        details: ["Trabajo en equipo"],
      },
    };
  },
  methods: {
    label_of(array) {
      return array.join(", ");
    },
  },
  computed: {
    backend_label() {
      return this.label_of(this.backend.details);
    },
    frontend_label() {
      return this.label_of(this.backend.details);
    },
  },
};
</script>

<style>
</style>