<template>
  <div class="loading running-loading pause">
    <div class="inner-wrapper">
      <span class="text">加载中, 请稍后...</span>
      <div class='bullets'>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'userCenter',
    data () {
      return {
        userName: 'lijingwen'
      }
    },
    methods: {
      toHome: function (event) {
        Router.push({path:'/'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  userName{
    color:#0f0
  }
</style>
