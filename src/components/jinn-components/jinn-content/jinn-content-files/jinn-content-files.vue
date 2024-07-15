<template>
  <div class="jinn-content-files" :class="filesClass">
    <template v-if="urlLength === 1">
      <file :src="urls[0]" @click="$emit('clickFile', 0)"></file>
    </template>
    <template v-else>
      <div class="jinn-content-file" v-for="(url, index) in urls" :key="index">
        <file :src="url" @click="$emit('clickFile', index)"></file>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { FileType, getFileTypeByFileName } from "@/utils/FileUtils/FileType";
import file from "./jinn-content-file.vue";

const emit = defineEmits<{
  (e: "clickFile", index: number): void;
}>();

const props = defineProps<{
  urls: string[];
}>();
const filesClass: string[] = []; // 文件类型
const urlLength = props.urls?.length;
const updateFileClass = () => {
  if (urlLength === 1) {
    const isVideo = getFileTypeByFileName(props.urls[0]) === FileType.video; // 根据文件名获取类型
    if (isVideo) {
      filesClass.push("signalVideoUnit");
    } else {
      filesClass.push("signalImgUnit");
    }
  } else if (urlLength === 2 || urlLength === 4) {
    filesClass.push("TheSecondType");
  } else {
    filesClass.push("TheThirdType");
  }
};
updateFileClass();
</script>

<style scoped lang="scss">
.jinn-content-files {
  margin-top: 5px;
  .jinn-content-file {
    position: relative;
    overflow: hidden;
  }
}
.signalImgUnit {
  :deep(img) {
    max-height: 235px;
    max-width: 100%;
  }
}
.signalVideoUnit {
  position: relative;
  height: 305px;
  width: calc(100% - 20px);
}

.TheSecondType,
.TheThirdType {
  display: grid;
  gap: 4px;
  > .jinn-content-file {
    padding-top: 100%;
    // width: 100%;
    :deep(img),
    :deep(video) {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateZ(0);
    }
  }
}
.TheSecondType {
  max-width: 461px;
  width: 70%;
  grid-template-columns: repeat(2, 1fr);
}
.TheThirdType {
  max-width: 593px;
  width: 90%;
  grid-template-columns: repeat(3, 1fr);
}
</style>
