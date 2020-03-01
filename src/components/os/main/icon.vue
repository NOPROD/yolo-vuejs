<template>
  <div
    @click.prevent="click"
    @mouseover="scaleSvg"
    v-if="icon"
    class="home_icon"
  >
    <div class="icon_img">
      <component
        class="icon_hook"
        :is="icon.img.length ? icon.img[0] : icon.img"
      ></component>
    </div>
    <!-- <div class="icon_title">{{ icon.title }}</div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AnimeS } from '@/services'

@Component({ props: { icon: {} } })
export default class Icon extends Vue {
  mounted() {
    console.log(this.$props.icon.img.length)
  }

  public click() {
    console.log('commit')
    this.$store.commit('clickElement', this.$props.icon.title)
    this.$modal.show('explorer_dialog')
  }

  public scaleSvg() {
    AnimeS.getAnime()
      .timeline({
        easing: 'easeOutExpo',
        duration: 750
      })
      .add({
        targets: '.icon_hook path',
        scaleZ: 1
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
