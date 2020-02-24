<template>
  <modal
    name="explorer"
    transition="nice-modal-fade"
    classes="demo-modal-class"
    :min-width="200"
    :min-height="200"
    :pivot-y="0.5"
    :adaptive="true"
    :scrollable="true"
    :reset="true"
    width="60%"
    height="auto"
    @before-open="beforeOpen"
    @opened="opened"
    @closed="closed"
    @before-close="beforeClose"
  >
    <div class="size-modal-content">
      <div>
        A new paragraph will be added every 5 sec to show how
        <b>height</b> scales.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum
        purus egestas libero ornare venenatis. Maecenas pharetra tortor eu
        tortor imperdiet, a faucibus quam finibus. Nulla id lacinia quam.
        Praesent imperdiet sed magna non finibus. Aenean blandit, mauris vitae
        lacinia rutrum, nunc mi scelerisque sem, in laoreet sem lectus ut orci.
        Ut egestas nulla in vehicula feugiat. Vivamus tincidunt nisi vel risus
        dictum suscipit. Nulla id blandit mi, vulputate aliquam enim.
      </div>
    </div></modal
  >
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class ExplorerComponent extends Vue {
  public beforeOpen() {
    console.log('before open')
  }
  public opened() {
    console.log('opened')
  }
  public closed() {
    console.log('closed')
  }
  public beforeClose() {
    console.log('before closed')
  }
}
</script>

<style scoped lang="scss">
.explorer_component {
}
</style>
