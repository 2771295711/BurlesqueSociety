<template>
  <dash-board @handCheckDashBoard="handleCheckDashBoardClick"></dash-board>
  <div class="bodyStyle">
    <transition name="slide" mode="out-in">
      <component :is="currentView" v-if="loadedComponents[currentView]"/>
    </transition>
  </div>
</template>

<script>
import dashBoard from "@/components/dashboard/index.vue";

export default {
  name: "burlesqueSociety",
  components: {
    dashBoard
  },
  data() {
    return {
      currentView: 'homePage',
      loadedComponents: {
        homePage: false,
        produceInfo: false,
        callUs: false,
        checkMore: false
      }
    }
  },
  mounted() {
    this.handleCheckDashBoardClick("homePage")
  },
  methods: {
    handleCheckDashBoardClick(val) {
      console.log(`${val}`)
      this.currentView = val
      this.loadComponent(val)
    },
    async loadComponent(componentName) {
      try {
        await import(`@/components/${componentName}/index.vue`)
        this.loadedComponents[componentName] = true
      } catch (error) {
        console.error(`Error loading component ${componentName}:`, error)
      }
    },
  },
}
</script>

<style scoped>
.bodyStyle {
  width: 100%;
  height: 100vh;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
