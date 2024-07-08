<template>
  <div class="dashBoardContain">
    <span class="logo-text">滑稽社</span>
    <div class="another-text">
      <span
        v-for="(item, index) in dashBoardInfo"
        :key="index"
        :data-value="item.value"
        :class="{ active: currentView === item.value }"
        @click="handClickText(item.value)"
        @mouseover="handleMouseOver(item.value)"
        @mouseout="handleMouseOut(item.value)"
      >
        {{ item.text }}
      </span>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "dashBoard",
  data() {
    return {
      dashBoardInfo: [
        { text: "首页", value: "homePage" },
        { text: "产品信息", value: "produceInfo" },
        { text: "联系我们", value: "callUs" },
        { text: "查看更多", value: "checkMore" },
      ],
      currentView: "homePage",
    };
  },
  mounted() {
    // 初始化选择的文本是蓝色被选择状态
    this.$el.querySelector(".another-text span:first-child").classList.add("active");
  },
  methods: {
    handClickText(val) {
      // 点击不同的文本，先清除被选中状态，然后在为当前选择的文本添加颜色
      this.$el.querySelectorAll(".another-text span").forEach((el) => {
        el.classList.remove("active");
      });
      this.$el
        .querySelector(`.another-text span[data-value="${val}"]`)
        .classList.add("active");
      // this.$emit("handCheckDashBoard", val);
      // 切换首页子路由
      router.push({
        path: `/burlesqueSociety/${val}`,
      });
    },
    handleMouseOver(val) {
      const targetSpan = this.$el.querySelector(
        `.another-text span[data-value="${val}"]`
      );
      targetSpan.classList.add("hovered-text");
    },
    handleMouseOut(val) {
      const targetSpan = this.$el.querySelector(
        `.another-text span[data-value="${val}"]`
      );
      targetSpan.classList.remove("hovered-text");
    },
  },
};
</script>

<style scoped>
.dashBoardContain {
  width: 100%;
  height: 10vh;
  background-color: #ffffff;
  min-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo-text {
  font-family: "Impact", sans-serif;
  font-size: 36px;
  color: #0077ff;
  width: 200px;
  text-align: center;
  letter-spacing: 2px;
  font-weight: bold;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.another-text {
  width: 30%;
  margin-left: auto;
  margin-right: 10%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.another-text span {
  font-family: "Impact", sans-serif;
  font-size: 18px;
  color: #000000;
  width: 100px;
  text-align: center;
  letter-spacing: 2px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s;
  flex-shrink: 0;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.another-text span.active {
  color: #2c7dfa;
}

.another-text span:hover {
  color: #2c7dfa;
}

.hovered-text {
  font-family: "Comic Sans MS" !important;
  /*font-size: 20px!important;*/
  transition: color 0.2s !important;
}
</style>
