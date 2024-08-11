<template>
  <div class="AppCard">
    <!-- 头部 -->
    <CardHeader
      :userId="userId"
      :userAvatar="userAvatarURL"
      :userName="userName"
      :publishTime="_publishTime"
      :publishAddress="publishAddress"
      :avatarCardPosition="avatarCardPosition"
      @clickUser="$emit('clickUser')"
    >
      <template #avatarCard>
        <div class="user-card">
          <div class="user-card-header"></div>
          <AppCardUser style="padding: 13px" :userId="userId"></AppCardUser>
        </div>
      </template>
    </CardHeader>
    <!-- 内容 -->
    <CardMain
      :content="_content"
      :urls="_urls"
      @clickFile="(i:number) => $emit('clickFile', i)"
    ></CardMain>
    <!-- 底部 -->
    <CardFooter
      :likeUsers="likeUsers"
      :likeActive="likeActive"
      :starActive="starActive"
      :likeCount="likeCount"
      :commentCount="commentCount"
      :starCount="starCount"
      :shareCount="shareCount"
      :viewCount="viewCount"
      @share-handler="$emit('share-handler')"
      @comment-handler="$emit('comment-handler')"
      @changeLikeState="(active: boolean) => $emit('changeLikeState',active)"
      @changeStarState="(active: boolean) => $emit('changeStarState',active)"
    ></CardFooter>
  </div>
</template>

<script setup lang="ts">
import CardHeader from "@/components/jinn-components/jinn-production-card/components/card-header/card-header.vue";
import CardMain from "@/components/jinn-components/jinn-production-card/components/card-main/card-main.vue";
import CardFooter from "@/components/jinn-components/jinn-production-card/components/card-footer/card-footer.vue";
import { MyFileInfo } from "@/types/Layout1/youshow/youshow";
import { replaceCustomString } from "@/utils/FileUtils/EmotionFile";
import AppCardUser from "@/components-App/AppCard/AppCardUser.vue";

const props = defineProps<{
  content: string;
  files?: MyFileInfo[];
  id: number;
  userAvatarURL: string;
  userName: string; //
  publishAddress: string; //
  userId: number;
  likeUsers?: string[];
  createTime: string;
  likeActive: boolean;
  starActive: boolean;
  likeCount: number;
  commentCount: number;
  starCount: number;
  shareCount: number;
  viewCount: number;

  avatarCardPosition?: string;
}>();

defineEmits<{
  (e: "clickUser"): void;
  (e: "clickFile", index: number): void;
  (e: "share-handler"): void;
  (e: "comment-handler"): void;
  (e: "changeLikeState", active: boolean): void;
  (e: "changeStarState", active: boolean): void;
}>();

// 对服务端数据进行处理
const _publishTime = props.createTime?.substring(
  0,
  props.createTime.length - 3
);
// 转换文章内容的表情部分
const _content = replaceCustomString(props.content);
const _urls = props.files?.map((x) => x.firstURL);
</script>

<style lang="scss" scoped>
.AppCard {
  background-color: var(--jinn-color1);
  transition: all 0.3s ease-in-out;
  border: 1px solid var(--el-border-color);
  min-width: 335px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 4px;
  position: relative;
}
.user-card {
  @include mobile {
    display: none;
  }
  width: 379px;
  .user-card-header {
    // height: 280px;
    height: 80px;
    background-image: url("@/assets/home/hope.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    // background-position: center top;
    background-position: center top -10px;
    /* 负值表示往上移动 */
  }
}
</style>
