<template>
    <div class="min">
        <back></back>
        <div class="userIndex">
            <img class="userImg" src="https://avatars.githubusercontent.com/u/17866189?v=3&s=120" alt="">
            <p>MsCtrl0</p>
            <p class="userInf">
                积分：5 注册时间：19小时前
            </p>
        </div>
        <div class="">
            <div>主题</div>
            <div>回复</div>
        </div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
</template>
<script>
import back from   '../components/back.vue';
import fetchData from '../util/fetchData';
export  default{
    name:'mine',
    components:{
        back
    },
    data:function(){
        return{
            accesstoken:"",
        }
    },
    methods:{

    }
}
</script>
<style scoped lang="scss">
$green:#80bd01;
.userIndex{
    border-top: 1px solid;
    background-color: lighten($green,1%);
    color:#ffffff;
    padding:0.6rem 0 ;
}
.userImg{
    display: block;
    margin:0.3rem auto 0.3rem auto ;
    width: 220px;
    height: 220px;
    border-radius: 50%;
}
p{
    text-align: center;
    padding:0.2rem;
    margin:0;
}
.userInf{
    color:lighten($green,45%);
    font-size: 0.7rem;
}
</style>