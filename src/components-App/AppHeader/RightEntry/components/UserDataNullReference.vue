<template>
  <span class="login-text right-entry" @click="goLogin()"><slot></slot></span>
</template>

<script setup lang="ts">
import { goLogin } from "@/utils-app/goLogin";
</script>

<style scoped>
.login-text {
  font-size: 14px;
  user-select: none;
  border-radius: 4px;
  padding: 5px 10px;
  display: block;
}
</style>
