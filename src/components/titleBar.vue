<template>
  <div class="user-header">
    <img class="header-avatar" v-if="userInfo" :src="userInfo.avatar_large">
    <span class="header-name">{{userInfo.name}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'titleBar',
    data () {
      return {}
    },
    props: {
      userInfo: {
        type: Object,
        default: function () {
          return { message: 'hello' }
        }
      }
    }
  }
</script>

<style lang="css" rel="stylesheet/css">
  .user-header .header-avatar {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    margin-top: .84rem;
    border: 1px solid rgba(0, 0, 0, .05);
  }

  .user-header .header-name {
    flex: 1;
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    font-weight: bolder;
    color: rgb(20, 23, 26);
    line-height: 3.5rem;
    padding-left: 1.2rem;
  }

  .list-padding {
    padding-top: 4.5rem;
  }

  .user-header {
    width: 100%;
    height: 3.5rem;
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
</style>
