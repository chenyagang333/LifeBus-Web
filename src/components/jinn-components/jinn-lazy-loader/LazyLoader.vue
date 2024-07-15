<template>
  <slot v-if="load"></slot>
  <div
    v-else
    class="box"
    ref="box"
    :style="{ width: width, height: height }"
  ></div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, onUnmounted, ref } from "vue";

defineProps<{
  width: string;
  height: string;
}>();

const box = ref();
const load = ref<boolean>(false);

let intersectionObserver: IntersectionObserver | null;
onMounted(() => {
  intersectionObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      // 如果 isIntersecting 为 true，则目标视口内，
      // 我们不需要做任何事情。
      if (entries[0].isIntersecting) {
        load.value = true;
        intersectionObserver!.unobserve(box.value);
        intersectionObserver = null;
      }
    }
  );
  // 开始监听
  intersectionObserver.observe(box.value);
});

onBeforeUnmount(() => {
  if (intersectionObserver) {
    intersectionObserver.unobserve(box.value);
  }
});
</script>

<style scoped>
.box {
  background-color: var(--el-fill-color-light);
}
</style>
