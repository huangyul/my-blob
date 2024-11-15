export default {
  title: "测试title",
  description: "blog",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" }
    ],
    sidebar: [
      {
        text: "Bar",
        items: [
          { text: "Foo", link: "/foo/" },
          { text: "Bar", link: "/bar/" }
        ]
      }
    ],
  }
}
