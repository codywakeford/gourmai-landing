<template>
    <section id="howItWorks">
        <header class="section-header">
            <h1>How It Works</h1>
        </header>

        <div class="column cards">
            <div class="row">
                <div class="column card">
                    <p class="number">1.</p>
                    <h3>Personalized Recipe Solution</h3>
                    <p>
                        Our AI crafts recipes specifically for you, whether you’re managing
                        allergies, chasing fitness goals, or following a strict diet.
                    </p>
                </div>

                <div class="column card">
                    <p class="number">2.</p>
                    <h3>Seamless Shopping Integration</h3>
                    <p>
                        Export your recipes directly to Amazon’s food delivery service and have
                        everything you need delivered to your doorstep.
                    </p>
                </div>

                <div class="column card">
                    <p class="number">3.</p>
                    <h3>Tailored to Your Health Goals</h3>
                    <p>
                        Set your health goals, and our AI will recommend recipes that are perfectly
                        aligned with your nutritional needs.
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
    flex-wrap: wrap

.row
    justify-content: center

.cards
    margin-block:  25px 75px
    max-width: 1400px
    margin-inline: auto
    flex-wrap: wrap


.number
    font-size: 1.5rem
    margin-bottom: 10px
    font-weight: bold

.card
    border: 1px solid $off-background
    border-radius: 10px
    padding: 25px
    max-width: 400px
    flex: 1 0 350px

    h3
        margin: 0 0 10px 0

    p
        margin: 0
        color: $text-dark



@media (max-width: 500px)
    .card
        flex: 1 0 220px

    .section
        margin-block: 75px
</style>
