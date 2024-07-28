<template>
  <div class="UserChatList">
    <JinnButton
      v-for="(i, index) in data"
      :key="index"
      type="lucency"
      @click="clickItem(i, index)"
    >
      <el-avatar :size="40" :src="i.toUserAvatar" />
      <div class="content">
        <div class="userName">
          {{ i.toUserName }}
        </div>
        <div class="info">
          <div class="lastMessage">{{ i.lastMessage }}</div>
          <div class="lastPostMessageTime">{{ i.lastPostMessageTime }}</div>
        </div>
      </div>
    </JinnButton>
  </div>
</template>

<script setup lang="ts">
import JinnButton from "@/components/jinn-components/jinn-button/JinnButton.vue";
import { UserDialog } from "./type.ts";

const emit = defineEmits<{
  (e: "clickItem", data: UserDialog): void;
}>();

let nowIndex = -1;
const clickItem = (data: UserDialog, index: number) => {
  if (nowIndex !== index) {
    emit("clickItem", data);
  }
};

const data: UserDialog[] = [
  {
    userDialogId: 0,
    toUserId: 0,
    toUserAvatar:
      "https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_oAGrCzVgIAN0PCAABAdhbQoAhECegAfiytCNxN~tplv-8yspqt5zfm-300x300.webp?x-expires=1722225600&x-signature=EItyDOzEirxR1LTsdH9n4sg5QfA%3D&from=2480802190&s=profile&se=false&sc=avatar&l=202407271249437F5309B36D1E35784BD5",
    toUserName: "_chenyagang",
    lastMessage: "a啊对对对嗯呢",
    lastPostMessageTime: "2024.7.27",
    unreadCount: 33,
  },
  {
    userDialogId: 1,
    toUserId: 1,
    toUserAvatar:
      "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_9222c3f38b23422aa898bc4b953b7807.jpeg?from=3782654143",
    toUserName: "砍砍",
    lastMessage: "大苏打撒旦分给他任何人一号月台",
    lastPostMessageTime: "2024.7.28",
    unreadCount: 120,
  },
  {
    userDialogId: 0,
    toUserId: 0,
    toUserAvatar:
      "https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_oAGrCzVgIAN0PCAABAdhbQoAhECegAfiytCNxN~tplv-8yspqt5zfm-300x300.webp?x-expires=1722225600&x-signature=EItyDOzEirxR1LTsdH9n4sg5QfA%3D&from=2480802190&s=profile&se=false&sc=avatar&l=202407271249437F5309B36D1E35784BD5",
    toUserName: "_chenyagang",
    lastMessage: "a啊对对对嗯呢",
    lastPostMessageTime: "2024.7.27",
    unreadCount: 33,
  },
  {
    userDialogId: 1,
    toUserId: 1,
    toUserAvatar:
      "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_9222c3f38b23422aa898bc4b953b7807.jpeg?from=3782654143",
    toUserName: "砍砍",
    lastMessage: "大苏打撒旦分给他任何人一号月台",
    lastPostMessageTime: "2024.7.28",
    unreadCount: 120,
  },
  {
    userDialogId: 0,
    toUserId: 0,
    toUserAvatar:
      "https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_oAGrCzVgIAN0PCAABAdhbQoAhECegAfiytCNxN~tplv-8yspqt5zfm-300x300.webp?x-expires=1722225600&x-signature=EItyDOzEirxR1LTsdH9n4sg5QfA%3D&from=2480802190&s=profile&se=false&sc=avatar&l=202407271249437F5309B36D1E35784BD5",
    toUserName: "_chenyagang",
    lastMessage: "a啊对对对嗯呢",
    lastPostMessageTime: "2024.7.27",
    unreadCount: 33,
  },
  {
    userDialogId: 1,
    toUserId: 1,
    toUserAvatar:
      "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_9222c3f38b23422aa898bc4b953b7807.jpeg?from=3782654143",
    toUserName: "砍砍",
    lastMessage: "大苏打撒旦分给他任何人一号月台",
    lastPostMessageTime: "2024.7.28",
    unreadCount: 120,
  },
  {
    userDialogId: 0,
    toUserId: 0,
    toUserAvatar:
      "https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_oAGrCzVgIAN0PCAABAdhbQoAhECegAfiytCNxN~tplv-8yspqt5zfm-300x300.webp?x-expires=1722225600&x-signature=EItyDOzEirxR1LTsdH9n4sg5QfA%3D&from=2480802190&s=profile&se=false&sc=avatar&l=202407271249437F5309B36D1E35784BD5",
    toUserName: "_chenyagang",
    lastMessage: "a啊对对对嗯呢",
    lastPostMessageTime: "2024.7.27",
    unreadCount: 33,
  },
  {
    userDialogId: 1,
    toUserId: 1,
    toUserAvatar:
      "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_9222c3f38b23422aa898bc4b953b7807.jpeg?from=3782654143",
    toUserName: "砍砍",
    lastMessage: "大苏打撒旦分给他任何人一号月台",
    lastPostMessageTime: "2024.7.28",
    unreadCount: 120,
  },
  {
    userDialogId: 0,
    toUserId: 0,
    toUserAvatar:
      "https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_oAGrCzVgIAN0PCAABAdhbQoAhECegAfiytCNxN~tplv-8yspqt5zfm-300x300.webp?x-expires=1722225600&x-signature=EItyDOzEirxR1LTsdH9n4sg5QfA%3D&from=2480802190&s=profile&se=false&sc=avatar&l=202407271249437F5309B36D1E35784BD5",
    toUserName: "_chenyagang",
    lastMessage: "a啊对对对嗯呢",
    lastPostMessageTime: "2024.7.27",
    unreadCount: 33,
  },
  {
    userDialogId: 1,
    toUserId: 1,
    toUserAvatar:
      "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_9222c3f38b23422aa898bc4b953b7807.jpeg?from=3782654143",
    toUserName: "砍砍",
    lastMessage: "大苏打撒旦分给他任何人一号月台",
    lastPostMessageTime: "2024.7.28",
    unreadCount: 120,
  },
  {
    userDialogId: 0,
    toUserId: 0,
    toUserAvatar:
      "https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_oAGrCzVgIAN0PCAABAdhbQoAhECegAfiytCNxN~tplv-8yspqt5zfm-300x300.webp?x-expires=1722225600&x-signature=EItyDOzEirxR1LTsdH9n4sg5QfA%3D&from=2480802190&s=profile&se=false&sc=avatar&l=202407271249437F5309B36D1E35784BD5",
    toUserName: "_chenyagang",
    lastMessage: "a啊对对对嗯呢",
    lastPostMessageTime: "2024.7.27",
    unreadCount: 33,
  },
  {
    userDialogId: 1,
    toUserId: 1,
    toUserAvatar:
      "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_9222c3f38b23422aa898bc4b953b7807.jpeg?from=3782654143",
    toUserName: "砍砍",
    lastMessage: "大苏打撒旦分给他任何人一号月台",
    lastPostMessageTime: "2024.7.28",
    unreadCount: 120,
  },
  {
    userDialogId: 0,
    toUserId: 0,
    toUserAvatar:
      "https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_oAGrCzVgIAN0PCAABAdhbQoAhECegAfiytCNxN~tplv-8yspqt5zfm-300x300.webp?x-expires=1722225600&x-signature=EItyDOzEirxR1LTsdH9n4sg5QfA%3D&from=2480802190&s=profile&se=false&sc=avatar&l=202407271249437F5309B36D1E35784BD5",
    toUserName: "_chenyagang",
    lastMessage: "a啊对对对嗯呢",
    lastPostMessageTime: "2024.7.27",
    unreadCount: 33,
  },
  {
    userDialogId: 1,
    toUserId: 1,
    toUserAvatar:
      "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_9222c3f38b23422aa898bc4b953b7807.jpeg?from=3782654143",
    toUserName: "砍砍",
    lastMessage: "大苏打撒旦分给他任何人一号月台",
    lastPostMessageTime: "2024.7.28",
    unreadCount: 120,
  },
];
</script>

<style scoped lang="scss">
.UserChatList {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .JinnButton {
    height: 57px;
    gap: 10px;
    .content {
      //   flex: 1;
      font-size: 13px;
      .userName {
        color: var(--jinn-text-color1);
      }
      width: calc(100% - 50px);
      .info {
        color: var(--jinn-text-color2);
        display: flex;
        align-items: center;
        overflow: hidden;
        .lastMessage,
        .lastPostMessageTime {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .lastMessage {
          flex: 1; /* 允许左侧文本容器在必要时缩小 */
          flex-grow: 1; /* 允许左侧文本容器在可用空间内增长 */
        }
      }
    }
  }
}
</style>
