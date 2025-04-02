import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";

const getAnalyticsScripts = () => {
  if (process.env.NODE_ENV === "development") {
    return [];
  }

  return [
    [
      "script",
      {
        defer: "true",
        "data-website-id": "3987279b-d6de-4294-bb20-b971a8ba6997",
        src: "https://umami.zeeland.top/script.js",
      },
    ] as [string, Record<string, string>],
    [
      "script",
      {
        async: "true",
        src: "https://www.googletagmanager.com/gtag/js?id=G-KLE8HJYSSL",
      },
    ] as [string, Record<string, string>],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KLE8HJYSSL');`,
    ] as [string, Record<string, string>, string],
  ];
};

export default withPwa(
  defineConfig({
    title: "P3G",
    description: "P3G Docs",
    head: [
      ...getAnalyticsScripts(),
      ["link", { rel: "icon", href: "/logo.ico" }],
      ["meta", { property: "og:title", content: "P3G" }],
      [
        "meta",
        {
          property: "og:description",
          content: "🚀Python Packages Project Generator",
        },
      ],
    ],
    themeConfig: {
      logo: "/logo.png",
      search: {
        provider: "local",
      },
      nav: [
        { text: "Guide", link: "/get_started/intro" },
      ],
      outline: {
        level: [2, 3],
      },
      sidebar: [
        {
          text: "Get started",
          items: [
            { text: "Introduction", link: "/get_started/intro" },
            { text: "Quick Start", link: "/get_started/quick_start" },
          ],
        },
        {
          text: "Other",
          items: [{ text: "Developer guidance", link: "/other/contribution" }],
        },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/undertone0809/P3G" },
        { icon: "x", link: "https://x.com/kfhedRk3lXofRIB" },
      ],
      footer: {
        message: "Released under the Apache 2.0 License.",
        copyright: "Copyright 2024-present Zeeland",
      },
      editLink: {
        pattern: "https://github.com/undertone0809/P3G/edit/main/docs/:path",
        text: "Edit this page on GitHub",
      },
    },
    pwa: {
      manifest: {
        name: "P3G",
        short_name: "P3G",
        theme_color: "#2b2a27",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/logo.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any",
          },
        ],
      },
    },
  })
);
