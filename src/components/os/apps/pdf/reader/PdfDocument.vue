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
import { of, Observable } from 'rxjs'

@Component({ components: { PdfPage }, props: { pdf: {} } })
export default class PdfDocumentComponent extends Vue {
  public viewport = null
  public pdfSelected: any = null
  private exemples = ['/sostdt.pdf']
  mounted() {
    this.fetchAndGetPdf()
  }

  private fetchAndGetPdf(): void {
    let linterConvert = pdfjsLib.getDocument('/sostdt.pdf') as any
    linterConvert.then(this.setPdf)
  }

  private setPdf(pdfDocument: any) {
    console.log(pdfDocument)
    this.pdfSelected = pdfDocument
  }

  get canvasAttrsComputed() {
    let { width, height } = this.viewport
    ;[width, height] = [width, height].map(dim => Math.ceil(dim))

    const style = this.canvasStyle

    return {
      width,
      height,
      style,
      class: 'pdf-page'
    }
  }

  public canvasStyle() {
    const SizeViewport: {
      width: any
      height: any
    } = this.actualSizeViewport()
    const pixelRatio = window.devicePixelRatio || 1
    const [pixelWidth, pixelHeight] = [
      SizeViewport.width,
      SizeViewport.height
    ].map(dim => Math.ceil(dim / pixelRatio))
    return `width: ${pixelWidth}px; height: ${pixelHeight}px;`
  }

  private actualSizeViewport(): { width: any; height: any } {
    return { width: 0, height: 0 }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.icon {
  width: fit-content;
}
</style>
