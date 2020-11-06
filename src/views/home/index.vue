<template>
  <div class="music-container">
      <Search v-model:foo="value" :placeholder="placeholder" />
    <div class="selected">
      <div class="category-title">
        <router-link to="/recommend">推荐</router-link>
        <router-link to="/singers">歌手</router-link>
        <router-link to="/rank">排行榜</router-link>
      </div>
    </div>
    <div class="music-list">
      <Swiper :banners="banners" />
      <div class="before"></div>
      <van-row type="flex" justify="space-around">
        <van-col
          style="width:32%"
          v-for="(item, index) in musicList.result"
          :key="index"
        >
          <div class="img-wrapper">
            <div class="decorate"> <span class="iconfont play"></span></div>
            <img :src="item.picUrl" alt="" />
          </div>
          <div class="desc">{{ item.name }}</div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import Search from "@/components/search.vue";
import Swiper from "@/components/swiper.vue";
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
.music-container {
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
    .before{
      position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    background: rgb(212, 68, 57);
    z-index: 1;
    }
    position: fixed;
    left: 0;
    right: 0;
    width: 98%;
    margin: 0 auto;
    // margin-top: 60px;
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
}
</style>
