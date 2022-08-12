import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  { text: "Home", icon: "home", link: "/" },
  {
    text: "Open source components",
    icon: "edit",
    prefix: "/",
    children: [
      { text: "Cli-PLus", icon: "edit", link: "cli-plus" },
      {
        text: "Springboot",
        icon: "edit",
        prefix: "",
        children: [
          { text: "spring-boot-starter-websocket", icon: "edit", link: "spring-boot-starter-websocket/" },
          { text: "spring-boot-starter-grpc", icon: "edit", link: "spring-boot-starter-grpc/" },
        ],
      },
    ],
  },
  { text: "Join US", icon: "creative", link: "/zh/guide/" },
]);
