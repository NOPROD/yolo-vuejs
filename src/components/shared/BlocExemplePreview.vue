<template>
  <div class="shared_bloc_exemple_component">
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

@Component({ props: { BlocExempleContent: {} } })
export default class BlocExemplePreviewComponent extends Vue {
  mounted() {
    console.log('bloc exemple content component')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shared_bloc_exemple_component {
  border: solid 1px black;
}
</style>
