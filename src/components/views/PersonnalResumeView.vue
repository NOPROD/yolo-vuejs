<template>
  <b-container align="center" fluid>
    <b-row align-v="start"
      ><b-col col cols="12" xl="12" lg="12" md="12" align="center">
        ff
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col col cols="12" xl="12" lg="12" md="12" align="center">
        <b-row>
          <b-col
            col
            cols="6"
            xl="4"
            lg="4"
            md="4"
            align="center"
            v-for="(content, index) in tempBlocExemple"
            :key="index"
          >
            <BlocExemplePreview :BlocExempleContent="content" />
          </b-col>
        </b-row>
        <b-row>
          <b-col
            col
            cols="12"
            xl="12"
            lg="12"
            md="12"
            align="center"
            class="view_perso_low_action col-desk-12 col-tab-6 col-mob-4"
          >
            view perso action
          </b-col></b-row
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { parallaxS } from '@/services'
import BlocExemplePreview from '@/components/shared/BlocExemplePreview.vue'

@Component({ components: { PersonnalResumeView, BlocExemplePreview } })
export default class PersonnalResumeView extends Vue {
  public tempBlocExemple = [
    {
      title: 'First exemple',
      gif: 'First gif',
      actions: [{ title: 'First action', callBack: '' }]
    },
    {
      title: 'Second exemple',
      gif: 'Second gif',
      actions: [{ title: 'Second action', callBack: '' }]
    },
    {
      title: 'Third exemple',
      gif: 'Third gif',
      actions: [{ title: 'Third acton', callBack: '' }]
    }
  ]
  mounted() {}

  public initParallax() {
    parallaxS.getInstance(document.getElementById('scene'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main_home {
}

.view_perso_bloc_exemple_preview {
  padding: 1.5em 2em;
}
</style>

<i18n lang="json5">
{
  "en": {
    "title": {"hi":"hi"
    }
  },
  "fr": {
    "title": {"hi":"hi"
    }
}
}
</i18n>
