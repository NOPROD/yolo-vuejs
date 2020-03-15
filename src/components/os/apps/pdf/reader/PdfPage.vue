<template>
  <div class="pdf_component">
    <div role="toolbar" id="toolbar">
      <div id="pager" class="pdf_actions">
        <div class="pdf_action_first">
          <SvgRewind />
        </div>
        <div class="pdf_action_previous">
          <SvgBack />
        </div>
        <div class="pdf_action_next">
          <SvgNext />
        </div>
        <div class="pdf_action_last">
          <SvgForward />
        </div>
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
import SvgBack from '@/assets/svg/icons/shared/arrow-circle/noun_back.svg'
import SvgCheck from '@/assets/svg/icons/shared/arrow-circle/noun_check.svg'
import SvgDown from '@/assets/svg/icons/shared/arrow-circle/noun_down.svg'
import SvgForward from '@/assets/svg/icons/shared/arrow-circle/noun_forward.svg'
import SvgNext from '@/assets/svg/icons/shared/arrow-circle/noun_next.svg'
import SvgRewind from '@/assets/svg/icons/shared/arrow-circle/noun_rewind.svg'
import SvgUp from '@/assets/svg/icons/shared/arrow-circle/noun_up.svg'

@Component({
  components: { SvgRewind, SvgBack, SvgNext, SvgForward },
  props: { page: {}, scale: {} }
})
export default class PdfPageComponent extends Vue {
  render() {}
}
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
.pdf_action_first,
.pdf_action_previous,
.pdf_action_next,
.pdf_action_last {
  width: 1.563em;
}
.pdf_actions {
  display: flex;
  flex-direction: row;
}
</style>
