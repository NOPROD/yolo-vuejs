<template>
  <div class="os_dialog_default_content">
    <div class="os_dialog_default_taskbar"></div>
    <div class="os_dialog_default_view"></div>
    <div class="os_dialog_default_header"></div>
    <div class="os_dialog_default_pan_left"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/os/main/icon.vue'

@Component({ components: { Icon } })
export default class DialogDefaultContentComponent extends Vue {
  public mounted() {
    console.log('Dialog default content opened')
    console.log(this)
  }
}
</script>

<style scoped lang="scss">
</style>
