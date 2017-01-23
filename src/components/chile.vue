<template>
  <div class="hello">
    <h1 @click="changeName">{{ msg }}</h1>
    <h1>{{ uName }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'child',
    data: function () {
      return {

      }
    },
    props:['msg','uName'],
    methods:{
      changeName:function () {
        console.log(this.$emit);
        this.$emit("changemalide",'aaa',1)
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
