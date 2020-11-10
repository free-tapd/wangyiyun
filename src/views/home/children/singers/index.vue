<template>
  <div class="singer-container">
    <div class="menu-list">
      <!-- 分类列表 -->
      <div class="sort">
        <span class="a1">分类(默认热门):</span>
        <span class="a2">华语男</span>
        <span class="a2">华语女</span>
        <span class="a2">欧美男</span>
        <span class="a2">欧美女</span>
        <span class="a2">华语组合</span>
        <span class="a2">欧美组合</span>
      </div>
      <!-- 字母列表 -->
      <div class="letter">
        <span class="a1">首字母:</span>
        <span class="a2">A</span>
        <span class="a2">B</span>
        <span class="a2">C</span>
        <span class="a2">D</span>
        <span class="a2">E</span>
        <span class="a2">F</span>
      </div>
      <!-- 歌手列表 -->
      <div class="list">
        <div class="singer-list" v-for="(item, index) in sing" :key="index">
          <div class="singer-img">
            <img :src="item.img1v1Url" alt="" />
          </div>
          <div class="singer-name">{{ item.name }}</div>
        </div>

        <!-- <div class="singer-list">
          <div class="singer-img">
            <img src="../../../../assets/image/gs.jpg" alt="" />
          </div>
          <div class="singer-name">薛之谦</div>
        </div>
        <div class="singer-list">
          <div class="singer-img">
            <img src="../../../../assets/image/singer.jpg" alt="" />
          </div>
          <div class="singer-name">周杰伦</div>
        </div> -->
      </div>
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
      sing: [],
      musicList: {},
    });
    const { ctx } = getCurrentInstance();
    console.log(ctx.$http);
    const getBanner = () => {
      ctx.$http.get("/toplist/detail").then((res) => {
        console.log(res);
        state.banners = res.list;
        console.log(state.banners);
      });
    };
    const getSing = () => {
      ctx.$http.get("/toplist/artist").then((res) => {
        console.log(res);
        state.sing = res.list.artists;
        console.log(state.sing);
      });
    };
    // const getList = () => {
    //   ctx.$http.get("personalized").then((res) => {
    //     state.musicList = res;
    //   });
    // };
    onMounted(() => {
      getBanner();
      getSing();
      //getList();
    });
    return {
      ...toRefs(state),
      getBanner,
      getSing,
    };
  },
  components: {
    Search,
    Swiper,
  },
};
</script>
<style scoped lang="less">
.singer-container {
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
  .menu-list {
    background: #f2f3f4;
    min-height: 180px;
    width: 1007px;
    .sort {
      text-align: left;
      background: #f2f3f4;
      padding: 5px 0px;
      overflow: hidden;

      .a1 {
        padding: 5px 0px;
        font-size: 14px;
        color: grey;
      }
      .a2 {
        padding: 5px;
        font-size: 14px;
        color: #000;
      }
    }
    .letter {
      text-align: left;
      background: #f2f3f4;
      padding: 5px 0px;

      .a1 {
        padding: 5px 0px;
        font-size: 14px;
        color: grey;
      }
      .a2 {
        padding: 5px;
        font-size: 14px;
        color: #000;
      }
    }
  }
  .list {
    margin: 0 auto;
    .singer-list {
      height: 60px;
      min-width: 997px;
      margin: 0px 5px;
      padding: 5px 0px;
      //  rgb(228, 228, 228)
      border-bottom: 1px solid rgb(228, 228, 228);
      .singer-img {
        float: left;
        border-radius: 3px;
        width: 50px;
        height: 50px;
        img {
          width: 50px;
          height: 50px;
        }
      }
      .singer-name {
        float: left;
        font-size: 14px;
        // color: rgb(46, 48, 48);
        color: #000;
        font-weight: 500;
        height: 50px;
        line-height: 50px;
        margin-left: 25px;
      }
    }
  }
}
</style>
  