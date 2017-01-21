<template>
  <div class="hello">
    <span class="title">Home</span>
    <span v-on:click="toUser">点击去用户中心</span>
    <ol>
      <li v-for="article in artileList">
        {{ article.title}}
      </li>
    </ol>
  </div>
</template>

<script>
  import fetchData from '../util/fetchData';
  export default {
    name: 'home',
    data: function () {
      return {
        userName: 'lijingwen',
        artileList: []
      }
    },
    methods: {
      toUser: function (event) {
        Router.push({path: '/user'})
      }
    },
    mounted: function (e) {
      console.log(e, 11);

    },
    route: {
      data (transition) {
        fetchData.getTopics('share', 1, 5)
          .then(res=> {
            console.log(res, 222)
            this.artileList = res.data;
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .title {
    font-size: 2rem;
  }
</style>
