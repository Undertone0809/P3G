import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "P3G",
  description: "P3G Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Get started',
        items: [
          { text: 'Introduction', link: '/get_started/intro' },
          { text: 'Quick Start', link: '/get_started/quick_start' },
        ]
      },
       {
        text: 'Use Cases',
        items: [

        ]
      },
       {
        text: 'Other',
        items: [
          { text: 'FAQ', link: '/other/faq' },
          { text: 'Developer guidance', link: '/other/contribution' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
