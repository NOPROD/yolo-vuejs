<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { SharedInstanceS } from '@/services'
import { RpgS } from '@/services/games'
import { KeyboardS } from '@/services/utils'
@Component
export default class App extends Vue {
  mounted() {
    setTimeout(() => {
      this.initAll()
    }, 0)
  }

  private initAll() {
    this.initSharedInstance()
    this.initUtils()
  }

  private initSharedInstance() {
    SharedInstanceS.setInstance(this)
  }

  private initUtils() {
    KeyboardS.listenKeyDown().subscribe(e => console.log(e))
    KeyboardS.listenKeyUp().subscribe(e => console.log(e))
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
