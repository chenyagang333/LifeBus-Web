<template>
  <div class="UserNullCard card">
    <div class="lab">
      <slot></slot>
    </div>
    <div class="btn" @click="goLogin()">
      {{ $t(lang + "loginCard5") }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { goLogin } from "@/utils-app/goLogin";
import { rightEntryLanguage } from "..";

const lang = rightEntryLanguage;
</script>

<style scoped lang="scss">
// 未登录
.UserNullCard {
  font-size: 19px;
  width: 306px;
  padding: 15px 26px;
  color: --jinn-text-color1;
  user-select: none;
  font-size: 15px;
  .lab {
    color: var(--jinn-text-color1);
    text-align: center;
  }
  .btn {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: var(--jinn-color3);
    border-radius: 7px;
    margin: 10px 0;
    cursor: pointer;
    text-align: center;
    color: #ffffff;
    transition: background-color 0.3s;
    &:hover {
      background-color: var(--jinn-color4);
    }
  }
}
</style>
