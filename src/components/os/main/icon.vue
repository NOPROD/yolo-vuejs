<template>
  <div class="draggable">Draggable Element</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({ props: { icon: {} } })
export default class Icon extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
