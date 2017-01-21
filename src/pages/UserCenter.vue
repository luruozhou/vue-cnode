<template>
  <div class="hello">
    <span>userInfo</span>
    <span class="userName">userName:{{userName}}</span>
  </div>
</template>

<script>
  export default {
    name: 'userCenter',
    data () {
      return {
        userName: 'lijingwen'
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
