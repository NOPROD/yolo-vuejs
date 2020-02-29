<template>
  <div class="default_view_component">
    <DefaultContent />
    <DefaultHeader />
    <DefaultPanLeft />
    <DefaultTaskbar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from './os/main/icon.vue'
import { IconModel } from '@/models'
import { IconsConst } from '@/const'
import DefaultContent from '@/components/os/apps/shared/view/DefaultContent.vue'
import DefaultHeader from '@/components/os/apps/shared/view/DefaultHeader.vue'
import DefaultPanLeft from '@/components/os/apps/shared/view/DefaultPanLeft.vue'
import DefaultTaskbar from '@/components/os/apps/shared/view/DefaultTaskbar.vue'

@Component({
  components: {
    Icon,
    DefaultContent,
    DefaultHeader,
    DefaultPanLeft,
    DefaultTaskbar
  },
  props: {}
})
export default class DefaultViewComponent extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.icon {
  width: fit-content;
}
</style>
