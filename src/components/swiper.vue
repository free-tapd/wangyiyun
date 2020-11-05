<template lang="">
  <div class="swiper-container">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(v,i) in banners" :key="i"> <img :src="v.imageUrl" /></van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { Lazyload } from 'vant';
export default {
  props:{
    banners:Array
  }
}
</script>
<style lang="less" scoped>
  .swiper-container{
    position: relative;
    width: 98%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;
    .my-swipe{
      height: 100%;
    }
    img{
      max-width: 100%;
      display: block;
      height: 100%;
    }
  }
</style>