import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["~/assets/css/tailwind.css"],
    modules: ["@nuxtjs/tailwindcss"],
    meta: {
        title: "Edwin Chang",
        charset: "UTF-8",
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
});
