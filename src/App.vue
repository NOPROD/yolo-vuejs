<template>
  <div id="app">
    <Header class="app_header" />
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
    <Footer />
    <starsParticles />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import starsParticles from '@/components/shared/animations/StarsParticles.vue'
import {} from '@/services'
@Component({ components: { Header, Footer, starsParticles } })
export default class App extends Vue {
  mounted() {}
}
</script>
<style lang="scss">
@import 'assets/scss/grid_rules.scss';
@import 'assets/scss/simple_shared.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

* {
  font-family: 'Lato', sans-serif;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  background-color: #17182f;
}

.app_header {
  position: absolute;
  top: 0;
  right: 0;
}
#starsParticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<i18n lang="json5">
{
  "en": {
    "apTitle": {"hi":"hi"
    }
  },
  "fr": {
    "apTitle": {"hi":"hi"
    }
}
}
</i18n>
