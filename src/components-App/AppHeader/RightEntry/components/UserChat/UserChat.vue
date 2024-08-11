<template>
  <div class="UserChat">
    <!-- 左侧 -->
    <div
      class="left-UserChatList"
      :style="{ width: `calc(${listWidth} + 10px)` }"
    >
      <!-- 顶部 -->
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
            :class="['bi', `bi-text-indent-${isCollapse ? 'left' : 'right'}`]"
          ></i>
        </div>
      </div>
      <!-- 消息列表 -->
      <el-scrollbar height="500px">
        <div class="contentList" :style="{ width: listWidth }">
          <div class="contentListInner" :style="{ width: listOpenWidth }">
            <UserChatList
              @clickItem="(data:UserDialog) => openDialogHandler(data)"
            ></UserChatList>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <!-- 右侧 -->
    <div class="right-Dialog" :style="{ width: openDialog ? '533px' : '0' }">
      <div class="UserChatDialog" style="width: 533px">
        <!-- 顶部 -->
        <div class="header">
          <div class="name">{{ UserDialogData.toUserName }}</div>
          <div class="options">
            <div class="BtnOpt" @click="ExitSession()">退出会话</div>
            <HugsPopoverWrap distance="15" position="br">
              <div class="Dot_3">···</div>
              <template #popover>
                <div class="DialogOptions radius-overflow">
                  <JinnButton type="lucency">免打扰</JinnButton>
                  <JinnButton type="lucency">置顶聊天</JinnButton>
                  <JinnButton type="lucency">删除聊天</JinnButton>
                  <JinnButton type="lucency">举报</JinnButton>
                  <JinnButton type="lucency">拉黑</JinnButton>
                </div>
              </template>
            </HugsPopoverWrap>
            <div class="BtnOpt" @click="$emit('close')">
              <i class="bi bi-x-lg"></i>
            </div>
          </div>
        </div>
        <div class="content" style="height: 500px">
          <el-scrollbar
            height="100%"
            style="padding-right: 10px"
            :style="{ height: `calc(500px - ${commentInputHeight}px)` }"
          >
            <UserChatDialog v-if="showUserChatDialog" :data="UserDialogData">
            </UserChatDialog>
          </el-scrollbar>
          <CommentInput
            @heightHandler="(height:number) => commentInputHeight = height"
          ></CommentInput>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from "vue";
import UserChatList from "./UserChatList.vue";
import UserChatDialog from "./UserChatDialog.vue";
import { UserDialog } from "./type.ts";
import JinnButton from "@/components/jinn-components/jinn-button/JinnButton.vue";
import CommentInput from "@/components/comment-add/CommentInput.vue";
import HugsPopoverWrap from "@/components/hugs-popover-wrap/HugsPopoverWrap.vue";

defineEmits<{
  (e: "close"): void;
}>();

const openDialog = ref<boolean>(false); // 会话框是否开启
defineExpose({ openDialog });
const isCollapse = ref<boolean>(false); // 是否展开左侧列表
const listOpenWidth = computed(() => (openDialog.value ? "240px" : "280px")); // 打开时的宽度
const listCollapseWidth = "55px"; // 左侧列表收起时的宽度
const listWidth = computed(() =>
  isCollapse.value ? listCollapseWidth : listOpenWidth.value
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

const UserDialogData = ref<UserDialog>({} as UserDialog); // 点击某一项的临时数据
const showUserChatDialog = ref<boolean>(false);
const ExitSession = () => {
  openDialog.value = false;
  if (isCollapse.value) {
    isCollapse.value = false;
  }
};

const commentInputHeight = ref<number>(40);
</script>

<style scoped lang="scss">
.UserChat {
  border-radius: var(--el-border-radius-base);
  background-color: var(--jinn-color1);
  border: 1px solid var(--el-border-color);
  padding: 10px;
  // margin-top: 600px;
  display: flex;
  .left-UserChatList {
    overflow: hidden;
    transition: width 0.3s ease-in-out;
    .header {
      position: relative;
      height: 36px;
      color: var(--jinn-text-color1);
      font-size: 18px;
      width: 100%;
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
        right: 10px;
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
    transition: width 0.3s ease-in-out;
    overflow: hidden;
    .UserChatDialog {
      border-left: 1px solid var(--el-border-color);
      width: 100%;
      height: 100%;
      padding: 0 0 0 20px;
      display: flex;
      flex-direction: column;
      .header {
        width: 100%;
        height: 36px;
        display: flex;
        justify-content: space-between;
        padding-right: 10px;
        align-items: start;
        .name {
          color: var(--jinn-text-color1);
          font-size: 17px;
        }
        .options {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 16px;

          .BtnOpt,
          .Dot_3 {
            color: var(--jinn-text-color2);
            cursor: pointer;
            &:hover {
              color: var(--jinn-text-color1);
            }
          }
          .Dot_3 {
            font-size: 22px;
          }
          .DialogOptions {
            width: 140px;
            padding: 10px;
            background-color: var(--jinn-bg8);
            box-shadow: var(--el-box-shadow);
          }
        }
      }
      .content {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
