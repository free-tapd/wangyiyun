<template>
  <div class="music-container">
    <div class="top-bg">
      <Search v-model:foo="value" :placeholder="placeholder" />
      <div class="category-title">
        <router-link to="/recommend">推荐</router-link>
        <router-link to="/singers">歌手</router-link>
        <router-link to="/rank">排行榜</router-link>
      </div>
      <Swiper :banners="banners" />
    </div>
    <div class="music-list">
      <van-row>
        <van-col
          span="8"
          v-for="(item, index) in musicList.result"
          :key="index"
        >
          <div class="img-wrapper">
            <img :src="item.picUrl" alt="" />
          </div>
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
  .top-bg {
    // position: absolute;
    // top: -300px;
    height: 200px;
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
        color: rgb(241, 241, 241);
        background: rgb(212, 68, 57);
        padding: 3px 0px;
        font-weight: 700;
      }
    }
  }
  .music-list {
    width: 98%;
    margin: 0 auto;
    margin-top: 60px;
    .img-wrapper {
      height: 120px;
      img{
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
}
</style>
