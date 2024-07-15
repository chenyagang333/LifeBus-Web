<template>
  <div class="RightEntryMobile">
    <div @click="drawer = true">
      <el-avatar v-if="userData" :src="FileIP + userData.userAvatar" />
      <el-avatar v-else> 登录 </el-avatar>
    </div>
    <el-drawer
      v-model="drawer"
      title="I'm outer Drawer"
      size="300px"
      :with-header="false"
      append-to-body
    >
      <!-- 用户签到 -->
      <div class="label" @click="appStore.signInVisible = true">
        <i class="bi bi-calendar-check"></i> <span>签到</span>
      </div>
      <!-- 用户信息 -->
      <template v-if="userData">
        <JinnCardUser
          :ellipsis="true"
          :avatarSrc="FileIP + userData.userAvatar"
          :userName="userData.userName"
          :content="userData.description"
          :AttentionCount="userData.attentionCount"
          :FansCount="userData.fansCount"
          :GetLikeCount="userData.getLikeCount"
          @handler="goUserPageHandler"
        >
        </JinnCardUser>
        <UserSelect @clickOption="drawer = false"></UserSelect>
      </template>
      <el-button
        v-else
        style="width: 100%"
        text
        bg
        @click="appStore.showLoginDialog = true"
        >点击登录
      </el-button>
      <!-- 系统配置 -->
      <div class="app-config-items">
        <div class="app-config-item">
          <el-button text @click="showLanguageOpt = !showLanguageOpt"
            >translate
            <el-icon><ArrowDown /></el-icon>
          </el-button>
          <div class="language-options" v-show="showLanguageOpt">
            <div class="language-option">
              <el-text class="mx-1">English</el-text>
            </div>
          </div>
        </div>
        <JinnButton>
          <span>Theme</span>
          <AppThemeSwitching></AppThemeSwitching>
        </JinnButton>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, nextTick, ref } from "vue";
import { useAppStore } from "@/stores/app/app";
import JinnCardUser from "@/components/jinn-components/JinnCardUser/JinnCardUser.vue";
import { useUserStore } from "@/stores/user/user";
import { storeToRefs } from "pinia";
import { goUserPage } from "@/views/Layout1/user/user";
import { useRouter } from "vue-router";
import useEventListenerPopstate from "@/hooks/useEventListenerPopstate";
import AppThemeSwitching from "@/components-App/AppThemeSwitching/index.vue";
import JinnButton from "@/components/jinn-components/jinn-button/JinnButton.vue";
import UserSelect from "./components/UserSelect.vue";

const app = getCurrentInstance();
const FileIP: string = app?.appContext.config.globalProperties.$FileIP;

const UserStore = useUserStore(); // 拿到管理用户信息的仓库
const { userData } = storeToRefs(UserStore); // 响应式的结构变量
const appStore = useAppStore();

const router = useRouter();

const { visible: drawer } = useEventListenerPopstate("RightEntryMobile");

const goUserPageHandler = () => {
  drawer.value = false;
  setTimeout(() => {
    if (userData.value) {
      goUserPage(router, userData.value.id);
    }
  }, 300);
};

const showLanguageOpt = ref<boolean>(false);
</script>

<style scoped lang="scss">
.RightEntryMobile {
  display: flex;
  align-items: center;
  padding: 10px;
}
.label {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  .bi {
    font-size: 17px;
  }
  > span {
    font-size: 16px;
    cursor: pointer;
  }
}
.app-config-items {
  width: 260px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
  .app-config-item {
    border-bottom: 1px solid var(--el-border-color);
    width: 100%;
    .el-button {
      cursor: pointer;
      width: 100%;
    }
    .language-options {
      .language-option {
        cursor: pointer;
        padding: 5px 0;
      }
    }
  }
  .JinnButton {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>
