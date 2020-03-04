<template>
  <div class="pdf_component">pdf</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IconModel } from '@/models'
import { IconsConst } from '@/const'

@Component({})
export default class PdfPageComponent extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.icon {
  width: fit-content;
}
</style>
