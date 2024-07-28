<template>
  <div class="JinnButton" :class="[type,_active]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';


// type: default\lucency
const props = withDefaults(defineProps<{
  type?: string;
  active?: boolean;
}>(),{
  type:"default",
  active:false
});

const _active = computed(() => props.active ? `${props.type}-active` : '')

</script>

<style scoped lang="scss">
.JinnButton {
  width: 100%;
  min-height: 39px;
  cursor: pointer;
  color: var(--jinn-text-color1);
  border-radius: var(--el-border-radius-base);
  font-family: PingFang SC, DFPKingGothicGB-Regular, sans-serif;
  transition: all 0.1s ease-in-out;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.default {
  background-color: var(--jinn-bg3);
  &:hover {
    background-color: var(--jinn-bg5);
  }
}
.default-active {
  background-color: var(--jinn-bg5);
}

.lucency {
  &:hover {
    background-color: var(--jinn-bg5);
  }
}
.lucency-active {
  background-color: var(--jinn-bg5);
}
</style>
