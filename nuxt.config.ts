import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    css: ["~/assets/css/tailwind.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    meta: {
        title: "Edwin Chang",
        charset: "UTF-8",
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
});
