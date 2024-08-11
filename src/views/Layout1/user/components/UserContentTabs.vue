<template>
  <div class="UserContentTabs">
    <el-tabs v-model="tabsKey" @tab-change="changeTabs">
      <el-tab-pane label="作品" name="production">
        <template #label>
          <div class="tabs-title">
            <i class="bi bi-file-earmark-richtext"></i>
            <span> 作品 {{ userData?.contentCount }}</span>
          </div>
        </template>
      </el-tab-pane>
      <el-tab-pane label="喜欢" name="like">
        <template #label>
          <div class="tabs-title">
            <i class="bi bi-heart-fill"></i>
            <span> 喜欢 {{ userData?.likeCount }}</span>
          </div>
        </template>
      </el-tab-pane>
      <el-tab-pane label="收藏" name="star">
        <template #label>
          <div class="tabs-title">
            <i class="bi bi-star-fill"></i>
            <span> 收藏 {{ userData?.starCount }}</span>
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
    <div class="custom-tab-pane">
      <template v-if="showUserLifeMoment">
        <UserContent :userId="userId" :type="tabsKey"></UserContent>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserContent from "./UserContent.vue";
import { nextTick, ref, watch } from "vue";
import {
  onBeforeRouteUpdate,
  RouteLocationNormalized,
  useRoute,
  useRouter,
} from "vue-router";
import { goUserPage } from "@/utils-app/user";
import { UserData, useUserStore } from "@/stores/user/user";

const props = defineProps<{
  userId: number;
  userData: UserData;
}>();

const myUserData = useUserStore();

const route = useRoute();
const router = useRouter();

const type = route.query.type as string;
const tabsKey = ref<string>(type ?? "production");

watch(route, () => {
  routeUpdateHandler(route)
});
onBeforeRouteUpdate((to) => {});

const routeUpdateHandler = (to: RouteLocationNormalized) => {
  const type = to.query.type?.toString() ?? "";
  if (tabsKey.value !== type && ["production", "like", "star"].includes(type)) {
    tabsKey.value = type;
    changeTabs(tabsKey.value);
  }
};

const showUserLifeMoment = ref<boolean>(true);

const changeTabs = async (val: string) => {
  if (props.userId != myUserData.userData?.id) {
    router.push({
      path: "/user",
      query: {
        userId: props.userId,
        type: val,
      },
    });
  } else {
    goUserPage(router, myUserData.userData?.id, val);
  }
  showUserLifeMoment.value = false;
  await nextTick();
  showUserLifeMoment.value = true;
};
</script>

<style lang="scss" scoped>
.tabs-title {
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 17px;
  .bi {
    font-size: 18px;
    padding-right: 5px;
  }
  .bi-file-earmark-richtext {
    color: skyblue;
  }
  .bi-heart-fill {
    color: red;
  }
  .bi-star-fill {
    color: orange;
  }
}
</style>
