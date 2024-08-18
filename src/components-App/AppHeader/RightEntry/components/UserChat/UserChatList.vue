<template>
  <div class="UserChatList">
    <template v-if="data.length > 0">
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
    </template>
    <template v-else>
      <el-empty description="还没有聊天" />
    </template>
  </div>
</template>

<script setup lang="ts">
import JinnButton from "@/components/jinn-components/jinn-button/JinnButton.vue";
import { UserDialog } from "./type.ts";
import { onMounted, ref } from "vue";
import { GetDialogAndGroupsByUserId } from "@/api/service-userchat/UserChat.ts";

const emit = defineEmits<{
  (e: "clickItem", data: UserDialog): void;
}>();

let nowIndex = -1;
const clickItem = (data: UserDialog, index: number) => {
  if (nowIndex !== index) {
    emit("clickItem", data);
  }
};

// const data: Partial<UserDialog>[] = [
// const data: any[] = [
//   {
//     userDialogId: 0,
//     toUserId: 0,
//     toUserAvatar:
//       "https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813_oAGrCzVgIAN0PCAABAdhbQoAhECegAfiytCNxN~tplv-8yspqt5zfm-300x300.webp?x-expires=1722225600&x-signature=EItyDOzEirxR1LTsdH9n4sg5QfA%3D&from=2480802190&s=profile&se=false&sc=avatar&l=202407271249437F5309B36D1E35784BD5",
//     toUserName: "_chenyagang",
//     lastMessage: "a啊对对对嗯呢",
//     lastPostMessageTime: "2024.7.27",
//     unreadCount: 33,
//   },
// ];

const data = ref<any[]>([]);

onMounted(() => {
  const res = GetDialogAndGroupsByUserId();
  console.log("res :>> ", res);
});
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
