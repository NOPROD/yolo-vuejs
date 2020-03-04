<template>
  <div class="os_explorer_default_content">
    <div class="os_explorer_default_taskbar">
      <TaskBar />
    </div>
    <div class="os_explorer_default_view">
      <div class="os_explorer_default_pan_left">
        <Panleft />
      </div>
      <div class="default_view_content">
        <component :is="icon.component"></component>
      </div>
    </div>
    <div class="os_explorer_default_header"></div>

    <div class="os_explorer_default_footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/os/main/icon.vue'
import Footer from '@/components/os/apps/explorer/Footer.vue'
import Panleft from '@/components/os/apps/explorer/PanLeft.vue'
import TaskBar from '@/components/os/apps/explorer/TaskBar.vue'

@Component({
  components: { Icon, TaskBar, Panleft, Footer },
  props: { icon: {} }
})
export default class ExplorerDefaultContentComponent extends Vue {
  public mounted() {
    console.log('Dialog explorer opened')
    console.log(this)
  }
}
</script>

<style scoped lang="scss">
.os_explorer_default_footer {
  position: relative;
  bottom: 0px;
}
.os_explorer_default_content {
  background-color: white;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.os_explorer_default_footer {
  position: relative;
  left: 0px;
}
.os_explorer_default_taskbar {
  position: relative;
  top: 0px;
}

.os_explorer_default_pan_left,
.os_explorer_default_view,
.default_view_content {
  flex-grow: 1;
}

.os_explorer_default_pan_left {
  max-width: 20%;
}

.os_explorer_default_view {
  display: flex;
  flex-direction: row;
}
</style>
