<template>
  <Navbar />
  <Section01 />
  <Section02 />
  <Section03 />
  <Section04 />
  <Section05 />
  <Section06 />
  <Footer />
</template>

<script>
import AOS from 'aos'
import Navbar from './components/Navbar.vue'
import Section01 from './components/Section01.vue'
import Section02 from './components/Section02.vue';
import Section03 from './components/Section03.vue';
import Section04 from './components/Section04.vue';
import Section05 from './components/Section05.vue';
import Section06 from './components/Section06.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Section01,
    Section02,
    Section03,
    Section04,
    Section05,
    Section06,
    Footer
},
  mounted() {
    AOS.init()
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
