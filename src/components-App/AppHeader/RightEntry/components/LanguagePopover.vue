<template>
  <div class="card">
    <div class="option" @click="changeLanguage">
      <span>{{ $t(lang + "language1") }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { changeLanguage } from '@/utils-app/changeLanguage';
import { rightEntryLanguage } from '..';
const lang = rightEntryLanguage;

</script>

<style lang="scss" scoped>
.card {
  .option {
    color: var(--jinn-text-color1);
    text-align: center;
    height: 35px;
    line-height: 35px;
    width: 100px;
    user-select: none;
    > span {
      display: block;
      width: 100%;
      height: 100%;
      cursor: pointer;
      &:hover {
        color: var(--jinn-color3);
      }
    }
  }
}
</style>
