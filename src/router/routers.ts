// 对外暴露配置路由 (常量路由)
export const constantRoute = [
  {
    // 注册
    path: "/registersucceed",
    component: () => import("@/views/RegisterSucceed.vue"),
    name: "RegisterSucceed", // 命名路由
  },
  {
    // 登录成功以后展示数据的路由
    path: "/layout1",
    component: () => import("@/views/Layout1/Layout1.vue"),
    name: "layout", // 命名路由
    redirect: "/",
    meta: {
      keepAlive: true // 需要缓存
    },
    children: [
      {
        // 注册
        path: "/register",
        component: () => import("@/views/Layout1/Register/Register.vue"),
        name: "register", // 命名路由
      },
      {
        path: "/",
        component: () => import("@/views/Layout1/youshow/youshow.vue"),
        name: "youshow",
      },
      {
        path: "/search",
        component: () => import("@/views/Layout1/global-search/GlobalSearch.vue"),
        name: "search",
      },
      {
        path: "/user",
        component: () => import("@/views/Layout1/user/User.vue"),
        name: "User", // 命名路由
      },
      {
        path: "/userself",
        component: () => import("@/views/Layout1/user/UserSelf.vue"),
        name: "UserSelf", // 命名路由
      },
      {
        path: "/my",
        component: () => import("@/views/Layout1/my/my.vue"),
        name: "my", // 命名路由
        children: [
          {
            path: "/my/message",
            component: () => import("@/views/Layout1/my/message/message.vue"),
            name: "message", // 命名路由
          },
        ]
      },
    ],
  },
  {
    path: "/:cathAll(.*)",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];
