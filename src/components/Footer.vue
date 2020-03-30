<template>
  <div class="main_footer">footer</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Observable, of } from 'rxjs'

@Component
export default class Footer extends Vue {
  public showGame: boolean = false

  public mounted() {}
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main_footer {
}
</style>
