<template>
  <hugsPopoverWrap distance="15" position="br" animation="dance">
    <template #animation>
      <el-icon size="23"><ChatDotRound /></el-icon>
    </template>
    <template #second>私信</template>
    <template #popover>
    </template>
  </hugsPopoverWrap>
  <div class="UserChat">
    <div
      class="left-UserChatList"
      :style="{ width: `calc(${listWidth} + 10px)` }"
    >
      <div class="header">
        <div class="text" :style="{ opacity: isCollapse ? '0' : '1' }">
          私信
        </div>
        <div
          class="handler"
          v-if="openDialog"
          @click="isCollapse = !isCollapse"
        >
          <i
            :class="[
              'bi',
              `bi-text-indent-${isCollapse ? 'left' : 'right'}`,
            ]"
          ></i>
        </div>
      </div>
      <el-scrollbar max-height="500px">
        <div class="contentList" :style="{ width: listWidth }">
          <div class="contentListInner" :style="{ width: listOpenWidth }">
            <UserChatList
              @clickItem="(data:UserDialog) => openDialogHandler(data)"
            ></UserChatList>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <Transition name="rightDialog">
      <div class="right-Dialog" v-if="openDialog">
        <UserChatDialog v-if="showUserChatDialog"></UserChatDialog>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
import UserChatList from "./UserChatList.vue";
import UserChatDialog from "./UserChatDialog.vue";
import hugsPopoverWrap from "@/components/hugs-popover-wrap/hugs-popover-wrap.vue";
import { UserDialog } from "./type.ts";

const openDialog = ref<boolean>(false);
const isCollapse = ref<boolean>(false);
const listOpenWidth = "280px";
const listCollapseWidth = "50px";
const listWidth = computed(() =>
  isCollapse.value ? listCollapseWidth : listOpenWidth
);
const openDialogHandler = async (data: UserDialog) => {
  if (!openDialog.value) {
    openDialog.value = true;
  }
  UserDialogData.value = data;
  showUserChatDialog.value = false;
  await nextTick();
  showUserChatDialog.value = true;
};

const UserDialogData = ref<UserDialog>(); // 点击某一项的临时数据
const showUserChatDialog = ref<boolean>(false);

</script>

<style scoped lang="scss">

.hugs-popover-enter-active,
.hugs-popover-leave-active {
  transition: all 0.1s ease-in-out;
}

.hugs-popover-enter-from,
.hugs-popover-leave-to {
  opacity: 0;
  // width: 0;
}
.UserChat {
  border-radius: var(--el-border-radius-base);
  background-color: var(--jinn-color1);
  border: 1px solid var(--el-border-color);
  padding: 10px;
  margin-top: 600px;
  display: flex;
  .left-UserChatList {
    overflow: hidden;
    transition: width 0.3s ease-in-out;
    border-right: 1px solid var(--el-border-color);
    .header {
      position: relative;
      height: 30px;
      color: var(--jinn-text-color1);
      font-size: 18px;
      .text,
      .handler {
        position: absolute;
        top: 0;
      }
      .text {
        transition: opacity 0.3s ease-in-out;
        left: 0;
      }
      .handler {
        font-size: 29px;
        cursor: pointer;
        right: 0;
      }
    }
    .contentList {
      overflow: hidden;
    transition: width 0.3s ease-in-out;
    padding-right: 10px;
      .contentListInner {
        width: 100%;
      }
    }
  }
  .right-Dialog {
    width: 300px;
    height:300px;
  }
}
</style>
