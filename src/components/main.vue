<template lang="html">
    <div class="main">
    <div class="title">
    <title-bar :userInfo="userInfos"></title-bar>
        <tab-bar></tab-bar>
</div>
            <div id="content" class="app-content">
                <transition name="fade">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
            <div class="post" v-on:click.stop="goPost">
                <div class="post-icon">
                    <svg viewBox="0 0 64 72" style="display: inline-block; fill: currentcolor; position: relative; user-select: none; vertical-align: text-bottom;"><g><path d="M6.779 43.188a2.864 2.864 0 0 1-2.864-2.864V17.257a5.733 5.733 0 0 1 5.727-5.727h14.431a2.864 2.864 0 0 1 0 5.728H9.643v23.067a2.865 2.865 0 0 1-2.864 2.863zM55.793 60.474l-23.013-.048a2.864 2.864 0 0 1 0-5.728l23.012.048v-11.57a2.864 2.864 0 0 1 5.728 0v11.57a5.734 5.734 0 0 1-5.727 5.728zM64 2.942C45.864 7.084 32.298 22.584 23.111 36.309c-7.085 10.556-11.308 20.337-12.195 22.659-1.61 4.165-1.711 6.806-.965 7.057.748.252 2.738-2.344 4.728-5.446 1.278-1.993 3.028-4.629 5.276-8.21 4.626-7.41 10.103-13.302 16.177-14.365.014 0 .061-.046.078-.067 4.476-.503 14.106-4.28 15.31-9.817-3.104 1.169-6.271 1.732-9.439 1.599 0 0 1.892-2.461 4.927-3.43 5.205-1.663 8.425-3.15 11.422-7.283 1.036-1.447 1.515-2.516 2.09-4.09-3.293 1.821-7.62 2.854-10.076 2.765 2.418-2.973 5.916-4.594 9.334-7.596C63.927 6.435 64 2.942 64 2.942z"></path></g></svg>
                </div>
            </div>
        </div>
</template>

<script>
  import tabBar from './tabBar.vue'
  import titleBar from './titleBar.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'main',
    data () {
      let userInfos = {
        avatar_large: 'http://tvax1.sinaimg.cn/crop.0.0.640.640.180/a03ca099ly8fghp0u2fh6j20hs0hs759.jpg',
        name: '秋然蒹葭'
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
            this.$router.push({ name: 'profile' })
        },
        goPost () {
            this.$router.push({ name: 'post' })
        },
        showHomePage () {
            this.$router.push({ name: 'home' })
            this.currentPage = 'home'
        },
        showExplorePage () {
            this.$router.push({ name: 'explore' })
            this.currentPage = 'explore'
        },
        showNotifyPage () {
            this.$router.push({ name: 'notify' })
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

<style lang="css">
.main {
    padding-top: 3.5rem;
}

.main .post {
    width: 4.3rem;
    height: 4.3rem;
    border-radius: 50%;
    background-color: #007AFF;
    position: fixed;
    top: 84vh;
    right: 2rem;
    box-shadow: 1px 1px 4px rgba(101, 119, 134, .75);
    z-index: 50;
}

.main .post .post-icon {
    width: 1.3rem;
    height: 1.3rem;
    margin: 1.5rem;
    color: #FFFFFF;
}

.user-header .header-avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-top: .5rem;
    border: 1px solid rgba(0, 0, 0, .05);
}

.user-header .header-name {
    flex: 1;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 3.5rem;
    padding-left: 1.2rem;
}

.list-padding {
    padding-top: 4.5rem;
}

.user-header {
    width: 100%;
    height: 4rem;
    background: #ffffff;
    top: 0px;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-flow: row;
    position: fixed;
    top: 0;
    z-index: 30;
}

.user-header .header-refresh {
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 1.25rem;
    color: #5d5d5d;
}

.main .switch-tab {
    width: 100%;
    height: 3.5rem;
    background: #f4f5f5;
    display: flex;
    flex-flow: row;
    text-align: center;
    line-height: 3.5rem;
    font-size: 1.35rem;
    font-weight: 600;
    color: #5d5d5d;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
    position: fixed;
    top: 4rem;
    z-index: 30;
}

.main .switch-tab.tab-fixed {
    position: fixed;
    top: 0rem;
}

.main .switch-tab .tab-tag {
    flex: 1;
}

.main .switch-tab .tab-tag.tab-select {
    color: #007AFF;
    border-bottom: 2px solid #007AFF;
}


.fade-enter-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>
