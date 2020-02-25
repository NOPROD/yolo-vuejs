<template>
  <div class="explorer_modal_main">explorer modal main</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class ExplorerPanLeftComponent extends Vue {
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
.explorer_modal_main {
  display: flex;
  flex-direction: row;
}
</style>
