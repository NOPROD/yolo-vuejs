<template>
  <div class="explorer_taskbar_main">taskbar explorer main</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/os/main/icon.vue'

@Component({ components: { Icon } })
export default class ExplorerTaskBarComponent extends Vue {}
</script>

<style scoped lang="scss">
.explorer_taskbar_main {
}
</style>
