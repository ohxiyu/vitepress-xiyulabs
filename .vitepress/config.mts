import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My VitePress Site",
  description: "A VitePress Site",
  themeConfig: {
    // 站点标题
    siteTitle: 'My Docs',
    
    // 导航菜单
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'API', link: '/api-examples' }
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
      copyright: 'Copyright © 2024-present Your Name'
    },

    // 搜索
    search: {
      provider: 'local'
    }
  }
})