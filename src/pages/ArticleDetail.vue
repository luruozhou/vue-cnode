<template>
    <div class="article">
        <h1 @click="back">back</h1>
        <article>
            <header>
                <h3>{{article.title}}</h3>
                <ul>
                    <li>发布于 {{article.create_at|resetTime}}</li>
                    <!--<li>作者 {{article.author.loginname}}</li>-->
                    <li>{{article.visit_count}} 次浏览</li>
                    <li>来自 {{article.tab|resetTab}}</li>
                </ul>
            </header>
            <section class="content" v-html="article.content"></section>
        </article>
        <p class="replyCount">{{article.reply_count}}回复</p>
        <article>
            <div v-for="(reply,i) in article.replies" class="reply">
                <img class="avatar" v-bind:src="reply.author.avatar_url" alt="">
                <span>{{reply.author.loginname}} {{i+1}}楼·{{reply.create_at|resetTime}}</span>
                <div class="content" v-html="reply.content">
                </div>
            </div>
        </article>
    </div>
</template>
<script>
    import fetchData from '../util/fetchData';
    var timeago = require("timeago.js");
    var timeagoInstance = new timeago();

    export default {
        name: 'article',
        data() {
            return {
                article: {},
            }
        },
        created: function () {
            var self = this;
            console.log(this.$route)
            var id = this.$route.params.id;
            fetchData.getTopicInfo(id)
                .then(res => {
                    if (res.success) {
                        self.article = res.data;
                    }
                })
        },
        filters: {
            resetTab: function (tab) {
                var tabList = {
                    ask: "问答",
                    share: "分享",
                    job: "招聘",
                    good: "精华"
                };
                return tabList[tab];
            },
            resetTime: function (time) {
                return timeagoInstance.format(time, 'zh_CN');
            }
        },
        // watch:{
        //     article:function(){
        //         this.article.create_at=timeagoInstance.format(this.article.create_at, 'zh_CN');
        //         console.log("change");
        //     }

        // },
        methods: {
            back: function () {
                console.log(111)
                let from = this.$route.query.from || '/';
                Router.push({ path: from })
            }
        }
    }
</script>

<style scoped lang="scss">
    $bgc:#e1e1e1;
    $w:#ffffff;
    $br:0.15rem;
    .replyCount{
        font-size: 0.7rem;
        color: darken($bgc,30%);
        margin:0;
        padding:0;
    }
    .article{
        margin:0;
        padding:1rem 0.5rem;
        overflow: hidden;
        background-color: $bgc;
        
    }
    article{
        background-color: $w;
        border-radius:$br;
        padding:0 0.4rem ;
        margin:1rem 0;
        
    }
    header{
        border-bottom: 1px solid $bgc;
        padding:0.5rem 0;
    }
    h3{
        word-break:break-all;
        text-align: center;   
    }
    ul{
        color: darken($bgc,40%);
        padding:0;
        font-size:0.8rem;
        margin:0;
    }
    li{
        display: inline-block;
        margin: 0;
        padding:0;
        &:before{
         content: "·" ; 
        }
    }
    .content{
        padding:1px 1rem  ;
        font-size: 0.7rem;
        text-align:justify;
         word-wrap:break-word;
         word-break:break-all;
        /*white-space:*/
        
    }
    .reply{
        border-bottom:3px solid $bgc;
        padding :0.5rem 0;
        &:nth-last-of-type(1){
            border:none;
        }
        .content{
            padding:0 0.5rem 0 1rem;
        }
    }
    .avatar{
        width: 2rem;
        border-radius: 30%;
        vertical-align: top;
        & + span{
            font-size:0.6rem;
            padding:0 0 0 0.5rem;
        }
    }
</style>