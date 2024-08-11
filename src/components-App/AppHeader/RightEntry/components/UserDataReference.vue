<template>
  <el-avatar
    :size="40"
    :src="userData?.userAvatar"
    @click="goUserPage(router, userData?.id!)"
  ></el-avatar>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user/user";
import { goUserPage } from "@/utils-app/user";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();
const UserStore = useUserStore(); // 拿到管理用户信息的仓库
const { userData } = storeToRefs(UserStore); // 响应式的结构变量
</script>

<style scoped lang="scss">
// 已登录 用户信息
.user-data {
  .el-avatar {
    background-image: url("@/assets/default/defaultAvatar.png");
    background-size: cover;
  }
}
</style>
