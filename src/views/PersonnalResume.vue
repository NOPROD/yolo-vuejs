<template>
  <div class="shrad_main">
    <div class="home">
      <Home />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Vue from 'vue'
import Component from 'vue-class-component'
import Footer from '@/components/Footer.vue'
@Component({ components: { Home, Footer } })
export default class PersonnalResume extends Vue {
  mounted() {
    console.log('personnal resue view')
  }
}
</script>

<style scoped lang="scss">
.home {
  flex-grow: 1;
}
</style>
