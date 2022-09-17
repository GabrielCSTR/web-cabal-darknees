import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import './assets/css/style.css'
import './assets/css/fixed.css'

import 'vueperslides/dist/vueperslides.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faJs, faFacebook, faYoutube, faDiscord } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(fas, faJs, faFacebook, faYoutube, faDiscord, faCaretUp)

import 'animate.css';
import 'aos/dist/aos.css'



createApp(App).use(BootstrapVue3).component("fa", FontAwesomeIcon).mount('#app')
