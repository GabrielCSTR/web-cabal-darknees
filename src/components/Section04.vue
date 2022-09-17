<template>
  <div class="banner-section">
    <div class="col-sm-6 pallarax-main" data-aos="fade-left">
      <div class="mt-140 mt-lg-80 mb-140 mb-lg-80">
        <div class="banner-content">
          <h3 class="banner-heading font-alt">Você procura por um cabal de qualidade?</h3>
          <div class="banner-decription">
            Somente aqui no cabal old você consegue se divertir com seus amigos. Venha se
            aventurar conosco, chame os amigos e bora se divertir.
          </div>
        </div>
      </div>
    </div>

    <parallax>
      <img class="background" ref="background" src="@/assets/images/parallax.jpg" />
    </parallax>
  </div>
</template>

<script>
import Parallax from "./Parallax.vue";
export default {
  name: "SectionWeb04",
  components: {
    Parallax,
  },
};
</script>

<style>
.pallarax-main {
  position: absolute;
  margin-top: 10%;
  margin-left: 28%;
  width: 100%;
}
@media (min-width: 992px) {
  .banner-section {
    position: absolute !important;
    width: 100% !important;
    top: 273% !important;
    height: 300px !important;
    z-index: 7777 !important;
  }
  .Masthead {
    height: 145vh !important;
  }

}

@media (min-width: 1400px) {
  .banner-section {
    position: absolute !important;
    width: 100% !important;
    top: 263% !important;
    height: 300px !important;
    z-index: 88888 !important;
  }
  .Masthead {
    height: 150vh !important;
  }
  .pallarax-main {
    margin-top: 15% !important;
  }

  .banner-content {
    position: absolute;
    width: 100%;
  }
}

@media (min-height: 1400px) {
  .banner-section {
    position: absolute !important;
    width: 100% !important;
    top: 165% !important;
    height: 300px !important;
    z-index: 88888 !important;
  }
  .Masthead {
    height: 55vh !important;
  }
  .pallarax-main {
    margin-top: 15% !important;
  }

  .banner-content {
    position: absolute;
    width: 100%;
  }
}

</style>
