<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {} from '@/services'
@Component({})
export default class App extends Vue {
  mounted() {}
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
body {
  overflow: hidden;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
