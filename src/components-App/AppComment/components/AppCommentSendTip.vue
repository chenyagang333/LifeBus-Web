<template>
  <Transition name="slide-fade">
    <span class="sendIng" v-if="sendIng">发送中...</span>
  </Transition>
  <span class="sendError" v-if="sendError">发送失败!</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  sendIng?: boolean;
  sendError?: boolean;
}>();
</script>

<style scoped>
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  /* transition: all 0.3s ease-out; */
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from {
}
.slide-fade-leave-to {
  width: 0 !important;
}

.sendIng {
  color: var(--el-color-info-light-3);
  width: 60px;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
}
.sendError {
  color: var(--el-color-danger-light-3);
}
</style>
