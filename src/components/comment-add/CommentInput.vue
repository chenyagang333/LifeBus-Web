<template>
  <div
    ref="commentInputContainer"
    class="CommentInput radius-overflow"
    :class="{ isColumn: isColumn }"
  >
    <div class="contentCoat" @click="CustomInputRef.focusTextArea(true)">
      <div class="content" ref="contentRef">
        <el-scrollbar max-height="100px" style="padding-right: 10px">
          <CustomInput
            ref="CustomInputRef"
            placeholder="发送消息"
            fontSize="14px"
            @click.stop=""
          ></CustomInput>
        </el-scrollbar>
      </div>
    </div>
    <div class="options" :style="{ width: `${optionsWidth}px` }">
      <emotion
        placement="bottom-start"
        :imgBaseUrl="appStore.fileBaseURL"
        @enter-emotion="(src: string) => enterEmotion(src)"
      ></emotion>
      <i class="bi bi-card-image"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import CustomInput from "./CustomInput.vue";
import { useAppStore } from "@/stores/app/app";
import emotion from "./emotion/index.vue";

const emit = defineEmits<{
  (e: "heightHandler", height: number): void;
}>();
const appStore = useAppStore();

const contentRef = ref<any>();
const CustomInputRef = ref<any>();
const commentInputContainer = ref();
const optionsWidth = 100; // 选项宽度
const defaultHeight = 40; // 默认容器高度
let containerHeight:number = 0 // 容器高度
const getCommentInputContainerBoundingClientRect = () => {
  return commentInputContainer.value.getBoundingClientRect();
};
const getcontentRefBoundingClientRect = () => {
  return contentRef.value.getBoundingClientRect();
};

const observeCustomInput = () => {
  const containerWidth = getCommentInputContainerBoundingClientRect().width;
  const input = getcontentRefBoundingClientRect();
  const inputWidth = input.width;
  let columnState;
  if (inputWidth > containerWidth - optionsWidth - 15) {
    columnState = true;
  } else {
    columnState = false;
  }
  if (isColumn.value !== columnState) {
    isColumn.value = columnState;
  }
  const height = input.height + (isColumn.value ? defaultHeight : 0)
  if (containerHeight !== height) {
    containerHeight = height
    emit("heightHandler",containerHeight );
  }
};

const isColumn = ref<boolean>(false);

onMounted(() => {
  const myObserver = new ResizeObserver((entries) => {
    observeCustomInput();
  });
  myObserver.observe(contentRef.value);
});

const enterEmotion = (src: string) => {
  CustomInputRef.value.enterEmotion(src);
};
</script>

<style scoped lang="scss">
.CommentInput {
  background-color: var(--jinn-bg3);
  border: 0.5px solid var(--jinn-bg3);
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  width: 100%;
  display: flex;
  min-height: 40px;
  &:focus-within {
    border: 0.5px solid var(--jinn-text-color2);
  }
  .comment-input {
    padding: 10px;
    padding-right: 0px;
    width: fit-content;
    height: 100%;
  }
  .contentCoat {
    height: 100%;
    cursor: text;
    flex: 1;
    .content {
      height: 100%;
      width: fit-content;
    }
  }
  .options {
    height: 40px;
    display: flex;
    align-items: center;
  }
}
.isColumn {
  flex-direction: column;
  align-items: flex-end;
  .contentCoat {
    width: 100%;
  }
}
</style>
