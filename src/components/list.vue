<template>
  <div class="list">
    <div>------------------------------------------------</div>
    <div>------------------------------------------------</div>
    <div>-----------------下边是list组件------------------</div>
    <div>{{section}}</div>
    <ul>
      <li v-for="item in artileList">
        {{item.title}} ----- {{item.tab}}
      </li>
    </ul>
  </div>
</template>

<script>
  import fetchData from '../util/fetchData';
  export default {
    name: 'child',
    props: ['section'],
    data: function () {
      return {
        artileList: []
      }
    },
    watch: {
      section: function (a) {
        console.log(a)
        var self = this
        fetchData.getTopics(this.section, 1, 3)
          .then(res=> {
            self.artileList = res.data;
          })
      }
    },
    methods: {

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
