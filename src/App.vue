<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
    <Footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Footer from '@/components/Footer.vue'
import {} from '@/services'
@Component({ components: { Footer } })
export default class App extends Vue {
  mounted() {}
}
</script>
<style lang="scss">
@import 'assets/scss/grid_rules.scss';

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
  background-image: linear-gradient(
    to right,
    #f3f3f3,
    #ececec,
    #e6e6e6,
    #dfdfdf,
    #d9d9d9,
    #d9d9d9,
    #dadada,
    #dadada,
    #e1e1e1,
    #e8e8e8,
    #f0f0f0,
    #f7f7f7
  );
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
