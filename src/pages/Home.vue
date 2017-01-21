<template>
  <div class="hello">
    <span class="title">Home</span>
    <span v-on:click="toUser">点击去用户中心</span>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        userName: 'lijingwen'
      }
    },
    methods: {
      toUser: function (event) {
        Router.push({path:'/user'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .title{
    font-size: 24px;
  }
</style>
