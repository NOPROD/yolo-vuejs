<template>
  <div class="view_personnal_resume col-desk-10 grid-0">
    <div class="view_personnal_main_content col-desk-12 col-tab-6 col-mob-4">
      <div class="view_perso_title">view perso title</div>
      <div class="view_perso_intro">view perso intro</div>
    </div>

    <div
      class="view_perso_bloc_exemple_preview col-desk-6 col-tab-3 col-mob-2"
      v-for="(content, index) in tempBlocExemple"
      :key="index"
    >
      <BlocExemplePreview :BlocExempleContent="content" />
    </div>
    <div class="view_perso_resume_low_content">view perso content</div>
    <div class="view_perso_low_action">view perso action</div>
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

.view_perso_bloc_exemple_preview:hover {
  background-color: red;
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
