<template>
  <modal
    name="explorer_dialog"
    transition="nice-modal-fade"
    classes="os_explorer_default"
    :min-width="200"
    :min-height="200"
    :pivot-y="0.5"
    :adaptive="true"
    :scrollable="true"
    :reset="true"
    :draggable="true"
    :resizable="true"
    @before-open="openDialog"
  >
    <div class="os_explorer_close_btn">
      <button @click="$modal.hide('explorer_dialog')">Close</button>
    </div>
    <component :is="component" :icon="Icons[content.iconIndex]"></component>
  </modal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/os/main/icon.vue'
import { ContextMenuES, ContextMenuS } from '@/services'
import { IconModel } from '@/models'
import { IconsConst } from '@/const'
import ExplorerDefaultContent from '@/components/os/apps/explorer/ExplorerDefaultContent.vue'

@Component({
  components: { Icon, Component, ExplorerDefaultContent }
})
export default class ExplorerComponent extends Vue {
  public component = ExplorerDefaultContent
  public Icons: IconModel[] = IconsConst
  public content: any = {
    iconIndex: 0
  }
  public activated() {}

  private openDialog() {
    console.log('hi')
    console.log(this.$store.getters.getElementClicked$)

    this.content.iconIndex = this.Icons.findIndex(
      icon => icon.title === this.$store.getters.getElementClicked$
    )
    console.log(this.content.iconIndex)
  }
  private openWindow(data: any) {}

  /*@before-open="beforeOpen"
    @opened="opened"
    @closed="closed"
    @before-close="beforeClose"
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
  } */
}
</script>

<style scoped lang="scss">
.explorer_component {
}
.os_explorer_default {
  width: auto;
  display: flex;
  height: auto;
  border: solid 1px red;
}

.os_explorer_default_taskbar {
  position: absolute;
  margin: 25px;
  border: solid 1px red;
}
.os_explorer_default_view {
}
.os_explorer_default_header {
  border: solid 1px red;
}
.os_explorer_default_pan_left {
  border: solid 1px red;
}
.os_explorer_close_btn {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 15px;
  border: solid 1px red;
}
::v-deep .icon_img {
  width: 25px !important;
}
</style>
