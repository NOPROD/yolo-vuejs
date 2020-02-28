<template>
  <modal
    name="explorer_dialog"
    transition="nice-modal-fade"
    classes="os_explorer_default"
    :min-width="200"
    :min-height="200"
    :pivot-y="0.5"
    :adaptive="true"
    :scrollable="true"
    :reset="true"
    :dragable="true"
  >
    <div class="os_explorer_close_btn">
      <button @click="$modal.hide('explorer_dialog')">Close</button>
    </div>
    <!-- <component :is="Component"></component> -->
    <div class="os_explorer_default_content">
      <div class="os_explorer_default_taskbar"></div>
      <div class="os_explorer_default_view">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique euismod lorem at pretium. Proin sit amet suscipit eros, sed vulputate elit. Ut fringilla laoreet lacinia. Nam malesuada nulla id diam cursus egestas. Curabitur vehicula imperdiet luctus. Aliquam tincidunt feugiat tellus, eu eleifend eros luctus varius. Integer et augue fermentum, viverra lacus sed, rhoncus ipsum. Mauris hendrerit imperdiet maximus.
        Pellentesque vulputate mi arcu. Nulla eget varius erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque at lacus et metus facilisis varius eget ut nibh. Suspendisse potenti. Quisque lorem odio, consectetur ut cursus sit amet, vestibulum quis leo. Maecenas pulvinar accumsan sapien, sodales finibus odio. In porttitor nisi ac eleifend pharetra. Ut ac scelerisque est, id dignissim ipsum. Maecenas est magna, sodales sit amet tempus at, auctor sed ligula. Cras facilisis sem orci, in venenatis odio semper non. Duis nisl tellus, posuere quis mi ac, ultricies pharetra lectus. Morbi ultrices nunc vel ornare euismod. Etiam sed varius nibh, vel porta purus. Curabitur vel nunc a augue blandit tempus.
        Ut eu nisl sed magna consectetur luctus. Ut imperdiet odio faucibus, consectetur mi non, dictum ligula. Praesent a quam massa. Phasellus massa elit, efficitur ut purus sit amet, tincidunt maximus dui. Praesent sodales ante eu nisi viverra, vel tincidunt nulla mollis. Suspendisse sed condimentum elit. Sed eu dolor non leo bibendum accumsan. In hac habitasse platea dictumst. Nullam varius rutrum risus, eget feugiat lorem sollicitudin imperdiet. Curabitur feugiat sagittis eros.
        Quisque sed metus tempus, luctus tellus eu, sagittis nulla. Nulla at urna egestas, pulvinar turpis et, varius mauris. Aliquam varius risus quam, id malesuada ex tincidunt ac. Vivamus euismod arcu urna, ac euismod purus mollis et. In ac risus sed mi semper posuere a eget lorem. Fusce a magna lorem. Vivamus faucibus lacinia nunc eget sodales.
        Cras commodo hendrerit leo a rutrum. Nullam ut magna dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent venenatis, metus sit amet euismod tempor, tellus mi gravida urna, ac sodales mi ligula eget mauris. Etiam condimentum dapibus magna sed dignissim. In nisl orci, tincidunt ut purus a, vulputate consequat ipsum. Nulla facilisi. Donec at vulputate odio. Nullam mattis porttitor nulla. Nunc risus purus, dapibus vitae tincidunt eu, pellentesque ac magna. Pellentesque iaculis diam laoreet diam tincidunt, id porttitor odio molestie. Ut in accumsan elit.
        5 paragraphes, 389 mots, 2607 caractères de Lorem Ipsum généré
      </div>
      <div class="os_explorer_default_header"></div>
      <div class="os_explorer_default_pan_left"></div>
    </div>
  </modal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/os/main/icon.vue'
import { ContextMenuES, ContextMenuS } from '@/services'

@Component({ components: { Icon, Component }, props: { component: {} } })
export default class ExplorerComponent extends Vue {
  public mounted() {
    ContextMenuES.holdClickActions(this.openDialog, this.openWindow)
  }

  private openDialog(data: any) {
    this.$modal.show('explorer_dialog', {
      draggable: true,
      dynamic: true
    })
  }
  private openWindow(data: any) {}

  /*@before-open="beforeOpen"
    @opened="opened"
    @closed="closed"
    @before-close="beforeClose"
     public beforeOpen() {
    console.log('before open')
  }
  public opened() {
    console.log('opened')
  }
  public closed() {
    console.log('closed')
  }
  public beforeClose() {
    console.log('before closed')
  } */
}
</script>

<style scoped lang="scss">
.explorer_component {
}
.os_explorer_default {
  width: auto;
  display: flex;
  height: auto;
}
.os_explorer_default_content {
  background-color: white;
  width: 100%;
  height: 100%;
  flex-grow: 1;
}
.os_explorer_default_taskbar {
  position: absolute;
  margin: 25px;
}
.os_explorer_default_view {
}
.os_explorer_default_header {
}
.os_explorer_default_pan_left {
}
.os_explorer_close_btn {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 15px;
}
</style>
