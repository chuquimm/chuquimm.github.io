<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-12 text-center">
          <p>
            <a
              target="_blank"
              href="https://www.instagram.com/chuquimm/"
              class="social-item"
              ><span class="icon-instagram2"></span
            ></a>
            <a
              target="_blank"
              href="https://www.twitter.com/chuquimm/"
              class="social-item"
              ><span class="icon-twitter2"></span
            ></a>
            <a
              target="_blank"
              href="https://github.com/chuquimm"
              class="social-item"
              ><span class="icon-github2"></span
            ></a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/marcoschuquicondor/"
              class="social-item"
              ><span class="icon-linkedin2"></span
            ></a>
            <!-- <a target="_blank" href="https://www.youtube.com/channel/UCuI30Xi0abJfTSwH-ZavJYg" class="social-item"><span class="icon-youtube"></span></a> -->
          </p>
        </div>
      </div>
      <div class="row">
        <p class="col-12 text-center">
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          Copyright &copy; {{ current_year }} All rights reserved | Developed from a
          <a href="https://colorlib.com" target="_blank" class="text-primary"
            >Colorlib</a
          >
          template.
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
document.write();
export default {
  data(){
    return {
      current_year: new Date().getFullYear()
    }
  }
};
</script>

<style>
</style>