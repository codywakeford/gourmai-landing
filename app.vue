<template>
    <main>
        <Nav />

        <Hero />
        <WhyNotTraditional />
        <JoinUs />
        <WhyAI />
        <Quote1 />
        <WhyGourmai />
        <HowItWorks />
        <JoinUs />
        <Footer />
    </main>
</template>
<script setup lang="ts">
import { useHead } from "#app"

useHead({
    title: "Gourmai | AI-Powered Recipe Assistant",
    meta: [
        // Basic meta tags
        {
            hid: "description",
            name: "description",
            content:
                "Gourmai is your AI-powered recipe assistant for personalized meal plans, health goals, and seamless grocery shopping.",
        },
        {
            hid: "keywords",
            name: "keywords",
            content:
                "AI, recipes, personalized meals, healthy eating, grocery shopping, meal planning",
        },
        { hid: "author", name: "author", content: "Gourmai" },
        { hid: "robots", name: "robots", content: "index, follow" },

        { hid: "og:title", property: "og:title", content: "Gourmai | AI-Powered Recipe Assistant" },
        {
            hid: "og:description",
            property: "og:description",
            content:
                "Gourmai is your AI-powered recipe assistant for personalized meal plans, health goals, and seamless grocery shopping.",
        },
        { hid: "og:image", property: "og:image", content: "/assets/gourman.png.jpg" },
        { hid: "og:url", property: "og:url", content: "https://www.gourmai.co.uk" },
        { hid: "og:type", property: "og:type", content: "website" },

        // Twitter Card meta tags for Twitter sharing
        {
            hid: "twitter:title",
            name: "twitter:title",
            content: "Gourmai | AI-Powered Recipe Assistant",
        },
        {
            hid: "twitter:description",
            name: "twitter:description",
            content:
                "Gourmai is your AI-powered recipe assistant for personalized meal plans, health goals, and seamless grocery shopping.",
        },
        { hid: "twitter:image", name: "twitter:image", content: "/assets/gourman.png" },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },

        // Viewport for responsive design
        { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
        // Favicon
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
})
</script>

<style lang="sass">
@import "/styles/g.sass"

html, body
    background: $background
    color: #ffffff
    font-family: Poppins
    margin: 0
    padding: 0
    scroll-behavior: smooth
    scroll-padding-top: 150px
    overflow-x: hidden

main
    margin-inline: auto
    font-family: poppins
</style>
