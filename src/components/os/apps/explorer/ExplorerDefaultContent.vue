<template>
  <div class="os_explorer_default_content">
    <div class="os_explorer_default_taskbar"></div>
    <div class="os_explorer_default_view"></div>
    <div class="os_explorer_default_header"></div>
    <div class="os_explorer_default_pan_left"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/os/main/icon.vue'

@Component({ components: { Icon } })
export default class ExplorerDefaultContentComponent extends Vue {
  public mounted() {
    console.log('Dialog explorer opened')
    console.log(this)
  }
}
</script>

<style scoped lang="scss">
</style>
