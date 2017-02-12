<template>
    <div class="back">
       <span class="iconfont">&#xe617;</span> 返回
    </div>
</template>
<script>
    export  default{
        name:'login',
        created:function(){
        },
        methods:{

        }
    }
</script>
<style scoped lang="scss">
$green:#80bd01;
.back{
    background-color: $green;
    margin:0px;    
    color: #ffffff;
    font-weight: bold;
    padding: 0.6rem 0;
    text-align: center;
    position: relative;
    font-size: 1.1rem;
    span{
        position: relative;
        right: 35%;
    }
}
</style>