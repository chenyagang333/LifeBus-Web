<template>
  <el-card class="my-message">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="评论互动" name="comment"></el-tab-pane>
      <el-tab-pane label="系统通知" name="system"></el-tab-pane>
      <el-tab-pane label="私信" name="message"></el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style>
.my-message{
    width: 1000px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
