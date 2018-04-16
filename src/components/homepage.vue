<template>
  <div>
    <title-bar :userInfo="userInfos"></title-bar>
    <tab-bar></tab-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import tabBar from './tabBar.vue'
  import titleBar from './titleBar.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'homepage',
    data () {
      let userInfos = {
        avatar_large: 'http://tvax1.sinaimg.cn/crop.0.0.640.640.180/a03ca099ly8fghp0u2fh6j20hs0hs759.jpg',
        name: '秋染蒹葭'
      }
      return {
        currentPage: 'home',
        userInfos: userInfos
      }
    },
    computed: {
      ...mapGetters({
        token: 'token',
        userInfo: 'userInfo',
        showImage: 'image_zoom_show'
      })
    },
    created () {
      this.getUserInfo(this.token.uid)
      this.showHomePage()
    },
    mounted () {
    },
    methods: {
      ...mapActions([
        'getUserInfo',
        'getHomeTimeline',
        'getPublicTimeline'
      ]),
      goProfile () {
        this.$router.push({name: 'profile'})
      },
      goPost () {
        this.$router.push({name: 'post'})
      },
      showHomePage () {
        this.$router.push({name: 'home'})
        this.currentPage = 'home'
      },
      showExplorePage () {
        this.$router.push({name: 'explore'})
        this.currentPage = 'explore'
      },
      showNotifyPage () {
        this.$router.push({name: 'notify'})
        this.currentPage = 'notify'
      },
      refresh () {
        switch (this.currentPage) {
          case 'home':
            this.getHomeTimeline(1)
            break
          case 'explore':
            this.getPublicTimeline(1)
            break
          default:
            break
        }
      },
      switchTab (page) {
        var vue = this
        switch (page) {
          case 'home':
            vue.showHomePage()
            break
          case 'explore':
            vue.showExplorePage()
            break
          case 'notify':
            vue.showNotifyPage()
            break
          default:
            vue.showHomePage()
            break
        }
      }
    },
    components: {
      titleBar,
      tabBar
    }
  }

</script>

<style scoped lang="scss">

</style>
