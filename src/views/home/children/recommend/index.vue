<template lang="">
  <div class="recommend">
     <div class="music-list">
      <Swiper :banners="banners" />
      <h1 class="title">推荐歌单</h1>
      <van-row type="flex" justify="space-around" class="music-list_container">
        <van-col
          style="width:32%"
          v-for="(item, index) in musicList.result"
          :key="index"
        >
          <div class="img-wrapper">
            <div class="decorate"><span class="iconfont play"></span></div>
            <img :src="item.picUrl" alt="" />
          </div>
          <div class="desc">{{ item.name }}</div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import Swiper from "@/components/swiper.vue";
import Search from "@/components/search.vue";
import { reactive, toRefs, getCurrentInstance, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      value: "",
      placeholder: "输入音乐",
      banners: [],
      musicList: {},
    });
    const { ctx } = getCurrentInstance();
    console.log(ctx.$http);
    const getBanner = () => {
      ctx.$http.get("banner").then((res) => {
        console.log(res);
        state.banners = res.banners;
        console.log(state.banners);
      });
    };
    const getList = () => {
      ctx.$http.get("personalized").then((res) => {
        state.musicList = res;
      });
    };
    onMounted(() => {
      getBanner();
      getList();
    });
    return {
      ...toRefs(state),
      getBanner,
    };
  },
  components: {
    Search,
    Swiper,
  },
};
</script>
<style lang="less" scoped>
   .music-list {
    position: fixed;
    left: 0;
    right: 0;
    // width: 98%;
    margin: 0 auto;
    z-index: 1;
        overflow-y: scroll;
    height: 600px;
    // margin-top: 60px;
    h1{
      background-color: #fff;
          font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    text-align: left;
    line-height: 60px;
    }
    .music-list_container{
      width: 98%;
      background-color: #fff;
      margin: 0 auto;
    }
    .img-wrapper {
      height: 120px;
      position: relative;
      .decorate {
        z-index: 1;
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
        width: 100%;
        height: 100%;
        display: block;
        border-radius:3px ;
      }
    }
    .desc {
      overflow: hidden;
      margin-top: 2px;
      padding: 0px 2px;
      height: 50px;
      text-align: left;
      font-size: 12px;
      line-height: 1.4;
      color: rgb(46, 48, 48);
    }
  }
</style>