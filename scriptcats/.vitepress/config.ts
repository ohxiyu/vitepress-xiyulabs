import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ScriptCats',
  description: 'Energize Your NFt With Creativity',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Meme Party', link: '/meme-party' },
      { text: 'NFT', link: '/nft' },
      { text: 'Roadmap', link: '/roadmap' }
    ],
    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/scriptcats' },
      { icon: 'discord', link: 'https://discord.com/scriptcats' }
    ]
  },
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }]
  ]
})