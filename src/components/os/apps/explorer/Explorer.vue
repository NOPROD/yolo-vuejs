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
    width="60%"
    height="auto"
    @before-open="beforeOpen"
    @opened="opened"
    @closed="closed"
    @before-close="beforeClose"
  >
    <component :is="Component"></component>
  </modal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/os/main/icon.vue'
import { ContextMenuES } from '@/services'

@Component({ components: { Icon, Component }, props: { component: {} } })
export default class ExplorerComponent extends Vue {
  public mounted() {}
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
.os_explorer_default_content {
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
</style>
