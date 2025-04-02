import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";

// https://vitepress.dev/reference/site-config
export default withPwa(
  defineConfig({
    title: "{{ cookiecutter.project_name }}",
    description: "{{ cookiecutter.project_description }}",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: "/logo.png",
      nav: [
        { text: "Home", link: "/" },
        { text: "Guide", link: "/guide/" },
        { text: "API", link: "/api/" },
        {
          text: "GitHub",
          link: "https://github.com/{{ cookiecutter.github_name }}/{{ cookiecutter.project_name }}",
        },
      ],
      sidebar: [
        {
          text: "Introduction",
          items: [
            { text: "Getting Started", link: "/guide/" },
            { text: "Installation", link: "/guide/installation" },
          ],
        },
        {
          text: "API Reference",
          items: [
            { text: "Overview", link: "/api/" },
            { text: "Examples", link: "/api/examples" },
          ],
        },
      ],
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/{{ cookiecutter.github_name }}/{{ cookiecutter.project_name }}",
        },
      ],
      footer: {
        message: "Released under the {{ cookiecutter.license }} License.",
        copyright:
          'Copyright © {% now "utc", "%Y" %} {{ cookiecutter.organization }}',
      },
    },
    pwa: {
      manifest: {
        name: "{{ cookiecutter.project_name }}",
        short_name: "{{ cookiecutter.project_name }}",
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
