<template>
  <div class="recommend-detail">
    <div class="front-cover">
      <div class="background" :style="{backgroundImage:`url(${playlist.coverImgUrl})`}">
        <div class="filter"></div>
      </div>
      <div class="img_wrapper">
        <div class="decorate"></div>
        <img
          :src="playlist.coverImgUrl"
          alt=""
        />
        <div class="play_count">
          <i class="iconfont iconyinle"></i><span class="count">1.3万</span>
        </div>
      </div>
      <div class="desc_wrapper">
        <div class="title">{{playlist.name}}</div>
        <div class="person">
          <div class="avatar">
            <img
            :src="playlist.creator.avatarUrl"
              alt=""
            />
          </div>
          <div class="name">
            {{playlist.creator.nickname}} <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
          <p v-if="false">{{playlist.description}}</p>
      </div>
    </div>
    <ul class="music-set">
      <li>
        <span class="iconfont iconpinglun"></span>
        <p>评论</p>
      </li>
      <li>
        <span class="iconfont iconshoucang"></span>
        <p>点赞</p>
      </li>
      <li>
        <span class="iconfont iconjiahao"></span>
        <p>收藏</p>
      </li>
      <li>
        <span class="iconfont icongengduo"></span>
        <p>更多</p>
      </li>
    </ul>
    <div class="singer-list_music">
      <div class="first_line">
        <div class="play_all">
          <i class="iconfont iconzanting"></i
          ><span>播放全部 <span class="sum">(共{{playlist.tracks.length}}首)</span></span>
        </div>
        <div class="add_list">
          <i class="iconfont iconjiahao"></i><span>收藏(350.4万)</span>
        </div>
      </div>
      <ul class="singer-list">
        <li v-for="(item,index) in playlist.tracks" :key="index">
          <span class="index">{{index+1}}</span>
          <div class="info">
            <span>{{item.name}}</span>
            <span >{{item.author}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {reactive,toRefs,getCurrentInstance,onMounted} from "vue"
import { useRouter,useRoute } from "vue-router";
export default {
  setup(){
    const state = reactive({
      playlist:{creator:{},tracks:{}},
      privileges:{}
    })
    const {ctx} = getCurrentInstance()
    const {params} = useRoute()
    const getSingDetail = ()=>{
      ctx.$http.get('playlist/detail',params).then(res=>{
        console.log(res);
        const {playlist,privileges} =res
        playlist.tracks.map(v=>{
          let ar =v.ar.map(o=>o.name)
          v.author = ar.join('/')
        })
        state.playlist =playlist
        state.privileges =privileges
      })
    }
    onMounted(()=>{
      getSingDetail()
    })
    return{
      ...toRefs(state)
    }
  }
}
</script>
<style lang="less" scoped>
.recommend-detail {
  .front-cover {
    background-size: 100%;
    padding: 5px 20px 50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 275px;
    position: relative;

    .background {
      background: url(http://p2.music.126.net/ylmsEsHAHcOIrIda9YAWsg==/109951165436375856.jpg)
        no-repeat;
      background-size: cover;
      position: absolute;
      width: 100%;
      height: 100%;
      filter: blur(10px);

      .filter {
        position: absolute;
        z-index: 10;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgba(7, 17, 27, 0.2);
      }
    }

    .img_wrapper {
      width: 120px;
      height: 120px;
      position: relative;

      .decorate {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 35px;
        border-radius: 3px;
        background: linear-gradient(
          rgba(110, 110, 110, 0.4),
          rgba(255, 255, 255, 0)
        );
      }

      img {
        width: 120px;
        height: 120px;
        border-radius: 3px;
      }

      .play_count {
        position: absolute;
        right: 2px;
        top: 2px;
        font-size: 12px;
        line-height: 15px;
        color: rgb(241, 241, 241);
      }
    }

    .desc_wrapper {
      z-index: 1;
      flex: 1 1 0%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 120px;
      padding: 0px 10px;

      .title {
        max-height: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgb(241, 241, 241);
        font-weight: 700;
        line-height: 1.5;
        font-size: 16px;
        text-align: left;
      }

      .person {
        display: flex;

        .avatar {
          width: 20px;
          height: 20px;
          margin-right: 5px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }

      .name {
        line-height: 20px;
        font-size: 14px;
        color: rgb(187, 168, 168);
      }
    }
  }

  .music-set {
    position: relative;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 30px 20px;
    margin: -100px 0px 0px;
    color: rgb(241, 241, 241);

    span {
      font-size: 20px;
    }

    p {
      display: flex;
      flex-direction: column;
      line-height: 20px;
      text-align: center;
      font-size: 12px;
      z-index: 1000;
      font-weight: 500;
    }
  }

  .singer-list_music {
    border-radius: 10px;
    opacity: 0.98;
    background: rgb(255, 255, 255);

    .first_line {
      box-sizing: border-box;
      display: flex;
      padding: 10px 0px;
      margin-left: 10px;
      position: relative;
      -webkit-box-pack: justify;
      justify-content: space-between;
      border-bottom: 1px solid rgb(228, 228, 228);

      .play_all {
        display: inline-block;
        line-height: 24px;
        color: rgb(46, 48, 48);
      }

      .add_list {
        display: flex;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        position: absolute;
        right: 0px;
        top: 0px;
        bottom: 0px;
        width: 130px;
        line-height: 34px;
        background: rgb(212, 68, 57);
        color: rgb(241, 241, 241);
        font-size: 0px;
        border-radius: 3px;
        vertical-align: top;
        span {
          font-size: 14px;
          line-height: 34px;
        }
      }
    }
    .singer-list {
      li {
        display: flex;
        height: 60px;
        -webkit-box-align: center;
        align-items: center;
        .index {
          flex-basis: 60px;
          width: 60px;
          height: 60px;
          line-height: 60px;
          text-align: center;
        }
        .info {
          box-sizing: border-box;
          align-items: flex-start;
          flex: 1 1 0%;
          display: flex;
          height: 100%;
          padding: 5px 0px;
          flex-direction: column;
          justify-content: space-around;
          border-bottom: 1px solid rgb(228, 228, 228);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          span {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          span:last-child {
            font-size: 12px;
            color: rgb(187, 168, 168);
          }
        }
      }
    }
  }
}
</style>
