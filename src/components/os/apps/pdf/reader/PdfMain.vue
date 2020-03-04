<template>
  <div class="pdf_component">
    <PdfDocument :pdf="document" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IconModel } from '@/models'
import { IconsConst } from '@/const'
import PdfDocument from '@/components/os/apps/pdf/reader/PdfDocument.vue'

@Component({ components: { PdfDocument } })
export default class PdfMainComponent extends Vue {
  public document: any = null
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.icon {
  width: fit-content;
}
</style>
