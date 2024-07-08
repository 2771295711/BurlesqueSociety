<template>
  <div class="homePageStyle">
    <div class="backgroundImgTop"></div>
    <div class="carouselAndDescribeStyle"></div>
    <div class="circleBlack"></div>
    <div class="backgroundImgBottom">
      <view class="footerIndex"> </view>
    </div>
  </div>
</template>

<script>
export default {
  name: "homePage",
  data() {
    return {
      // carouselList: [
      //   { fileUrl: require("https://picsum.photos/200/300"), name: "carousel1" },
      //   { fileUrl: require("https://picsum.photos/200/300"), name: "carousel2" },
      //   { fileUrl: require("https://picsum.photos/200/300"), name: "carousel3" },
      // ],
    };
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.backgroundImgTop {
  width: 100%;
  height: 45vh;
  background: linear-gradient(to right, #0074d9, #8a2be2, #ff69b4);
}
.carouselAndDescribeStyle {
  width: 90%;
  height: 45vh;
  display: flex;
  flex-direction: row;
  background: linear-gradient(to right, #0074d9, #8a2be2);
  border-radius: 20px;
  border: 1px solid white;
  margin-top: -35vh;
  z-index: 9999;
}
.backgroundImgBottom {
  width: 100%;
  height: 45vh;
  background-color: #1b1a1a;
  position: absolute;
  margin-top: 45vh;
}
.footerIndex {
  width: 80%;
  height: 20vh;
}
.circleBlack {
  width: 20%;
  height: 200px;
  border-radius: 50%;
  background-color: #1b1a1a;
  margin-left: auto;
  z-index: 9998;
  margin-top: -12%;
  margin-right: -5%;
}
</style>
