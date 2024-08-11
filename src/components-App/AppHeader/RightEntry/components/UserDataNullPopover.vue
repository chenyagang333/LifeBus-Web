<template>
  <div class="no-user card">
    <div class="lable">
      {{ $t(lang + "loginCardTitle") }}
    </div>
    <div class="items">
      <div class="item">
        <i class="bi bi-card-text">&nbsp;</i>
        <span>{{ $t(lang + "loginCard1") }}</span>
      </div>
      <div class="item">
        <i class="bi bi-envelope">&nbsp;</i>
        <span>{{ $t(lang + "loginCard2") }}</span>
      </div>
      <div class="item">
        <i class="bi bi-stars">&nbsp;</i>
        <span>{{ $t(lang + "loginCard3") }}</span>
      </div>
      <div class="item">
        <i class="bi bi-send">&nbsp;</i>
        <span>{{ $t(lang + "loginCard4") }}</span>
      </div>
    </div>
    <div class="btn" @click="goLogin()">
      {{ $t(lang + "loginCard5") }}
    </div>
    <div class="bottom">
      {{ $t(lang + "loginCard6") }}
      <span @click="goRegister(router)">{{ $t(lang + "loginCard7") }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { goLogin } from "@/utils-app/goLogin";
import { goRegister } from "@/utils-app/user";
import { useRouter } from "vue-router";

const lang = "Layout1."; // 基本参数管理
const router = useRouter();
</script>

<style scoped lang="scss">
.no-user {
  width: 366px;
  padding: 15px 26px;
  user-select: none;
  color: var(--jinn-text-color1);
  .lable {
    font-size: 15px;
  }
  .items {
    padding: 0 5px;
    font-size: 14.5px;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    .item {
      height: 40px;
      letter-spacing: 2px;
      display: flex;
      align-items: center;
      > .bi {
        color: var(--jinn-color3);
        font-size: 20px;
      }
    }
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
  .bottom {
    font-size: 14px;
    text-align: center;
    height: 30px;
    > span {
      color: var(--base-jinn-text-color1);
      cursor: pointer;
    }
  }
}
</style>
