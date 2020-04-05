<template>
  <div class="main_header">
    <div class="header_svg_git" @click="goToGit"><SvgGitHead /></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Observable, of } from 'rxjs'
import SvgGitHead from '@/assets/svg/github_svg.svg'

@Component({ components: { SvgGitHead } })
export default class Header extends Vue {
  public showGame: boolean = false
  private githubLink: string = 'https://github.com/NOPROD'
  // To anime js github_svg_path2 anime all path
  public mounted() {}
  public goToGit(): void {
    let openedLink: Window = window.open(this.githubLink, '_blank')
    openedLink.focus()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main_header {
}
.header_svg_git {
  margin-left: auto;
  width: 5em;
}
</style>
