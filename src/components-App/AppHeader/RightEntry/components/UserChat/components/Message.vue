<template>
  <div class="Message" :class="messageClass">
    <el-avatar :size="30" :src="avatarSRC" />
    <div class="MessageContent">
      <div class="MessageUserName" v-if="isGroupMSG">{{ userName }}</div>
      <div
        class="MessageInnerContent radius-overflow"
        v-html="postMessages"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useAppStore } from "@/stores/app/app";
import { useUserStore } from "@/stores/user/user";

const props = defineProps<{
  userId: number;
  toUserAvatar: string;
  postMessages: string;
  userName?: string;
  isGroupMSG?: boolean;
}>();

// const appStore = useAppStore();
const userStore = useUserStore();

const isMyMSG = userStore.userData?.id == props.userId;
const messageClass = isMyMSG ? "MyMSG" : "";
const avatarSRC = isMyMSG ? userStore.userData?.userAvatar : props.toUserAvatar;
</script>

<style scoped lang="scss">
.Message {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  .MessageContent {
    .MessageInnerContent {
      font-family: inherit;
      font-weight: 400;
      font-size: 13px;
      padding: 10px;
      background-color: var(--jinn-bg2);
      color: var(--jinn-text-color1);
    }
  }
}
.MyMSG {
  flex-direction: row-reverse;
  .MessageContent {
    .MessageInnerContent {
      background-color: #298cff;
      color: white;
    }
  }
}
</style>
