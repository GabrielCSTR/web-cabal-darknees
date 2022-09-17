<template>
  <!--- Start Classes Section -->
  <section id="classes">
    <h2 class="section-title font-alt mb-40 mb-sm-40">CLASSES</h2>
    <div class="justify-content-center">
      <vueper-slides
        class="no-shadow classes"
        :autoplay="true"
        :arrows="false"
        :bullets="false"
        :touchable="false"
        fixed-height="1200px"
        slide-image-inside
      >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          :title="slide.title"
          :content="slide.content"
          :style="'background-color: ' + ['#787878', '#787878'][i % 2]"
        >
          <template #image>
            <img :src="slide.image_stat" alt="" />
          </template>
          <template #content>
            <div class="vueperslide__content-wrapper">
              <div class="class-attributes classes">
                <img class="class-title" :src="slide.image_about" alt="" />
                <div class="class-description">
                  <p class="text-right">{{ slide.content }}</p>
                </div>
                <img class="class-stat" :src="slide.image_stat" alt="" />
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </section>
  <!--- End Classes Section -->
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";

export default {
  name: "SectionWeb03",
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
        id: "slide-1",
        title: "<h1>CABAL WEB</h1>",
        content:
          "O verdadeiro mestre das artes marciais, o Duelista é uma classe que utiliza um conjunto único de estilos de lâmina dupla para tornar seus inimigos indefesos. Utilizando velocidade e agilidade, esta classe corpo-a-corpo é uma escolha para alto dano. O Duelista usa armadura leve e se beneficia muito dos status de Destreza e Força.",
        image: require("@/assets/images/classes/class-1.webp"),
        image_about: require("@/assets/images/classes/class-1-title.webp"),
        image_stat: require("@/assets/images/classes/class-1-stat.webp"),
      },
      {
        id: "slide-2",
        title: "<h1>Cadastre-se AGORA!</h1>",
        content:
          "Concentrando-se em causar tremendo dano à distância, o Mago é uma classe de longo alcance que utiliza magia para atacar e se defender. Os Magos podem manifestar força para canalizar alvos únicos poderosos e acessar técnicas de Área de Efeito para destruir o que quiserem antes que possam ser feridos. Magos usam armaduras leves e se beneficiam muito do status de Inteligência.",
        image: require("@/assets/images/classes/class-2.webp"),
        image_about: require("@/assets/images/classes/class-2-title.webp"),
        image_stat: require("@/assets/images/classes/class-2-stat.webp"),
      },
      {
        id: "slide-3",
        title: "<h1>Cadastre-se AGORA!</h1>",
        content:
          "Um ramo raro da classe dos Magos, o Arqueiro Arcano é capaz de se aperfeiçoar na força da magia para realizar danos a um alvo único a partir de uma longa distância. Em um equilíbrio delicado entre o dano físico e mágico, pode apoiar seus aliados diante de qualquer perigo. O Arqueiro Arcano veste armadura média e se beneficia tanto de status de Inteligência quanto de Destreza.",
        image: require("@/assets/images/classes/class-3.webp"),
        image_about: require("@/assets/images/classes/class-3-title.webp"),
        image_stat: require("@/assets/images/classes/class-3-stat.webp"),
      },
      {
        id: "slide-4",
        title: "<h1>Cadastre-se AGORA!</h1>",
        content:
          "Um mestre da lâmina e da magia, um Espadachim Arcano utiliza ambos para golpear profundamente seus inimigos. Personagens desta classe utilizam velocidade e precisão para superar quaisquer obstáculos, e são consideradas como mestres espadachins. Usando Katanas e lâminas afiadas em sua forma mais elevada, um Espadachim Arcano usa uma armadura média e se beneficia muito dos status de Força e Destreza.",
        image: require("@/assets/images/classes/class-4.webp"),
        image_about: require("@/assets/images/classes/class-4-title.webp"),
        image_stat: require("@/assets/images/classes/class-4-stat.webp"),
      },
      {
        id: "slide-5",
        title: "<h1>Cadastre-se AGORA!</h1>",
        content:
          "Colocando a defesa acima de tudo, o Guardião Arcano é uma classe de armadura pesada que utiliza a força para se tornar invulnerável a danos. Capazes de criar poderosos Escudos Astrais, os Guardiões Arcanos são os melhores na linha de frente da guerra, protegendo a si mesmos e seus aliados de danos. Eles se beneficiam muito de um equilíbrio entre status de Força, Inteligência e Destreza.",
        image: require("@/assets/images/classes/class-5.webp"),
        image_about: require("@/assets/images/classes/class-5-title.webp"),
        image_stat: require("@/assets/images/classes/class-5-stat.webp"),
      },
      {
        id: "slide-6",
        title: "<h1>Cadastre-se AGORA!</h1>",
        content:
          "Seguindo a filosofia de que a força é o maior trunfo na batalha, o Guerreiro é uma classe combatente que se concentra na força física e armadura pesada para derrotar seus inimigos. Esta classe utiliza Montante e seu principal status é a força.",
        image: require("@/assets/images/classes/class-6.webp"),
        image_about: require("@/assets/images/classes/class-6-title.webp"),
        image_stat: require("@/assets/images/classes/class-6-stat.webp"),
      },
    ],
  }),
};
</script>

<style>
.classes .vueperslide--active:before {
  content: "Classe!";
  position: absolute;
  top: -18px;
  right: -18px;
  padding: 4px 25px;
  background: orange;
  color: #fff;
  font-size: 11px;
  transform: translateX(30%) rotate(45deg);
  transform-origin: 0 0;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.2);
}

.vueperslide__image {
  height: 60%;
  width: 0;
  padding-left: 50%;
  margin-left: 50%;

  transform: translateX(-50%);
}

.vueperslide__image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
}

@media (max-width: 576px) { 
  .vueperslide__image {
    width: 100%;
    height: 100%;
  }
  .vueperslides--fixed-height {
    height: 1000px !important;
  }
  .classes.class-attributes {
    margin-top: 100% !important;
  }

  .banner-section {
    position: relative !important;
    width: 100% !important;
    height: 300px !important;
  }

  .banner-content {
    margin-right: 40% !important;
  }

  .Masthead {
    height: 55vh !important;
  }
}


@media (min-width: 1400px) {
  .vueperslide__image {
    width: 0;
  }
  .vueperslides--fixed-height {
    height: 1800px !important;
  }
  .classes.class-attributes {
    margin-top: 20% !important;
  }
}

@media (min-width: 992px) {
  .vueperslide__image {
    width: 40%;
  }

  .classes.class-attributes {
    margin-top: 20% !important;
  }
}

.classes.class-attributes {
  align-content: center;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: right;
  left: 0;
  margin-top: 30%;
  margin-right: 20px;

}

.class-avatar img {
  margin: 0 auto;
  padding: 30px;
}

.class-description {
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  padding: 30px 0;
  text-align: right;
}
</style>
