<template>
  <div @click="click" v-if="icon" class="home_icon">
    <div class="icon_img">
      <img
        class="icon_hook"
        :src="typeof icon.img === 'object' ? icon.img[0] : icon.img"
      />
    </div>
    <!-- <div class="icon_title">{{ icon.title }}</div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({ props: { icon: {} } })
export default class Icon extends Vue {
  mounted() {
    console.log(typeof this.$props.icon.img)
  }

  public click() {
    console.log('click')
  }
}
</script>

<style scoped lang="scss">
.home_icon {
  display: flex;
  flex-direction: column;
}
.icon_img {
  width: 100px;
}
.icon_title {
}
</style>
