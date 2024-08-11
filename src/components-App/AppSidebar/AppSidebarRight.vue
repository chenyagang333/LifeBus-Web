<template>
  <div class="AppSidebarRight">
    <div class="sticky">
      <div class="AppSidebarRightInner radius-overflow">
        <AppSignIn></AppSignIn>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSignIn from "@/components-App/AppSignIn/AppSignIn.vue";
</script>

<style scoped lang="scss">
.AppSidebarRight {
  // 媒介查询 // 动端适配
  @include mobile {
    display: none;
  }
  width: 230px;
  > div {
    border-radius: 4px;
    position: sticky;
    top: -10px;
  }
  .AppSidebarRightInner {
    min-height: calc(100vh - 200px);
    border: 1px solid var(--el-border-color);
    position: relative;

  }
}
</style>
