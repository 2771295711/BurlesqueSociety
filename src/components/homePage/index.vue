<template>
  <div class="homePageStyle">
    <div class="backgroundImgTop"></div>
    <div class="carouselAndDescribeStyle">
      <el-carousel class="el-carousel" height="510px" indicator-position="none">
        <el-carousel-item v-for="item in carouselList" :key="item">
          <div class="carousel-item">
            <img class="carousel-item-img" :src="item.fileUrl" alt="" />
            <div class="carousel-item-content"></div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
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
      carouselList: [
        { fileUrl: "https://picsum.photos/200/300?key=1", name: "carousel1" },
        { fileUrl: "https://picsum.photos/200/300?key=2", name: "carousel2" },
        { fileUrl: "https://picsum.photos/200/300?key=3", name: "carousel3" },
      ],
    };
  },
};
</script>

<style scoped>
.homePageStyle {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.backgroundImgTop {
  width: 100%;

  height: 45vh;
  background: linear-gradient(to right, #0074d9, #8a2be2, #ff69b4);
}
.carouselAndDescribeStyle {
  width: 90%;
  height: 510px;
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
.el-carousel {
  border-radius: 20px;
}
.carousel-item {
  display: flex;
}
.carousel-item-img {
  opacity: 0.3;
  width: 50%;
  position: relative; /* 添加此行 */
}

.carousel-item-content {
  width: 50%;
  background-color: pink;
}
</style>
