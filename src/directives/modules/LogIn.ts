import { useUserStore } from "@/stores/user/user";


const UserStore = useUserStore(); // 拿到管理用户信息的仓库
// 点击元素外部触发的处理逻辑
const handler = (e: any) => {
    console.log('99999966 :>> ', 99999966);
    if (!UserStore.userData) {
        e.preventDefault(); // 阻止默认事件
    }
};
export const LogIn = (app: any) => {
    // 全局的自定义指令：实现用户登录才渲染的效果
    app.directive('login', {
        mounted(el: any, binding: any, vnode: any, prevVnode: any) {
            // 添加事件监听器
            el.addEventListener('click', handler);
        },
        unmounted(el: any) {
            // 移除事件监听器
            el.removeEventListener('click', handler);
        }
    })
}