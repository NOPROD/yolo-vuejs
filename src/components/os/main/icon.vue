<template>
  <div
    @click.prevent="click"
    @mouseover="scaleSvg"
    @mouseout="unScaleSvg"
    v-if="icon"
    v-bind:class="'home_icon ' + 'icon_drag_' +iconIndex"
  >
    <div class="icon_img">
      <component class="icon_hook" :is="icon.img.length ? icon.img[0] : icon.img"></component>
    </div>
    <!-- <div class="icon_title">{{ icon.title }}</div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AnimeS, DraggableS } from '@/services'

@Component({ props: { icon: {}, iconIndex: {}, draggable: {} } })
export default class Icon extends Vue {
  mounted() {
    this.$props.draggable
      ? DraggableS.interact('.icon_drag_' + this.$props.iconIndex)
      : null
  }

  public click() {
    this.$store.commit('clickElement', this.$props.icon.title)
    this.$modal.show('explorer_dialog')
  }

  public scaleSvg() {
    console.log('hover')
    AnimeS.getAnime()
      .timeline({
        easing: 'easeOutExpo',
        duration: 750
      })
      .add({
        targets: '.icon_hook path',
        scale: 3
      })
  }
  public unScaleSvg() {
    console.log('hover')
    AnimeS.getAnime()
      .timeline({
        easing: 'easeOutExpo',
        duration: 750,
        repeat: false
      })
      .add({
        targets: ['.icon_hook path', '.icon_hook g'],
        scale: 1
      })
  }
}
</script>

<style scoped lang="scss">
.home_icon {
  display: flex;
  flex-direction: column;
}
.icon_img {
  width: 100px;
}
.icon_title {
}
</style>
