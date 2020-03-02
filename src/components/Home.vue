<template>
  <div>
    <div v-if="Icons">
      <Icon
        class="icon"
        :iconIndex="index"
        :icon="iconItem"
        v-for="(iconItem,index) in Icons"
        :key="index"
        :draggable="true"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from './os/main/icon.vue'
import { IconModel } from '@/models'
import { IconsConst } from '@/const'

@Component({ components: { Icon } })
export default class Home extends Vue {
  public Icons: IconModel[] = IconsConst
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.icon {
  width: fit-content;
}
</style>
