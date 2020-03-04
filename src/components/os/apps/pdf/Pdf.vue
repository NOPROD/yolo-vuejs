<template>
  <div class="pdf_component"><PdfMain /></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IconModel } from '@/models'
import { IconsConst } from '@/const'
import PdfMain from '@/components/os/apps/pdf/reader/PdfMain.vue'

@Component({ components: { PdfMain } })
//https://rossta.net/blog/building-a-pdf-viewer-with-vue-part-1.html
//https://rossta.net/blog/building-a-pdf-viewer-with-vue-part-2.html
export default class PdfComponent extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.icon {
  width: fit-content;
}
</style>
