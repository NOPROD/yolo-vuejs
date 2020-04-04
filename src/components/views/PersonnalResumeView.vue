<template>
  <div class="view_personnal_resume">
    <div class="view_perso_title">view perso title</div>
    <div class="view_perso_intro">view perso intro</div>
    <div class="view_perso_bloc_exemple_preview">
      <BlocExemplePreview
        v-for="(content, index) in tempBlocExemple"
        :key="index"
        :BlocExempleContent="content"
      />
    </div>
    <div class="view_perso_resume_content">view perso content</div>
    <div class="view_perso_action">view perso action</div>
  </div>
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
      actions: [{ title: 'First action', callBack: ()=>{console.log('action')}) }]
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
