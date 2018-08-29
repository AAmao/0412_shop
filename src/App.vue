<template>
  <div id="app">
    <router-view/>
    <!--<FooterGuide v-show=""/>-->
    <FooterGuide v-show="$route.meta.showFooter"/>  <!--利用路由绑定特定信息  显示隐藏-->
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqAddress} from './api'
  export default {
//  async mounted(){
//     const result = await reqAddress('41.20038,116.36867')
//     console.log(result)
//   },

    components: {
      FooterGuide
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
