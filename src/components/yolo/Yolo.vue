<template>
  <b-container align="center" fluid>
    <b-row align-v="start"
      ><b-col col cols="12" xl="12" lg="12" md="12" align="center">
        <div class="main_yolo">yolo</div>
      </b-col>
    </b-row>

    <b-row align-v="center"
      ><b-col col cols="12" xl="12" lg="12" md="12" align="center">
        <div class="main_yolo">yolo</div>
      </b-col>
    </b-row>

    <b-row align-v="end"
      ><b-col col cols="12" xl="12" lg="12" md="12" align="center">
        <b-row>
          <b-col
            col
            cols="1"
            xl="1"
            lg="1"
            md="1"
            align="center"
            class="test p-0 m-0"
            v-for="(building, key) in town"
            :key="key"
            ><component :is="building"></component
          ></b-col>
        </b-row>
      </b-col>
    </b-row>

    <div id="deep_bg"></div>
    <div id="secondary_bg"></div>
    <div id="front_bg"></div>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Building1 from '@/assets/town/basicBuilding/building_1.svg'
import Building2 from '@/assets/town/basicBuilding/building_2.svg'
import Building3 from '@/assets/town/basicBuilding/building_3.svg'
import Building4 from '@/assets/town/basicBuilding/building_4.svg'
import Building5 from '@/assets/town/basicBuilding/building_5.svg'

@Component({
  components: { Building1, Building2, Building3, Building4, Building5 }
})
export default class Yolo extends Vue {
  public town: any[] = [Building1, Building2, Building3, Building4, Building5]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#deep_bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main_button {
}
</style>
