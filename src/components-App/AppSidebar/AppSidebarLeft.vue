<template>
  <div class="AppSidebarLeft">
    <div class="hot-show">
      <!-- 页面选项 -->
      <div class="options">
        <JinnButton
          type="lucency"
          v-for="(i, index) in navData"
          :key="i.text"
          @click="navClickHandle(i)"
          :active="navIndex === `${index}`"
        >
          <i
            class="bi"
            :class="[
              navIndex === `${index}` ? i.i_ActiveClassName : i.i_className,
            ]"
          ></i>
          {{ i.text }}
        </JinnButton>
        <!-- 我的页面选项 -->
        <div class="userOptionsCore">
          <div
            class="userOptions"
            :style="{ backgroundColor: isUserOptions ? 'var(--jinn-bg3)' : '' }"
          >
            <JinnButton
              type="lucency"
              v-for="(i, index) in navDataUser"
              :key="i.text"
              @click="navClickHandle(i)"
              :active="navIndex === `${userPrefix}${index}`"
              hoverBackgroundColor="var(--jinn-bg9)"
            >
              <i
                class="bi"
                :class="[
                  navIndex === `${userPrefix}${index}`
                    ? i.i_ActiveClassName
                    : i.i_className,
                ]"
              ></i>
              {{ i.text }}
            </JinnButton>
          </div>
        </div>
      </div>
      <!-- app-description -->
      <div class="app-des">
        <div>2024 © 生活瞬间</div>
        <div class="beian">
          <a href="https://beian.miit.gov.cn/" target="_blank"
            >豫ICP备2024079810号-1</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import JinnButton from "@/components/jinn-components/jinn-button/JinnButton.vue";
import {
  onBeforeRouteUpdate,
  RouteLocationNormalizedLoaded,
  useRoute,
  useRouter,
} from "vue-router";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user/user";
import { ElMessage } from "element-plus";
import { goUserPage } from "@/utils-app/user";

const UserStore = useUserStore(); // 拿到管理用户信息的仓库
const { userData } = storeToRefs(UserStore); // 响应式的结构变量

const route = useRoute();
const router = useRouter();

const navData = [
  {
    text: "首页",
    i_className: "bi-house",
    i_ActiveClassName: "bi-house-fill",
    path: "",
  },
  {
    text: "推荐",
    i_className: "bi-stars",
    i_ActiveClassName: "bi-stars",
    path: "/",
  },
  {
    text: "关注",
    i_className: "bi-person-check",
    i_ActiveClassName: "bi-person-fill-check",
    path: "",
  },
  {
    text: "朋友",
    i_className: "bi-people",
    i_ActiveClassName: "bi-people-fill",
    path: "",
  },
];
const isUserOptions = ref<boolean>(false);
const userPrefix = "user_";
const navDataUser = [
  {
    text: "我的",
    i_className: "bi-person",
    i_ActiveClassName: "bi-person-fill",
    path: `/userself?type=production`,
  },
  {
    text: "喜欢",
    i_className: "bi-heart",
    i_ActiveClassName: "bi-heart-fill",
    path: `/userself?type=like`,
  },
  {
    text: "收藏",
    i_className: "bi-star",
    i_ActiveClassName: "bi-star-fill",
    path: `/userself?type=star`,
  },
];
// 根据path字段查询索引值
const findIndexByRoute = (route: RouteLocationNormalizedLoaded) => {
  if (route.path.includes("userself")) {
    isUserOptions.value = true;
    const type = route.query.type as string;
    return `${userPrefix}${navDataUser.findIndex((x) =>
      x.path.includes(type)
    )}`;
  } else {
    isUserOptions.value = false;
    return navData.findIndex((x) => x.path == route.path).toString();
  }
};

const navIndex = ref<string>(findIndexByRoute(route));
const navClickHandle = (i: any) => {
  if (["关注", "朋友", "我的"].includes(i.text)) {
    if (!userData.value?.id) {
      ElMessage.info("请先登录");
      return;
    }
    if (i.text == "我的") {
      goUserPage(router, userData.value?.id);
    }
  } else {
    router.push(i.path);
  }
};

onMounted(() => {});

onBeforeRouteUpdate((to) => {
  navIndex.value = findIndexByRoute(to);
  // updateNavIndex(to.path);
  // configShowTopImg(to.name as string);
});
</script>

<style scoped lang="scss">
.AppSidebarLeft {
  // 媒介查询 // 动端适配
  @include mobile {
    display: none;
  }
  .hot-show {
    border-radius: 4px;
    position: sticky;
    top: 75px;
    border: 1px solid var(--el-border-color);
    overflow: hidden;
    background-color: var(--jinn-color1);
    padding: 10px;
    .options {
      > div {
        margin-bottom: 10px;
        font-size: 15.5px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 20px;
        gap: 10px;
        padding-right: 15px;
        .bi {
          font-size: 20px;
        }
      }
      .userOptionsCore {
        border-top: 1px solid var(--el-border-color);
        padding: 0;
        padding-top: 10px;
        .userOptions {
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 3px;
          width: 100%;
          border-radius: var(--el-border-radius-base);
          > div {
            display: flex;
            gap: 10px;
          }
          .bi-heart-fill {
            color: red;
          }
          .bi-star-fill {
            color: orange;
          }
          .bi-person-fill {
            color: skyblue;
          }
        }
      }
    }
    .app-des {
      border-top: 1px solid var(--el-border-color);
      padding-top: 10px;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      > div {
        width: 200%;
        transform-origin: 0;
        transform: scale(0.9);
        color: var(--jinn-text-color1);
      }
      .beian {
        a {
          font-family: Microsoft YaHei, Tahoma, Arial, sans-serif;
          color: var(--base-jinn-text-color1);
        }
      }
    }
  }
}
</style>
