<template>
    <section id="whyAi">
        <header class="section-header">
            <p>Is it even worth the change?</p>
            <h1>Why Use Artificial Intelligence Anyway?</h1>
        </header>

        <div class="column cards">
            <div class="row">
                <div class="column card">
                    <h3>Personalized Recipe Solution</h3>
                    <p>
                        Our AI crafts recipes specifically for you, whether you’re managing
                        allergies, chasing fitness goals, or following a strict diet.
                    </p>
                </div>

                <div class="column card">
                    <h3>Seamless Shopping Integration</h3>
                    <p>
                        Export your recipes directly to Amazon’s food delivery service and have
                        everything you need delivered to your doorstep.
                    </p>
                </div>

                <div class="column card">
                    <h3>Tailored to Your Health Goals</h3>
                    <p>
                        Set your health goals, and our AI will recommend recipes that are perfectly
                        aligned with your nutritional needs.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="column card">
                    <h3>Nutritional & Allergen Details</h3>
                    <p>
                        Our AI crafts recipes specifically for you, whether you’re managing
                        allergies, chasing fitness goals, or following a strict diet.
                    </p>
                </div>

                <div class="column card">
                    <h3>Complex Needs Made Simple</h3>
                    <p>
                        Low-FODMAP, keto, vegan, gluten-free? Maybe your bulking up at the gym or a
                        professional athlete? Gourmai has you covered.
                    </p>
                </div>

                <div class="column card">
                    <h3>Totally Free, No Ads, No Drama</h3>
                    <p>
                        We make money through a commission-based model, so you get personalized
                        recipes without any interruptions or advertisements. Forever.
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
    margin-block: 150px
    padding-inline: 25px

.row, .cards
    gap: 25px

.row
    flex-grow: 1
    flex-wrap: wrap

.cards
    flex-wrap: wrap
header
    p
        color: $primary !important


.cards
    margin-block: 75px
    max-width: 1200px
    margin-inline: auto

.card
    border: 1px solid $off-background
    border-radius: 10px
    padding: 25px
    flex: 1 0 300px
    min-width: 300px

    h3
        margin: 0 0 10px 0

    p
        margin: 0
        color: $text-dark
</style>
