<template>
  <!--- Start News Section -->
  <section class="page-section" id="partine">
    <div class="row justify-content-center"  data-aos="fade-left">
      <div class="col-md-10 col-md-offset-1">
        <h2 class="section-title font-alt mb-40 mb-sm-40">Parceiros</h2>

        <vueper-slides
        autoplay
        class="no-shadow"
        :visible-slides="3"
        :slide-ratio="1/9"
        :gap="35"
        :dragging-distance="70"
        >
          <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide.image"
          >
          </vueper-slide>
        </vueper-slides>
      </div>
    </div>
  </section>
  <!--- End News Section -->
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
export default {
  name: "SectionWeb06",
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    slides: [
      {
        title: "<h1>CABAL WEB</h1>",
        content: "<h3>Uma nova era, um novo começo!</h3>",
        image: require("@/assets/images/parceiros/client-1.png"),
      },
      {
        title: "<h1>Cadastre-se AGORA!</h1>",
        content: "<h3>Venha conferir nosso servidor!</h3>",
        image: require("@/assets/images/parceiros/client-2.png"),
      },
      {
        title: "<h1>Cadastre-se AGORA!</h1>",
        content: "<h3>Venha conferir nosso servidor!</h3>",
        image: require("@/assets/images/parceiros/client-1.png"),
      },
      {
        title: "<h1>Cadastre-se AGORA!</h1>",
        content: "<h3>Venha conferir nosso servidor!</h3>",
        image: require("@/assets/images/parceiros/client-2.png"),
      },
      {
        title: "<h1>Cadastre-se AGORA!</h1>",
        content: "<h3>Venha conferir nosso servidor!</h3>",
        image: require("@/assets/images/parceiros/client-1.png"),
      },
    ],
  }),
};
</script>

<style></style>
