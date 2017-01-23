<template>
  <div class="hello">
    <span class="title" @click="changeName">Home</span>
    <span v-on:click="toUser">点击去用户中心</span>
    <achild msg="123" :uName="userName" v-on:changemalide="change2"></achild>
    <!--<ol>-->
      <!--<li v-for="article in artileList">-->
        <!--{{ article.title}}-->
      <!--</li>-->
    <!--</ol>-->
  </div>
</template>

<script>
  import fetchData from '../util/fetchData';
  import achild from '../components/chile.vue';
  export default {
    name: 'home',
    components:{
      achild
    },
    data: function () {
      return {
        userName: 'lijingwen',
        artileList: []
      }
    },
    methods: {
      toUser: function (event) {
        Router.push({path: '/user'})
      },
      changeName:function () {
        this.userName ="luruozhou"
      },
      change2:function (e,num) {
        console.log(e,num)
        this.userName='lijingwen2'
      }
    },
    created: function (e) {
      console.log(e, 11);
      fetchData.getTopics('share', 1, 5)
        .then(res=> {
          console.log(res, 222)
          this.artileList = res.data;
        })

    },
    route: {
      data (transition) {
        fetchData.getTopics('share', 1, 5)
          .then(res=> {
            console.log(res, 333)
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
    color:#f00
  }
</style>
