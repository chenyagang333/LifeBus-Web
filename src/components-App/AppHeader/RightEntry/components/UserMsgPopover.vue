<template>
  <div class="have-user card">
    <div class="option">
      {{ $t(lang + "userMsgCard1") }}
    </div>
    <div class="option">{{ $t(lang + "userMsgCard2") }}</div>
    <div class="option">
      {{ $t(lang + "userMsgCard3") }}
    </div>
    <div class="option">
      {{ $t(lang + "userMsgCard4") }}
    </div>
    <div class="option">
      {{ $t(lang + "userMsgCard5") }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { rightEntryLanguage } from '..';

const lang = rightEntryLanguage
</script>

<style scoped lang="scss">
// 已登陆
.have-user {
  font-size: 19px;
  width: 140px;
  padding: 10px 0;
  .option {
    padding: 0 15px;
    height: 35px;
    line-height: 35px;
    font-size: 15px;
    color: var(--jinn-text-color1);
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background-color: var(--jinn-bg2);
    }
  }
}
</style>
