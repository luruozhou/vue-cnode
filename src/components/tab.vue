<template>
  <div class="tab">
    <div>当前的板块名：{{section}}</div>
    <div @click="changeSection">点我改变section</div>
  </div>
</template>

<script>
  export default {
    name: 'child',
    data: function () {
      return {
        tabList:[]
      }
    },
    props:['section'],
    methods:{
      changeSection:function () {
        var arr=['ask','good','job','share','all'];
        var i =parseInt(Math.random()*arr.length);
        this.$emit('change',{sectionName:arr[i]})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  li {

  a {
    color: #f00;
  }

  }

  a {
    color: #42b983;
  }
</style>
