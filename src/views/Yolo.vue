<template>
  <div class="shrad_main">
    <YoloComp />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue'
import Component from 'vue-class-component'
import YoloComp from '@/components/yolo/Yolo.vue'
@Component({ components: { YoloComp } })
export default class Yolo extends Vue {}
</script>

<style scoped lang="scss"></style>
