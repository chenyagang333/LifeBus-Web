<template>
  <div class="RightEntry" :class="headerUp ? 'RightEntryUp' : 'RightEntryDown'">
    <!-- 用户登录 信息 -->
    <HugsPopoverWrap
      distance="15"
      :openCard="!userData && !route.query.open_login_dialog"
      :animation="userData ? '' : 'dance'"
      @before-enter="onBeforeEnter()"
    >
      <UserDataReference v-if="userData" />
      <template #animation v-if="!userData">
        <UserDataNullReference>{{
          $t(lang + "loginBtn")
        }}</UserDataNullReference>
      </template>
      <template #popover>
        <UserDataPopover v-if="userData" />
        <UserDataNullPopover v-else />
      </template>
    </HugsPopoverWrap>
    <!-- 用户投稿 -->
    <hugsPopoverWrap
      distance="15"
      animation="dance"
      @before-enter="onBeforeEnter()"
    >
      <template #animation>
        <i class="bi bi-plus-square"></i>
      </template>
      <template #second>投稿</template>
      <template #popover>
        <UserMsgPopover v-if="userData" />
        <UserNullCard v-else> 登陆后即可发布作品 </UserNullCard>
      </template>
    </hugsPopoverWrap>
    <!-- 用户私信 -->
    <hugsPopoverWrap
      distance="15"
      :position="userData ? 'br' : 'bc'"
      animation="dance"
      :closeTrigger="computedUserChatOpenDialog"
      v-model="showUserChat"
      @before-enter="onBeforeEnter('msg')"
    >
      <template #animation>
        <i class="bi bi-chat-dots"></i>
      </template>
      <template #second>私信</template>
      <template #popover>
        <UserChat
          ref="userChatRef"
          v-if="userData"
          @close="() => (showUserChat = false)"
        ></UserChat>
        <UserNullCard v-else> 登陆后即可聊天 </UserNullCard>
      </template>
    </hugsPopoverWrap>
    <!-- 用户通知 -->
    <HugsPopoverWrap
      distance="15"
      class="message"
      animation="dance"
      @before-enter="onBeforeEnter()"
    >
      <template #animation>
        <!-- <i class="bi bi-envelope right-entry"></i> -->
        <i class="bi bi-bell"></i>
      </template>
      <template #second> <div style="width: 26px">通知</div></template>
      <template #popover>
        <!-- 已登录 -->
        <UserMsgPopover v-if="userData" />
        <!-- 未登录 -->
        <UserNullCard v-else>
          {{ $t(lang + "loginMsgCard1") }}
        </UserNullCard>
      </template>
    </HugsPopoverWrap>
    <!-- 语言切换 -->
    <HugsPopoverWrap
      distance="15"
      class="language"
      animation="dance"
      @before-enter="onBeforeEnter()"
    >
      <template #animation>
        <div style="width: 32px">
          <i class="bi bi-translate"></i>
          <i class="bi bi-chevron-down"></i>
        </div>
      </template>
      <template #second><div style="width: 26px">语言</div></template>
      <template #popover>
        <LanguagePopover />
      </template>
    </HugsPopoverWrap>
    <!-- 主题切换 -->
    <AppThemeSwitching />
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
import HugsPopoverWrap from "@/components/hugs-popover-wrap/HugsPopoverWrap.vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user/user";
import { useAppStore } from "@/stores/app/app";
import AppThemeSwitching from "@/components-App/AppThemeSwitching/index.vue";
import UserChat from "./components/UserChat/UserChat.vue";
import UserDataReference from "./components/UserDataReference.vue";
import UserDataNullReference from "./components/UserDataNullReference.vue";
import UserDataPopover from "./components/UserDataPopover.vue";
import UserDataNullPopover from "./components/UserDataNullPopover.vue";
import { rightEntryLanguage } from ".";
import UserMsgPopover from "./components/UserMsgPopover.vue";
import LanguagePopover from "./components/LanguagePopover.vue";
import UserNullCard from "./components/UserNullCard.vue";

defineProps<{
  headerUp: boolean;
}>();

const UserStore = useUserStore(); // 拿到管理用户信息的仓库
const appStore = useAppStore(); // app
const { userData,showUserChat } = storeToRefs(UserStore); // 响应式的结构变量

const route = useRoute();
const router = useRouter();

const lang = rightEntryLanguage; // 基本参数管理

if (route.query.open_login_dialog && !userData.value) {
  appStore.showLoginDialog = true;
}

const userChatRef = ref(); // 用户聊天会话组件实例
const computedUserChatOpenDialog = computed(() =>
  userChatRef.value && userChatRef.value.openDialog ? "click" : "hover"
);

const closeOther = "msgDisplay";
const onBeforeEnter = (type: string = closeOther) => {
  if (closeOther === type) {
    if (showUserChat.value) {
      showUserChat.value = false;
    }
  }
};
</script>

<style scoped lang="scss">
// 顶部右侧选项
.RightEntry {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
  @include mobile {
    display: none;
  }
  > div {
    // 统一样式
    padding: 0 11px;
    height: 50px;
  }
  .card {
    // 统一样式
    border: 1px solid var(--el-border-color);
    border-radius: 4px;
    background-color: var(--jinn-color1);
  }

  .theme {
    display: flex;
    align-items: center;
  }
}
.RightEntryUp {
  > div {
    color: #ffffff;
  }
  .login-text {
    border: 1.5px solid rgb(255, 255, 255);
  }
}
.RightEntryDown {
  > div {
    color: var(--jinn-text-color1);
  }
  .login-text {
    border: 1.5px solid var(--jinn-text-color1);
  }
}
</style>
