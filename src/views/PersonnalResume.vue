<template>
  <div class="view_personnal_resume grid-center"><PersonnalResumeView /></div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PersonnalResumeView from '@/components/views/PersonnalResumeView.vue'
import { parallaxS } from '@/services'

@Component({ components: { PersonnalResumeView } })
export default class PersonnalResume extends Vue {
  mounted() {
    // this.initParallax()
  }

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
