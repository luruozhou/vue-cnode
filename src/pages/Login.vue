<template>
    <div class="login">
        <back></back>
        <div class="center">
            <input type="text" v-model="accesstoken">
            <div class="but" @click="login">登陆</div>
        </div>
    </div>
</template>
<script>
import back from   '../components/back.vue';
import fetchData from '../util/fetchData';
export  default{
    name:'login',
    components:{
        back
    },
    data:function(){
        return{
            accesstoken:"",
        }
    },
    methods:{
        login:function(){
            // 8f5dfb9a-ae41-4124-9476-53337f0d69c2
            var self=this;
            localStorage.accesstoken=this.accesstoken;
            console.log(localStorage.accesstoken);
            fetchData.login(this.accesstoken)
                .then(res=>{
                    // if(res.success){
                    //     console.log(res)
                    // }
                    console.log(res);
                })
        }
    }
}
</script>
<style scoped lang="scss">
$green:#80bd01;
.login{
    margin:0px;
}
.center{
    margin-top: 50%;
    transform: translate(0,-50%);
    
}
input{
    width:80%;
    font-size: 1.2rem;
    margin:0 auto 1rem auto;
}
.but{
    width: 80%;
    margin:0 auto;
    text-align: center;
    background-color:$green;
    box-sizing:border-box; 
    color:#ffffff;
    font-size: 1.1rem;
    padding:0.5rem 0.3rem;
    border-radius: 0.2rem;
}
</style>