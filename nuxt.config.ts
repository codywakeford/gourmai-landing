// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },

    modules: ["@nuxt/fonts"],
    nitro: {
        firebase: {
            gen: 2,
            nodeVersion: "18",
        },
    },

    runtimeConfig: {
        apiKey: process.env.NUXT_API_KEY,
        authDomain: process.env.NUXT_AUTH_DOMAIN,
        projectId: process.env.NUXT_PROJECT_ID,
        storageBucket: process.env.NUXT_STORAGE_BUCKET,
        messagingSenderId: process.env.NUXT_MESSAGING_SENDER_ID,
        appId: process.env.NUXT_APP_ID,
        measurementId: process.env.NUXT_MEASUREMENT_ID,
    },
})
