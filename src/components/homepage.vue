<template>
  <div>
    <title-bar :userInfo="userInfos"></title-bar>
    <tab-bar @tab="switchTab"></tab-bar>
    <div id="content" class="app-content">
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
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
      showNotificationsPage () {
        this.$router.push({name: 'notifications'})
        this.currentPage = 'notifications'
      },
      showmMessagesPage () {
        this.$router.push({name: 'messages'})
        this.currentPage = 'messages'
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
        console.log(page)
        switch (page.index) {
          case 'home':
            vue.showHomePage()
            break
          case 'explore':
            vue.showExplorePage()
            break
          case 'notifications':
            vue.showNotificationsPage()
            break
          case 'messages':
            vue.showmMessagesPage()
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
  .fade-enter-active {
    transition: opacity .5s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
