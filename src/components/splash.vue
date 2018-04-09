<template>
  <div class='splash'>
    <img src='../assets/logo.png'>
    <div class='desc'>
      <p>不到园林,</p>
      <p>怎知春色如许</p>
    </div>
    <button class='login' v-on:click='oauth'>登录</button>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import {HOST_CONCIG, KEY_CONFIG, DEBUG} from '../api/config/api-list'
  import {getUrlKey} from '../utils/string-utils'

  let partJS = require('particles.js')

  export default {
    name: 'splash',
    data () {
      return {
        oauthCode: getUrlKey('code')
      }
    },
    computed: {
      code: function () {
        if (this.oauthCode) {
          return true
        } else {
          return false
        }
      },
      ...mapGetters({
        loginState: 'login'
      })
    },
    watch: {
      loginState: function (val, oldVal) {
        if (val) {
          this.goMain()
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
//        this.initParticleJS()
      })
      this.checkUrl()
      console.log('mounted')
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      checkUrl () {
        var vue = this
        if (vue.loginState) {
          vue.goMain()
        } else {
          if (vue.code) {
            vue.login(vue.oauthCode)
          }
        }
      },
      oauth () {
        let vue = this
        if (DEBUG) {
          vue.goMain()
        } else {
          let clientId = KEY_CONFIG.app_key
          let redirectUri = KEY_CONFIG.redirect_uri
          let oauthUrl = HOST_CONCIG.oauth
          window.open(oauthUrl + '?client_id=' + clientId + '&redirect_uri=' + redirectUri, '_self', '', true)
        }
      },
      goMain () {
        let vue = this
        setTimeout(function () {
          vue.$router.replace({name: 'main'})
        }, 2000)
      },
      initParticleJS () {
        partJS.particlesJS('particles-js', {
          'particles': {
            'number': {
              'value': 80,
              'density': {
                'enable': true,
                'value_area': 800
              }
            },
            'color': {
              'value': '#E4E4E4'
            },
            'shape': {
              'type': 'circle',
              'stroke': {
                'width': 0,
                'color': '#000000'
              },
              'polygon': {
                'nb_sides': 5
              },
              'image': {
                'src': 'img/github.svg',
                'width': 100,
                'height': 100
              }
            },
            'opacity': {
              'value': 0.5,
              'random': false,
              'anim': {
                'enable': false,
                'speed': 1,
                'opacity_min': 0.1,
                'sync': false
              }
            },
            'size': {
              'value': 10,
              'random': true,
              'anim': {
                'enable': false,
                'speed': 40,
                'size_min': 0.1,
                'sync': false
              }
            },
            'line_linked': {
              'enable': true,
              'distance': 150,
              'color': '#D1D1D1',
              'opacity': 0.4,
              'width': 1
            },

            'move': {
              'enable': true,
              'speed': 2,
              'direction': 'none',
              'random': false,
              'straight': false,
              'out_mode': 'out',
              'attract': {
                'enable': false,
                'rotateX': 600,
                'rotateY': 1200
              }
            }
          },
          'interactivity': {
            'detect_on': 'canvas',
            'events': {
              'onhover': {
                'enable': true,
                'mode': 'grab'
              },
              'onclick': {
                'enable': true,
                'mode': 'push'
              },
              'resize': true
            },
            'modes': {
              'grab': {
                'distance': 100,
                'line_linked': {
                  'opacity': 1
                }
              },
              'bubble': {
                'distance': 400,
                'size': 40,
                'duration': 2,
                'opacity': 8,
                'speed': 3
              },
              'repulse': {
                'distance': 200
              },
              'push': {
                'particles_nb': 4
              },
              'remove': {
                'particles_nb': 2
              }
            }
          },
          'retina_detect': true
        })
      }
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .splash {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .desc {
    margin: 0;
    padding: 0;
    text-align: center;
    padding-top: 2rem;
  }

  .desc p {
    font-size: 16px;
    line-height: 24px;
  }

  .login {
    position: relative;
    width: 50vw;
    height: 2.5rem;
    background-color: #00bdf5;
    color: #ffffff;
    border-radius: 25px;
    border-style: none;
    bottom: -10rem;
  }
</style>
