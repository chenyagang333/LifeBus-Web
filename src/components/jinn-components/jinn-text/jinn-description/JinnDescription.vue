<template>
  <div class="JinnDescription" v-if="content">
    <div
      class="content ellipsis"
      ref="BriefIntroductionContent"
      :style="{ color: color ?? 'var(--jinn-text-color2)' }"
    >
      {{ content }}
    </div>
    <el-popover
      v-if="showMoreContent"
      placement="bottom-end"
      :width="230"
      trigger="hover"
    >
      <template #reference>
        <el-text class="mx-1 more" type="primary">更多</el-text>
      </template>
      <div
        style="
          color: var(--jinn-text-color1);
          font-size: 13px;
          /* background-color: var(--jinn-bg3);
          border-radius: var(--el-border-radius-base);
          border: 1px solid var(--jinn-color3); */
        "
      >
        {{ content }}
      </div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

defineProps<{
  content?: string;
  color?: string;
}>();

const BriefIntroductionContent = ref();
const showMoreContent = computed<boolean>(() => {
  if (BriefIntroductionContent.value) {
    return (
      BriefIntroductionContent.value.scrollWidth >
      BriefIntroductionContent.value.clientWidth
    );
  } else {
    return false;
  }
});
</script>

<style scoped lang="scss">
.JinnDescription {
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  padding-right: 20px;
  display: flex;
  align-items: center;
  font-size: 12px;
  > .content {
    color: var(--jinn-text-color2);
    width: calc(100% - 36px);
  }
  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .more {
    cursor: pointer;
  }
}
</style>
