<template>
  <div class="UserSelect">
    <div class="options">
      <JinnButton @click="_goUserPage('like')">
        <div class="left"><i class="bi bi-heart-fill"></i> 我的喜欢</div>
        <div class="right">
          {{ userData?.likeCount }}
          <el-icon><ArrowRightBold /></el-icon>
        </div>
      </JinnButton>
      <JinnButton @click="_goUserPage('star')">
        <div class="left"><i class="bi bi-star-fill"></i> 我的收藏</div>
        <div class="right">
          {{ userData?.starCount }}
          <el-icon><ArrowRightBold /></el-icon>
        </div>
      </JinnButton>
      <JinnButton @click="_goUserPage('production')">
        <div class="left">
          <i class="bi bi-file-earmark-richtext"></i> 我的动态
        </div>
        <div class="right">
          {{ userData?.contentCount }}
          <el-icon><ArrowRightBold /></el-icon>
        </div>
      </JinnButton>
    </div>
    <div class="bottom">
      <div class="left" @click="logout">
        <i class="bi bi-box-arrow-right"></i>{{ $t(lang + "userCard4") }}
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user/user";
import { removeToken } from "@/utils/token";
import { goUserPage } from "@/views/Layout1/user/user";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import JinnButton from "@/components/jinn-components/jinn-button/JinnButton.vue";

const emit = defineEmits<{
  (e: "clickOption"): void;
}>();
//#region 语言管理
const lang = "Layout1."; // 基本参数管理

const UserStore = useUserStore(); // 拿到管理用户信息的仓库
const { userData } = storeToRefs(UserStore); // 响应式的结构变量
const router = useRouter();

const _goUserPage = (name: string) => {
  emit("clickOption");
  setTimeout(() => {
    goUserPage(router, userData.value?.id!, name);
  }, 300);
};
// 退出登录
const logout = () => {
  // UserStore.logOut()
  removeToken();
  userData.value = null;
};
</script>

<style scoped lang="scss">
.UserSelect {
  .options {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    border-bottom: 1px solid var(--el-border-color);
    > div {
      width: 100%;
      height: 39px;
      background-color: var(--jinn-bg3);
      margin-bottom: 10px;
      border-radius: var(--el-border-radius-base);
      cursor: pointer;
      color: var(--jinn-text-color1);
      margin-bottom: 10px;

      font-family: PingFang SC, DFPKingGothicGB-Regular, sans-serif;
      &:hover {
        background-color: var(--jinn-bg5);
      }
      .left,
      .right {
        display: flex;
        align-items: center;
      }
    }
    .bi-heart-fill {
      color: red;
    }
    .bi-star-fill {
      color: orange;
    }
    .bi-file-earmark-richtext {
      color: skyblue;
    }
  }
  .options > div,
  > .bottom {
    padding: 0 10px;
    font-size: 14.5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .bi {
      margin-right: 5px;
    }
  }
  > .bottom {
    margin-top: 10px;
    color: var(--jinn-text-color2);
    .left {
      cursor: pointer;
      &:hover {
        color: var(--jinn-text-color1);
      }
    }
  }
}
</style>
