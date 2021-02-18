<template>
  <nav
    class="navbar navbar-expand-lg site-navbar navbar-light"
    :class="{ 'navbar--hidden': !showNavbar }"
    id="pb-navbar"
  >
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <a class="navbar-brand" href="index.html">chuquicondor</a>
      <div
        class="collapse navbar-collapse justify-content-md-end"
        id="navbarsExample09"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#section-home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section-about">About</a>
          </li>
          <!-- <li class="nav-item"><a class="nav-link" href="#section-services">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-portfolio">Portfolio</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-resume">Resume</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-blog">Blog</a></li>
            <li class="nav-item"><a class="nav-link" href="#section-contact">Contact</a></li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      console.log(currentScrollPosition);
      if (currentScrollPosition < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style scoped>
.navbar {
  background: transparent !important;
  position: fixed !important;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.navbar.navbar--hidden {
  box-shadow: none !important;
  background: #57d131 !important;
  transform: translate3d(0, -120%, 0);
}

.parent-nav-link-padding,
.site-navbar .navbar-nav > li > a {
  padding: 15px 20px !important;
}
.site-navbar {
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0px;
  margin-bottom: 0px;
  background: none;
  position: absolute;
  top: 20px;
  width: 100%;
  z-index: 200;
  color: #fff !important;
}
.site-navbar .navbar-brand {
  display: inline-block;
  border: 2px solid #fff;
  padding: 5px 20px;
  color: #fff !important;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}
.site-navbar .navbar-brand:hover {
  color: #fff;
}
/* .site-navbar.bg-light {
  background: transparent !important;
} */
@media (max-width: 991.98px) {
  .site-navbar.bg-light {
    background: #fff !important;
    top: 0;
  }
  .site-navbar.bg-light .navbar-brand {
    display: inline-block;
    font-size: 18px;
    border: 2px solid #000;
    padding: 2px 10px !important;
    color: #000;
  }
}
.site-navbar .navbar-nav > li > a {
  color: #fff !important;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.1em;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}
@media (max-width: 991.98px) {
  .site-navbar .navbar-nav > li > a {
    color: rgba(0, 0, 0, 0.7) !important;
  }
}
.site-navbar .navbar-nav.active > a {
  color: #57d131 !important;
}
.site-navbar.scrolled {
  background: #fff;
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.09);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  -webkit-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
}
.site-navbar.scrolled.bg-light {
  background: #fff !important;
}
.site-navbar.scrolled .navbar-brand {
  display: inline-block;
  font-size: 18px;
  border: 2px solid #000;
  padding: 2px 10px !important;
}
.site-navbar.scrolled.awake,
.site-navbar.scrolled.sleep {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.site-navbar.scrolled.awake {
  -webkit-transform: translateY(0%);
  -ms-transform: translateY(0%);
  transform: translateY(0%);
  background: #fff !important;
}
.site-navbar.scrolled.sleep {
  -webkit-transform: translateY(-90%);
  -ms-transform: translateY(-90%);
  transform: translateY(-90%);
  background: #57d131 !important;
}
.site-navbar.scrolled .navbar-brand {
  color: #000;
}
.site-navbar.scrolled .dropdown > a:before {
  color: rgba(0, 0, 0, 0.4);
}
.site-navbar.scrolled .navbar-nav > li > a {
  color: rgba(0, 0, 0, 0.7) !important;
}
.site-navbar.scrolled .navbar-nav > li > a:hover {
  color: #57d131 !important;
}
.site-navbar.scrolled .navbar-nav > li > a.active {
  color: #57d131 !important;
}
.site-navbar.scrolled .navbar-nav > li.active > a {
  color: #57d131 !important;
}
</style>
