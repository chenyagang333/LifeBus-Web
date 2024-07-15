<template>
  <div class="HeaderBc" :style="{ height: showTopImg ? '' : '0px' }">
    <img :src="imgUrl" />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app/app";
import { computed, ref } from "vue";
defineProps<{
  showTopImg: boolean;
}>();
const AppStore = useAppStore(); //

const imgUrl = computed(() =>
  AppStore.theme === "light"
    ? new URL("@/assets/home/hope.jpg", import.meta.url).href
    : new URL("@/assets/home/123.jpg", import.meta.url).href
);
</script>

<style scoped lang="scss">
.HeaderBc {
  height: 155px;
  width: 100%;
  background-color: #ffffff;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   background-position: center; /* 负值表示往上移动 */
  overflow: hidden;

  // background-position: center top -240px; /* 负值表示往上移动 */
  // transition: height 0.3s ease-in-out;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select:none;
  }
}
.HeaderBcLight {
  background-image: url("@/assets/home/hope.jpg");
}
.HeaderBcDark {
  background-image: url("@/assets/home/123.jpg");
}
</style>
