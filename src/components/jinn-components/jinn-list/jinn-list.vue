<template>
  <div>
    <TransitionGroup name="list" tag="div" class="jinn-list" :class="columnReverse ? 'columnReverse' : ''">
      <div
        class="jinn-list-item"
        v-for="(item, index) in dataSource"
        :key="index"
        ref="itemRefs"
      >
        <slot
          name="renderItem"
          :item="item"
          :index="index"
          :itemRef="itemRefs[index]"
        ></slot>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts" generic="T extends Object ">
import { ref } from "vue";

defineProps<{
  dataSource?: any[];
  columnReverse?: boolean;
}>();
const itemRefs = ref([]);
</script>

<style scoped lang="scss">
.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}


.jinn-list {
  display: flex;
  flex-direction: column;
}
.columnReverse {
  flex-direction: column-reverse;
}
</style>
