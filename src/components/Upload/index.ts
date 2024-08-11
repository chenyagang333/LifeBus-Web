import { UploadImage } from "@/api/modules/upload";
import { useAppStore } from "@/stores/app/app";

export const BaseUploadImage = async (formData: FormData) => {
    const appStore = useAppStore();
    const res = await UploadImage(formData)
    if (res.code === 200) {
        res.data.firstURL = appStore.fileBaseURL + res.data.firstURL;
        return res;
    }
    return ''
}