<template>
  <div class="pdf_pages">
    <PdfPage />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IconModel } from '@/models'
import { IconsConst } from '@/const'
import PdfPage from '@/components/os/apps/pdf/reader/PdfPage.vue'
import pdfjsLib from 'pdfjs-dist/webpack'

@Component({ components: { PdfPage }, props: { pdf: {} } })
export default class PdfDocumentComponent extends Vue {
  private exemples = [
    require('@/assets/files/pdf/sostdt.pdf'),
    require('@/assets/files/pdf/sostdt2.pdf'),
    require('@/assets/files/pdf/sostdt3.pdf')
  ]
  mounted() {
    console.log(this.exemples)
    console.log(pdfjsLib)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.icon {
  width: fit-content;
}
</style>
