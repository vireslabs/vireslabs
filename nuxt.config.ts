import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/fonts.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "vireslabs",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
