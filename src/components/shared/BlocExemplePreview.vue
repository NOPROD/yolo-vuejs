<template>
  <div
    class="shared_bloc_exemple_component clickable"
    @mouseover.prevent="hoverOnExemple"
    @mouseleave.prevent="leaveOnExemple"
    @click.prevent="clickOnExemple"
  >
    <div class="bloc_exemple_title">{{ BlocExempleContent.title }}</div>
    <div class="bloc_exemple_gif">{{ BlocExempleContent.gif }}</div>
    <div class="bloc_exemple_actions">
      <button
        v-for="(action, index) in BlocExempleContent.actions"
        class="bloc_exemple_action"
        :key="index"
        @click.prevent="action.callBack"
      >
        {{ action.title }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AnimeS } from '@/services'

@Component({ props: { BlocExempleContent: {} } })
export default class BlocExemplePreviewComponent extends Vue {
  private isHover: boolean = false
  mounted() {
    console.log('bloc exemple content component')
  }

  private animateOnHoverExemple() {
    AnimeS.getAnime()
  }
  private animeOnLeaveExemple() {
    AnimeS.getAnime()
  }

  hoverOnExemple(): void {
    if (!this.isHover) {
      this.isHover = true
      console.log('on hover true exemple')
    }
  }

  leaveOnExemple(): void {
    if (this.isHover) {
      this.isHover = false
      console.log('on hover false exemple')
    }
  }

  clickOnExemple(): void {
    console.log('click on exemple')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shared_bloc_exemple_component {
  border: solid 1px black;
}
</style>
