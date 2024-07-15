<template>
  <hugs-popover-wrap distance="15" class="user-data">
    <el-avatar
      :size="40"
      :src="FileIP + userData?.userAvatar"
      @click="goUserPage(router, userData?.id!)"
    ></el-avatar>
    <template #popover>
      <div class="card-user card">
        <div class="header">
          <el-avatar
            :size="50"
            :src="FileIP + userData?.userAvatar"
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
        <UserSelect></UserSelect>
      </div>
    </template>
  </hugs-popover-wrap>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user/user";
import { useRouter } from "vue-router";
import hugsPopoverWrap from "@/components/hugs-popover-wrap/hugs-popover-wrap.vue";
import { goUserPage } from "@/views/Layout1/user/user";
import UserSelect from './UserSelect.vue';

//#region 语言管理
const lang = "Layout1."; // 基本参数管理

const app = getCurrentInstance();
const FileIP: string = app?.appContext.config.globalProperties.$FileIP;
const UserStore = useUserStore(); // 拿到管理用户信息的仓库
const { userData } = storeToRefs(UserStore); // 响应式的结构变量
const router = useRouter();

</script>

<style scoped lang="scss">
.card-user {
  width: 256px;
  padding: 15px;

  background-color: var(--jinn-color1);
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
