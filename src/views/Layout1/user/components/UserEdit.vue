<template>
  <div class="UserEdit">
    <el-button @click="visibleEdit = true">编辑资料</el-button>
    <el-dialog
      v-model="visibleEdit"
      align-center
      title="编辑资料"
      width="500"
      :fullscreen="appStore.isMobile"
    >
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        "
      >
        <UploadImg
          v-model:image-url="formLabelAlign.userAvatar"
          :drag="false"
          border-radius="50%"
        >
          <template #empty>
            <el-icon><Avatar /></el-icon>
            <span>请上传头像</span>
          </template>
          <!-- <template #tip> 圆形组件（禁止拖拽上传） </template> -->
        </UploadImg>
        <el-form
          label-position="top"
          label-width="auto"
          :model="formLabelAlign"
          style="width: 80%"
        >
          <el-form-item label="名字">
            <el-input v-model="formLabelAlign.userName" />
          </el-form-item>
          <el-form-item label="简介">
            <el-input
              v-model="formLabelAlign.description"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
            />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="visibleEdit = false">取消</el-button>
          <el-button type="primary" @click="handleOk"> 修改 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useEventListenerPopstate from "@/hooks/useEventListenerPopstate";
import { useUserStore } from "@/stores/user/user";
import { reactive } from "vue";
import { post } from "@/api/http/api";
import { useAppStore } from "@/stores/app/app";
import { ElMessage } from "element-plus";
import UploadImg from "@/components/Upload/img.vue";

const appStore = useAppStore();
const userStore = useUserStore();

// 编辑用户资料
const { visible: visibleEdit } = useEventListenerPopstate('UserEdit_visibleEdit');
const handleOk = async () => {
  const res = await post("User/EditUserData", {
    userAvatar: formLabelAlign.userAvatar.replace(appStore.fileBaseURL, ""),
    userName: formLabelAlign.userName,
    description: formLabelAlign.description,
  });
  if (res.code == 200) {
    ElMessage.success("编辑成功！");
    handleOkSetData();
    visibleEdit.value = false;
  } else {
    ElMessage.error("编辑失败");
  }
};

const formLabelAlign = reactive({
  userAvatar: userStore.userData!.userAvatar,
  userName: userStore.userData!.userName,
  description: userStore.userData!.description,
});

const handleOkSetData = () => {
  // 更新头像
  userStore.userData!.userAvatar = formLabelAlign.userAvatar;
  // 更新用户名
  userStore.userData!.userName = formLabelAlign.userName;
  // 更新简介
  userStore.userData!.description = formLabelAlign.description;
};
</script>

<style scoped></style>
