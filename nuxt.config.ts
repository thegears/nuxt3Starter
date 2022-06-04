import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        'nuxt-windicss',
    ],
    serverMiddleware: [
        { path: "/api", handler: "~/server/api.ts" },
    ]
})