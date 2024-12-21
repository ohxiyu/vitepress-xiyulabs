import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "xiyulabs",
  description: "nothing nobody",
  themeConfig: {
    // 站点标题和 Logo
    siteTitle: 'xiyulabs',
    logo: '/logo.png',
    
    // 导航菜单
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Blog', link: 'https://xiyu.im' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-github-account' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present xiyulabs'
    }
  }
})