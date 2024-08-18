// 统一管理项目用户相关的接口
import { ApiResult, get, post } from "@/api/http/api";
import { MyFileInfo } from "@/types/Layout1/youshow/youshow";

// 统一管理接口


const ContentType = {
  "Content-Type": "multipart/form-data",
}
// 图片上传
export const UploadImage = (formData: FormData) => { //  => 
  return post<ApiResult<MyFileInfo>>("Uploader/UploadImage", formData, {
    headers: {
      ...ContentType
    },
  });
};

// 视频上传
export const UploadVideo = (formData: FormData) => { //  => 
  return post<ApiResult<MyFileInfo>>("Uploader/UploadVideo", formData, {
    headers: {
      ...ContentType
    },
  });
};

