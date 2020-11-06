<template>
  <div class="music-container">
    <Search v-model:foo="value" :placeholder="placeholder" />
    <div class="selected">
      <div class="category-title">
        <router-link to="/recommend">推荐</router-link>
        <router-link to="/singers">歌手</router-link>
        <router-link to="/rank">排行榜</router-link>
      </div>
      <div class="before"></div>
    </div>
    <router-view></router-view>
   
  </div>
</template>
<script>
import Search from "@/components/search.vue";
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      value: "",
      placeholder: "输入音乐",
    });
    return {
      ...toRefs(state),
    };
  },
  components: {
    Search,
  },
};
</script>
<style lang="less" scoped>
.music-container {
  background-color: #fff;
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
    .before {
      position: absolute;
      // top: 50px;
      height: 150px;
      width: 100%;
      background: rgb(212, 68, 57);
    }
  }
 
}
</style>
