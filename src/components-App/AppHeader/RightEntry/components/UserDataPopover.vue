<template>
  <div class="card-user card">
    <div class="header">
      <el-avatar
        :size="50"
        :src="userData?.userAvatar"
        @click="goUserPage(router, userData?.id!)"
      ></el-avatar>
      <div class="info">
        <div class="top">
          <span @click="goUserPage(router, userData?.id!)">{{
            userData?.userName
          }}</span>
        </div>
        <el-space class="bottom" :size="5" spacer="|">
          <span>关注 {{ userData?.attentionCount }}</span>
          <span>粉丝 {{ userData?.fansCount }}</span>
        </el-space>
      </div>
    </div>
    <UserSelect @clickOption="(name) => clickOption(name)"></UserSelect>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user/user";
import { useRouter } from "vue-router";
import hugsPopoverWrap from "@/components/hugs-popover-wrap/HugsPopoverWrap.vue";
import { goUserPage } from "@/utils-app/user";
import UserSelect from "./UserSelect.vue";

//#region 语言管理
const lang = "Layout1."; // 基本参数管理

const UserStore = useUserStore(); // 拿到管理用户信息的仓库
const { userData } = storeToRefs(UserStore); // 响应式的结构变量
const router = useRouter();

const clickOption = (name: string) => {
  goUserPage(router, userData.value?.id!, name);
};
</script>

<style scoped lang="scss">
.card-user {
  width: 256px;
  padding: 15px;
  border-radius: var(--el-border-radius-base);
  background-color: var(--jinn-color1);
  border: 1px solid var(--el-border-color);
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    .el-avatar {
      cursor: pointer;
    }
    .info {
      display: flex;
      flex-direction: column;
      width: calc(100% - 65px);
      font-family: PingFang SC, DFPKingGothicGB-Regular, sans-serif;
      .top {
        font-size: 15px;
        color: var(--jinn-text-color1);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        > span {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .bottom {
        font-size: 13px;
        color: var(--jinn-text-color1);
      }
    }
  }
}
</style>
