<template>
  <div class="default_panleft_component">default</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from './os/main/icon.vue'
import { IconModel } from '@/models'
import { IconsConst } from '@/const'

@Component({ components: { Icon } })
export default class DefaultPanLeftComponent extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.icon {
  width: fit-content;
}
</style>
