<template>
    <div class="publish">
        <div class="pubBut">
            <span class="iconfont">&#xe698;</span> 发布
        </div>
        <div class="item">
            <select>  
                <option value ="2">分享</option>  
                <option value="3">问答</option>  
                <option value="4">招聘</option>  
            </select> 
        </div>
        <div class="item">
            <input type="text" placeholder="标题字数 10 字以上">
        </div>
        <div class="item">
            <textarea placeholder="内容字数 30 字以上"></textarea>
        </div>
        
    </div>
</template>
<script>
import fetchData from '../util/fetchData';
export  default{
    name:'publish',
    components:{
    },
    data:function(){
        return{
            
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
.item{
    border-bottom:1px solid;
}
select{
    display: block;
    font-size: 1rem;
     padding:0.5rem 0;
     box-sizing: border-box;
}
option{
    font-size: 1rem;
    padding:0.5rem 0;
}
textarea,input{
    width:100%;
    border:none;
    
}
.pubBut{
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
        left: 35%;
    }
}
</style>