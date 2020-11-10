<template>
  <div class="music-container">
    <div class="music-list">
      <h1>官方榜</h1>
      <ul  v-for="(item, index) in banners" :key="index" v-show="index<4" @click="goDetail(item)">
        <li>
          <img :src="item.coverImgUrl" alt class="imgs" />
          <i>{{item.updateFrequency}}</i>
        </li>
        <ul class="musicplay"> 
            <li  v-for="(item, index) in item.tracks" :key="index" style ="second">{{++index}}. {{item.first}} - {{item.second}}</li>
        </ul>
      </ul>
    </div>
    <div class="music-listquery ">
        <h1>全球榜</h1>
        <ul class="ullist" >
        <li class="lilist" v-for="(item, index) in banners" :key="index" >
          <img :src="item.coverImgUrl" alt class="imgs" />
        </li>
        </ul>
    </div>
  </div>
</template>
<script>
import Search from "@/components/search.vue";
import Swiper from "@/components/swiper.vue";
import { useRouter } from "vue-router";
import { reactive, toRefs, getCurrentInstance, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      value: "",
      placeholder: "输入音乐",
      banners: [],
      musicList: {}
    });
    const {push} = useRouter()
    const { ctx } = getCurrentInstance();
    console.log(ctx.$http);
    const getBanner = () => {
      ctx.$http.get("/toplist/detail").then(res => {
        console.log(res);
        state.banners = res.list;
        console.log(state.banners);
      });
    };
    const goDetail = (item)=>{
        push({
        name: "recommendDetail",
        params:{id:item.id}
      })
    }
    onMounted(() => {
      getBanner();
    });
    return {
      ...toRefs(state),
      getBanner,
      goDetail
    };
  },
  components: {
    Search,
    Swiper
  }
};
</script>
<style lang="less" scoped>
.music-container {
  //background-color: #fff;
  .selected {
    width: 100%;
    background: rgb(212, 68, 57);
    z-index: 1;
    .category-title {
      height: 44px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      a {
        background: rgb(212, 68, 57);
        padding: 3px 0px;
        font-size: 14px;
        color: rgb(228, 228, 228);
      }
    }
  }
  .music-list {
      background: #f2f3f4;
    h1 {
      text-align: left;
      background: #f2f3f4;
      padding: 10px 5px;
      font-weight: 700;
      font-size: 14px;
      color: rgb(46, 48, 48);
    }
    .imgs {
      width: 100px;
      height: 100px;
      border-radius: 3px;
      text-align: left;
    }
    i {
      font-size: 10px;
      position: absolute;
      left: 14px;
      /* bottom: 52px; */
      top: 80px;
      color: rgb(241, 241, 241);
    }
    ul {
      overflow: hidden;
      position: relative;
      li {
        float: left;
        margin-left: 5px; 
        color: grey;
        font-size: 12px;
        text-align: left;
    
      }
      
    }
    .musicplay{
        padding:10px;
        li{
            width:100%;
            line-height: 26px;
        }
    }
   
  }
  .music-listquery{
       h1 {
      text-align: left;
      background: #f2f3f4;
      padding: 10px 5px;
      font-weight: 700;
      font-size: 14px;
      color: rgb(46, 48, 48);
    }
    .imgs {
      width: 120px;
      height: 120px;
      border-radius: 3px;
      text-align: left;
    }
    .ullist{
        display: flex;
        flex-wrap: wrap;
        padding-left: 5px;
        .lilist{
            flex: 0 0 33%;
            text-align: left;
        }
    }
  }
}
</style>
