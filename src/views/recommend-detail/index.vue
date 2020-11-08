<template>
  <div class="recommend-detail">
    <div class="front-cover">
      <div class="background">
        <div class="filter"></div>
      </div>
      <div class="img_wrapper">
        <div class="decorate"></div>
        <img
          src="http://p2.music.126.net/ylmsEsHAHcOIrIda9YAWsg==/109951165436375856.jpg"
          alt=""
        />
        <div class="play_count">
          <i class="iconfont play"></i><span class="count">1.3万</span>
        </div>
      </div>
      <div class="desc_wrapper">
        <div class="title">过去十年最火的英文歌曲Top250</div>
        <div class="person">
          <div class="avatar">
            <img
              src="http://p1.music.126.net/mrxPGml82XWKB8ufyFgg8Q==/109951163135733539.jpg"
              alt=""
            />
          </div>
          <div class="name">楼船夜雪天 <i class="iconfont icon-jiantou"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>
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
}
</style>
