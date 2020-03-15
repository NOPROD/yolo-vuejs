<template>
  <div class="pdf_component">
    <div role="toolbar" id="toolbar">
      <div id="pager">
        <button data-pager="prev">prev</button>
        <button data-pager="next">next</button>
      </div>
      <div id="page-mode">
        <label>
          Page Mode
          <input type="number" value="1" min="1" />
        </label>
      </div>
    </div>
    <div id="viewport-container">
      <div role="main" id="viewport"></div>
    </div>
  </div>
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
#page-mode {
  padding-left: 0.5em;
  display: flex;
  flex-direction: row;
}
#toolbar {
  display: flex;
  flex-direction: row;
}
</style>
