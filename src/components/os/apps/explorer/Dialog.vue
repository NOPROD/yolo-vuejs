<template>
  <modal
    name="dialog"
    transition="nice-modal-fade"
    classes="os_dialog_default"
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

@Component({ components: { Icon }, props: { Component: {} } })
export default class ExplorerDialogComponent extends Vue {
  public mounted() {
    console.log('Dialog explorer opened')
    console.log(this)
  }
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
</style>
