import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
    buildModules: [
        '@nuxtjs/pwa'
    ],
    serverMiddleware: [
        { path: "/api", handler: "~/server/api.ts" },
    ],
    css: [
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css'
    ]
});
