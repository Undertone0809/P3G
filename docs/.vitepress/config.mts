import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";

export default withPwa(
  defineConfig({
    title: "P3G",
    description: "P3G Docs",
    head: [
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
  })
);
