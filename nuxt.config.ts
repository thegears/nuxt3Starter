import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
    buildModules: [
        'nuxt-windicss'
    ],
    serverMiddleware: [
        { path: "/api", handler: "~/server/api.ts" },
    ],
    css: [
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css'
    ]
});
