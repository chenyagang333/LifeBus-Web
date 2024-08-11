import { useAppStore } from "@/stores/app/app";

const appStore = useAppStore();

export const goLogin = () => {
    appStore.showLoginDialog = true
}
