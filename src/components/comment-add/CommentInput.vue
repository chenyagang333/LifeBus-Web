<template>
  <div
    class="CommentInput radius-overflow"
    ref="commentInputContainer"
    :style="{ paddingBottom: rise ? '40px' : '' }"
  >
    <el-scrollbar max-height="100px" style="width: 100%; padding-right: 10px">
      <CustomInput
        ref="CustomInputRef"
        placeholder="发送消息"
        fontSize="14px"
        observeInput
        @observeInput="observeCustomInput"
      ></CustomInput>
    </el-scrollbar>
    <div class="options" :style="{ width: `${optionsWidth}px` }"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import CustomInput from "./CustomInput.vue";

const emit = defineEmits<{
  (e: "heightHandler", height: number): void;
}>();

const commentInputContainer = ref();
// const myObserver = new ResizeObserver((entries) => {
//   emit(
//     "heightHandler",
//     commentInputContainer.value.getBoundingClientRect().height
//   );
// });

// onMounted(() => {
//   myObserver.observe(commentInputContainer.value);
// });

const optionsWidth = 100;
const observeCustomInput = (entry: any, vc: any) => {
  emit(
    "heightHandler",
    commentInputContainer.value.getBoundingClientRect().height
  );
  const commentInputWidth =
    commentInputContainer.value.getBoundingClientRect().width;
  const inputWidth = vc.getBoundingClientRect().width;
  if (inputWidth > commentInputWidth - optionsWidth) {
    rise.value = true;
  } else {
    rise.value = false;
  }
  console.log("entry :>> ", commentInputWidth, inputWidth);
};

const rise = ref<boolean>(false);
</script>

<style scoped lang="scss">
.CommentInput {
  background-color: var(--jinn-bg3);
  border: 0.5px solid var(--jinn-bg3);
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  min-height: 40px;
  position: relative;
  &:focus-within {
    border: 0.5px solid var(--jinn-text-color2);
  }
  .comment-input {
    padding: 10px;
    padding-right: 0px;
    width: fit-content;
  }
  .options {
    height: 36px;
    background-color: red;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 1px;
    right: 1px;
  }
}
</style>
