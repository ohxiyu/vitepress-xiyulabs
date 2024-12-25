import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "xiyulabs",
  description: "nothing nobody",
  // 添加 head 配置来设置图标
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],
  themeConfig: {
    // 站点标题和 Logo
    siteTitle: 'xiyulabs',
    logo: '/logo.png',
    
    // 导航菜单
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Portfolio', link: '/portfolio' }, // 新增的导航链接
      { text: 'Blog', link: 'https://xiyu.im' },
      { text: 'Examples', link: '/bitcoin-price.md' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: 'examples',
        items: [
          { text: 'Bitcoin-price', link: '/bitcoin-price.md' }
        ]
      }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-github-account' },
      { icon: 'twitter', link: 'https://x.com/ohxiyu' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present xiyulabs'
    }
  }
})