<template>
  <div class="hello">
    <tab :section="section" v-on:change="setSection"></tab>
    <list :section="section"></list>
  </div>
</template>

<script>
//  import fetchData from '../util/fetchData';
  import list from '../components/list.vue';
  import tab from '../components/tab.vue';
  export default {
    name: 'home',
    components:{
      list,
      tab
    },
    data: function () {
      return {
        userName: 'lijingwen',
        section:'all'  // good job
      }
    },
    methods: {
      setSection:function (data) {
//        console.log(data);
        this.section=data.sectionName;
      }
    },
//    created: function (e) {
//      console.log(e, 11);
//
//      fetchData.getTopics('share', 1, 5)
//        .then(res=> {
//          console.log(res, 222)
//          this.artileList = res.data;
//        })
//
//    },
//    route: {
//      data (transition) {
////        fetchData.getTopics('share', 1, 5)
////          .then(res=> {
////            console.log(res, 333)
////            this.artileList = res.data;
////          })
//      }
//    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .title {
    font-size: 2rem;
    color:#f00
  }
</style>
