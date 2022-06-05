import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        'nuxt-windicss','@nuxtjs/pwa'
    ],
    serverMiddleware: [
        { path: "/api", handler: "~/server/api.ts" },
    ]
})