import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  { text: "首页", icon: "home", link: "/zh/" },
  {
    text: "开源组件",
    icon: "edit",
    prefix: "/zh",
    children: [
      { text: "Cli-PLus", icon: "edit", link: "/cli-plus" },
      {
        text: "Springboot",
        icon: "edit",
        prefix: "/",
        children: [
          { text: "spring-boot-starter-websocket", icon: "edit", link: "spring-boot-starter-websocket" },
          { text: "spring-boot-starter-grpc", icon: "edit", link: "spring-boot-starter-grpc" },
        ],
      },
    ],
  },
  { text: "加入我们", icon: "creative", link: "/zh/guide/" },
]);
