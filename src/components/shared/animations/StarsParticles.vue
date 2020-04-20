<template>
  <div class="main_starsParticles" id="starsParticles"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class StarsParticles extends Vue {
  mounted() {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJs()
    })
  }

  private initParticlesJs(): void {
    particlesJS('starsParticles', {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 789.1476416322727
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.48927153781200905,
          random: false,
          anim: {
            enable: true,
            speed: 0.2,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'bubble'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 83.91608391608392,
            size: 1,
            duration: 3,
            opacity: 1,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main_starsParticles {
}
</style>
