<template>
  <div class="User">
    <div class="containerOuter">
      <div class="container">
        <div class="Up">
          <UserInfo :userData="userData"></UserInfo>
          <div class="options">
            <template v-if="userId == userStore.userData?.id">
              <!-- 编辑用户资料 -->
              <UserEdit />
            </template>
          </div>
        </div>
        <div class="Down">
          <UserContentTabs :userId="userId" :userData="userData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import UserContentTabs from "./components/UserContentTabs.vue";
import { ApiResult, get } from "@/api/AHttp/api";
import { UserData } from "@/stores/user/user";
import { useUserStore } from "@/stores/user/user";
import UserEdit from "./components/UserEdit.vue";
import UserInfo from "./components/UserInfo.vue";

const userStore = useUserStore();

const props = defineProps<{
  userId: number;
}>();

const userData = ref<UserData>({} as UserData);
const getUserDataByUserId = async (userId: number) => {
  if (userId == userStore.userData?.id) {
    userData.value = userStore.userData;
  } else {
    const res: ApiResult<UserData> = await get("User/GetUserDataById", {
      userId,
    });
    if (res.code == 200) {
      userData.value = res.data;
    }
  }
};

onMounted(() => {
  getUserDataByUserId(props.userId);
});
</script>

<style scoped lang="scss">
.User {
  display: flex;
  justify-content: space-between;
  font-family: PingFang SC, DFPKingGothicGB-Medium, sans-serif;
  width: 70%;
  @include mobile {
    width: 100%;
  }
  .containerOuter {
    width: 100%;
    .container {
      width: 100%;
      // padding-right: 240px;
      // padding-left: 160px;
      .Up {
        height: 233px;
        padding-top: 90px;
        border-bottom: 1px solid var(--jinn-color3);
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        @include mobile {
          padding-right: 10px;
          padding-left: 10px;
        }
        .options {
          position: absolute;
          right: 20px;
          bottom: 20px;
          height: 100%;
          display: flex;
          flex-direction: column-reverse;
          .el-button {
          }
        }
      }
    }
  }
}
</style>
