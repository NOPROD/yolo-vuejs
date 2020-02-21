<template>
  <div class="home">
    <Home v-bind:msg="msg" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({ components: { Home } })
export default class HomePage extends Vue {
  public msg = 'message'
}
</script>

<style lang="scss"></style>
