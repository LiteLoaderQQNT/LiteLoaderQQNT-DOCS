export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"介绍\",\"link\":\"/guide/\"},{\"text\":\"安装\",\"link\":\"/guide/install\"},{\"text\":\"插件开发\",\"link\":\"/plugin/\"},{\"text\":\"反馈\",\"children\":[{\"text\":\"Telegram Group\",\"link\":\"https://t.me/LiteLoaderQQNT\"}]},{\"text\":\"Github\",\"link\":\"https://github.com/mo-jinran/LiteLoaderQQNT\"}],\"sidebar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"介绍\",\"children\":[{\"text\":\"介绍\",\"link\":\"/guide/\"},{\"text\":\"安装\",\"link\":\"/guide/install\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
