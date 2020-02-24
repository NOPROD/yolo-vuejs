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
import { SharedInstanceS, DraggableS, ContextMenuS } from '@/services'
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
    this.initDocumentUtils()
  }

  private initSharedInstance() {
    SharedInstanceS.setInstance(this)
  }

  private initUtils() {
    KeyboardS.listenHoldKey().subscribe(e => console.log(e))
  }

  private initDocumentUtils() {
    DraggableS.interact()
    ContextMenuS.prenventContextMenu()
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
body {
  overflow: hidden;
}
.draggable {
  touch-action: none;
  user-select: none;
}
</style>
