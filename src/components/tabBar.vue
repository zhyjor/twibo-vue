<template>
  <div class="bar-wrapper">
    <a @click="tabClick('home')" :class="[index === 'home' ? 'select':'','flex-item']">
      <div class="svg-wrapper">
        <svg viewBox="0 0 24 24" class="rn-4qtqp9 rn-yyyyoo rn-lwhw9o rn-dnmrzs rn-bnwqim rn-m6rgpd rn-lrvibr">
          <g>
            <path
              d="M22.58 7.35L12.475 1.897a1 1 0 0 0-.95 0L1.425 7.35A1.002 1.002 0 0 0 1.9 9.231c.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398a1 1 0 0 0 .95-1.759zM12 15.435a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5z"></path>
          </g>
        </svg>
      </div>
    </a>
    <a @click="tabClick('search')" :class="[index === 'search' ? 'select':'','flex-item']">
      <div class="svg-wrapper">
        <svg viewBox="0 0 24 24" class="rn-4qtqp9 rn-yyyyoo rn-lwhw9o rn-dnmrzs rn-bnwqim rn-m6rgpd rn-lrvibr">
          <g>
            <path
              d="M21.53 20.47l-3.66-3.66A8.98 8.98 0 0 0 20 11a9 9 0 1 0-9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66a.746.746 0 0 0 1.06 0 .747.747 0 0 0 .002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
      </div>
    </a>
    <a @click="tabClick('notify')" :class="[index === 'notify' ? 'select':'','flex-item']">
      <div class="svg-wrapper">
        <svg viewBox="0 0 24 24" class="rn-4qtqp9 rn-yyyyoo rn-lwhw9o rn-dnmrzs rn-bnwqim rn-m6rgpd rn-lrvibr">
          <g>
            <path
              d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03a.75.75 0 0 0 .447 1.353h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514a.747.747 0 0 0-.263-.838zM12 20.478a2.84 2.84 0 0 1-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path>
          </g>
        </svg>
      </div>
    </a>
    <a @click="tabClick('message')" :class="[index === 'message' ? 'select':'','flex-item']">
      <div class="svg-wrapper">
        <svg viewBox="0 0 24 24" class="rn-4qtqp9 rn-yyyyoo rn-lwhw9o rn-dnmrzs rn-bnwqim rn-m6rgpd rn-lrvibr">
          <g>
            <path
              d="M19.25 3.018H4.75A2.753 2.753 0 0 0 2 5.77v12.495a2.754 2.754 0 0 0 2.75 2.753h14.5A2.754 2.754 0 0 0 22 18.265V5.77a2.753 2.753 0 0 0-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367a.81.81 0 0 1-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83a2.265 2.265 0 0 0 2.52.001l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path>
          </g>
        </svg>
      </div>
    </a>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: 'tabBar',
    data () {
      let index = 'home'
      return {
        index: index
      }
    },
    methods: {
      tabClick (index) {
        this.index = index
        this.$emit('tab', {index: index})
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .bar-wrapper {
    box-direction: normal;
    box-orient: horizontal;
    flex-direction: row;
    height: 3.5rem;
    background-color: rgb(255, 255, 255);
    position: relative;
    display: flex;
    margin: 0;
    padding: 0;
    .select {
      color: #1da1f2;
      &:after {
        content: '';
        background-color: #1da1f2;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
    .flex-item {
      align-items: center;
      display: flex;
      color: #657786;
      flex-direction: column;
      flex-grow: 1 !important;
      justify-content: center;
      position: relative;
    }
    .svg-wrapper {
      z-index: 0;
      position: relative;
      padding: 0;
      min-width: 0px;
      min-height: 0px;
      margin: 0;
      box-direction: normal;
      box-orient: vertical;
      flex-direction: column;
      flex-basis: auto !important;
      flex-shrink: 0 !important;
      display: flex;
      box-sizing: border-box;
      box-align: stretch;
      align-items: stretch;
      svg {
        height: 1.75rem;
        user-select: none;
        max-width: 100%;
        vertical-align: text-bottom;
        fill: currentcolor;
        display: inline-block;
        position: relative;
      }
    }
  }
</style>
