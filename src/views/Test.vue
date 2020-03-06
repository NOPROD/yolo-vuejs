<template>
  <div class="home">
    <Test />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Test from '@/components/test/Test.vue'
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({ components: { Test } })
export default class TestPage extends Vue {}
</script>

<style scoped lang="scss">
.home {
  flex-grow: 1;
}
</style>