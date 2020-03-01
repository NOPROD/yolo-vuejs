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
    <!-- <component :is="Component"></component> -->
    <div class="os_explorer_default_content">
      <div class="os_explorer_default_taskbar">
        <Icon class="icon" :icon="Icons[content.iconIndex]" />
      </div>
      <div class="os_explorer_default_view"></div>
      <div class="os_explorer_default_header"></div>
      <div class="os_explorer_default_pan_left"></div>
    </div>
  </modal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/os/main/icon.vue'
import { ContextMenuES, ContextMenuS } from '@/services'
import { IconModel } from '@/models'
import { IconsConst } from '@/const'

@Component({ components: { Icon, Component }, props: { component: {} } })
export default class ExplorerComponent extends Vue {
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
}
.os_explorer_default_content {
  background-color: white;
  width: 100%;
  height: 100%;
  flex-grow: 1;
}
.os_explorer_default_taskbar {
  position: absolute;
  margin: 25px;
}
.os_explorer_default_view {
}
.os_explorer_default_header {
}
.os_explorer_default_pan_left {
}
.os_explorer_close_btn {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 15px;
}
::v-deep .icon_img {
  width: 25px !important;
}
</style>
