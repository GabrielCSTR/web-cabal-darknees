<template>
   <!--- Start Home Section -->
  <section class="home-section" id="home">
    <div class="video-background">
      <div class="video-wrap">
        <div id="video">
          <video id="bgvid" autoplay loop muted playsinline>
            <source src="@/assets/stars.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div class="caption text-center">
        <vueper-slides class="no-shadow" :autoplay="true" prevent-y-scroll :arrows="false" :bullets="false">
          <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :title="slide.title"
            :content="slide.content"
          >
          </vueper-slide>
        </vueper-slides>
        <a class="btn btn-outline-light btn-lg" href="#download">BAIXE AGORA</a>
        <a class="btn btn-outline-light btn-lg" href="#download">CADASTRO</a>

      </div>
    </div>
  </section>
   <!--- End Home Section -->
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";

export default {
  name: "SectionWeb01",
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    pauseOnHover: true,
    autoPlaying: true,
    internalAutoPlaying: true,
    slides: [
      {
        title: "<h1>CABAL WEB</h1>",
        content: "<h3>Uma nova era, um novo começo!</h3>",
      },
      {
        title: "<h1>Cadastre-se AGORA!</h1>",
        content: "<h3>Venha conferir nosso servidor!</h3>",
      },
    ],
  }),
};
</script>

<style>
  
</style>
