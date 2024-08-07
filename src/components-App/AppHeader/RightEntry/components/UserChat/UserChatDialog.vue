<template>
  <div class="UserChatDialogContent">
    <Message
      v-for="(i, index) in messages"
      :key="index"
      :userId="i.fromUserId"
      :toUserAvatar="isGroupMSG ? i.fromUserAvatar! : data.toUserAvatar"
      :postMessages="i.postMessages"
      :userName="i.fromUserName"
      :isGroupMSG="isGroupMSG"
    >
    </Message>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UserDialog, UserDialogMessage } from "./type.ts";
import Message from "./components/Message.vue";

const props = defineProps<{
  data: UserDialog;
}>();

const isGroupMSG = props.data.userGroupsId > 0;

const messages = ref<UserDialogMessage[]>([
  {
    userDialogId: 0,
    fromUserId: 0,
    toUserId: 2,
    postMessages: "你好呀嗯嗯你也是",
    markRead: true,
    retractMessage: false,
    createTime: "2038-03-09",
    messageType: 1,
  },
  {
    userDialogId: 0,
    fromUserId: 2,
    toUserId: 1,
    postMessages: "你好呀",
    markRead: true,
    retractMessage: false,
    createTime: "2030-03-03",
    messageType: 1,
  },
  {
    userDialogId: 0,
    fromUserId: 0,
    toUserId: 2,
    postMessages: "你好呀嗯嗯你也是",
    markRead: true,
    retractMessage: false,
    createTime: "2038-03-09",
    messageType: 1,
  },
  {
    userDialogId: 0,
    fromUserId: 2,
    toUserId: 1,
    postMessages: "你好呀",
    markRead: true,
    retractMessage: false,
    createTime: "2030-03-03",
    messageType: 1,
  },
  {
    userDialogId: 0,
    fromUserId: 0,
    toUserId: 2,
    postMessages: "你好呀嗯嗯你也是",
    markRead: true,
    retractMessage: false,
    createTime: "2038-03-09",
    messageType: 1,
  },
  {
    userDialogId: 0,
    fromUserId: 2,
    toUserId: 1,
    postMessages: "你好呀",
    markRead: true,
    retractMessage: false,
    createTime: "2030-03-03",
    messageType: 1,
  },
  {
    userDialogId: 0,
    fromUserId: 2,
    toUserId: 1,
    postMessages: "你好呀嗯嗯你也是",
    markRead: true,
    retractMessage: false,
    createTime: "2038-03-09",
    messageType: 1,
  },
  {
    userDialogId: 0,
    fromUserId: 0,
    toUserId: 2,
    postMessages: "你好呀",
    markRead: true,
    retractMessage: false,
    createTime: "2030-03-03",
    messageType: 1,
  },
  {
    userDialogId: 0,
    fromUserId: 0,
    toUserId: 1,
    postMessages: "你好呀嗯嗯你也是",
    markRead: true,
    retractMessage: false,
    createTime: "2038-03-09",
    messageType: 1,
  },
  {
    userDialogId: 0,
    fromUserId: 0,
    toUserId: 1,
    postMessages: "你好呀",
    markRead: true,
    retractMessage: false,
    createTime: "2030-03-03",
    messageType: 1,
  },
  {
    userDialogId: 0,
    fromUserId: 0,
    toUserId: 1,
    postMessages: "你好呀嗯嗯你也是",
    markRead: true,
    retractMessage: false,
    createTime: "2038-03-09",
    messageType: 1,
  },
  {
    userDialogId: 0,
    fromUserId: 2,
    toUserId: 1,
    postMessages: "你好呀",
    markRead: true,
    retractMessage: false,
    createTime: "2030-03-03",
    messageType: 1,
  },
  {
    userDialogId: 0,
    fromUserId: 0,
    toUserId: 1,
    postMessages: "你好呀嗯嗯你也是",
    markRead: true,
    retractMessage: false,
    createTime: "2038-03-09",
    messageType: 1,
  },
]);
</script>

<style scoped lang="scss">
.UserChatDialogContent {
  width: 100%;
  .message {
    height: 40px;
  }
}
</style>
