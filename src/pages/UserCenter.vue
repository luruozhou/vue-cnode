<template>
  <div class="hello">
    <span>userInfo</span>
    <span class="userName">userName:{{userName}}</span>
    <span v-on:click="toHome">点击回主页</span>
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
