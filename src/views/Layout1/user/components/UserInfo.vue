<template>
  <div class="userData">
    <div class="userDataAvatar">
      <el-avatar :size="112" :src="userData?.userAvatar ?? defaultAvatar" />
    </div>
    <div class="data">
      <div class="userName">{{ userData?.userName }}</div>
      <div class="userQ">
        <div class="option">
          关注
          <div class="value">{{ userData?.attentionCount }}</div>
        </div>
        <div class="option">
          粉丝
          <div class="value">{{ userData?.fansCount }}</div>
        </div>
        <div class="option">
          获赞
          <div class="value">{{ userData?.getLikeCount }}</div>
        </div>
      </div>
      <div class="account">
        <div class="lable">
          LifeMoment账号：<span class="value">{{ userData?.userAccount }}</span>
        </div>
      </div>
      <JinnDescription
        class="description"
        color="var(--jinn-text-color1)"
        :content="userData?.description"
      ></JinnDescription>
    </div>
  </div>
</template>

<script setup lang="ts">
import JinnDescription from "@/components/jinn-components/jinn-text/jinn-description/JinnDescription.vue";
import defaultAvatar from "@/assets/default/defaultAvatar.png";
import { UserData } from "@/stores/user/user";

const props = defineProps<{
  userData: UserData;
}>();

</script>

<style scoped lang="scss">

.userData {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .el-avatar {
    border: 1px solid var(--jinn-color1);
  }
  .data {
    display: flex;
    flex-direction: column;
    gap: 5.1px;
    width: calc(100% - 132px);
    .userName {
      font-size: 20px;
      color: var(--jinn-text-color1);
    }
    .userQ {
      display: flex;
      align-items: center;
      gap: 20px;
      .option {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: var(--jinn-text-color2);
        .value {
          font-size: 15px;
          color: var(--jinn-text-color1);
          padding-left: 6px;
        }
      }
    }
    .account {
      font-size: 12px;
      color: var(--jinn-text-color2);
    }
    .description {
      font-size: 13px;
      width: 70%;
      max-width: calc(100% - 88px);
      color: var(--jinn-text-color1);
    }
  }
}
</style>
