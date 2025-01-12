<template>
    <section id="whyGourmai">
        <header class="section-header">
            <h1>Why Gourmai?</h1>
            <p>Why should we be the ones to make this leap?</p>
        </header>

        <div class="row container">
            <div class="column">
                <div class="column">
                    <h3>A Vision That Goes Beyond Recipes</h3>
                    <p>
                        Unlike other platforms, Gourmai is driven by a holistic vision of health,
                        convenience, and personalization. We understand that food is deeply
                        personal—it’s tied to your health, culture, lifestyle, and even your
                        happiness. That’s why we’ve designed our platform to adapt to your unique
                        needs, helping you not just eat better but live better.
                    </p>
                </div>

                <div class="column">
                    <h3>Passion Meets Purpose</h3>
                    <p>
                        Our team isn’t just creating software; we’re creating solutions for
                        real-world problems. We’re passionate food enthusiasts who understand the
                        challenges of eating well in a busy, modern world. This dedication fuels
                        every decision we make and every feature we build.
                    </p>
                </div>

                <div class="column">
                    <h3>A Seamless Ecosystem</h3>
                    <p>
                        Planning meals, finding recipes, and shopping for ingredients are often
                        disconnected processes. Gourmai unites them in one streamlined app. With
                        features like direct grocery integration and automatic shopping list
                        generation, we save you time and effort, turning eating well into a seamless
                        experience.
                    </p>
                </div>
            </div>

            <div class="column">
                <div class="column">
                    <h3>Built on Trust and Accessibility</h3>
                    <p>
                        Gourmai isn’t about hidden fees or invasive ads. We’re committed to
                        providing a completely free, ad-free experience, ensuring our focus remains
                        on you. Our revenue model is transparent—we earn through grocery
                        commissions, so there’s never any cost to you.
                    </p>
                </div>

                <div class="column">
                    <h3>Focus on Health and Wellness</h3>
                    <p>
                        We recognize the gap in traditional recipe services when it comes to
                        supporting complex dietary needs and health goals. No other platform puts
                        your health front and center like Gourmai does.
                    </p>
                </div>

                <div class="column">
                    <h3>A Community-First Approach</h3>
                    <p>
                        Gourmai isn’t just a tool—it’s a growing community of health-conscious food
                        lovers. We listen to our users, iterate based on feedback, and continuously
                        improve to serve you better. We’re not just building a product; we’re
                        creating a movement.
                    </p>
                    <p>
                        When you choose Gourmai, you’re choosing a team that’s as invested in your
                        success as you are. We’re not just implementing change—we’re leading it.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
@import "/styles/g.sass"

section
    margin-block: 100px
    padding-inline: 25px
p
    color: $text-dark
    margin-bottom: 30px


h3
    margin-bottom: 0px

.column
    p
        max-width: 500px

.row
    gap: 100px
    padding-top: 50px
    flex-wrap: wrap

    justify-content: center

@media (max-width: 600px)
    .container
        gap: 20px
    section
        margin-block: 50px
</style>
