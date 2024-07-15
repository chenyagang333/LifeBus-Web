<template>
    <template v-if="isVideo">
      <i class="bi bi-play-fill"  @click="$emit('click')"></i>
      <video :src="src"/>
    </template>
    <template v-else>
      <img :src="_src" @click="$emit('click')" @error="imgLoadError">
      </img>
    </template>
</template>

<script setup lang="ts">
import { FileType, getFileTypeByFileName } from "@/utils/FileUtils/FileType";
import { ref } from "vue";
const props = withDefaults(
  defineProps<{
    src: string;
  }>(),
  {}
);

defineEmits<{
  (e:'click'):void
}>()
const _src = ref<string>(props.src)
const imgLoadError = () => {
  _src.value = new URL("@/assets/default/imageLoadError.png", import.meta.url).href
}
const isVideo = getFileTypeByFileName(props.src) === FileType.video; // 是视频
</script>

<style scoped lang="scss">
  .bi {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    font-size: 56px;
    z-index: 10;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      display: block;
      color: #f87c45;
      cursor: pointer;
    }
  }
video,
  img {
    border-radius: var(--el-border-radius-base);
    border: 0.1px solid var(--el-border-color);

  &:hover {
      /* 悬停时降低图片亮度，实现遮罩效果 */
      filter: brightness(90%);
    }
  }
  video {
    height: 100%;
    width: 100%;
    background-color: black;
  }
    img {
      object-fit: cover;
      cursor: -webkit-zoom-in;
      cursor: zoom-in;
      background-color: var(--el-fill-color-light);
  }
</style>
