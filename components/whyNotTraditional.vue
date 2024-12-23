<template>
    <section>
        <header class="section-header">
            <h1>What's Wrong With Traditional Recipe Services?</h1>
            <p>Traditional recipe services just aren't enough anymore</p>
        </header>

        <div class="row container">
            <div class="column">
                <div class="column">
                    <h3>Lack of personalization</h3>
                    <p>
                        Traditional recipe apps and websites provide a one-size-fits-all solution.
                        Whether you’re managing a health condition, following a strict diet, or have
                        unique nutritional goals, generic recipes just don’t cut it. Gourmai takes
                        into account your specific needs and preferences to offer truly personalized
                        meal plans.
                    </p>
                </div>

                <div class="column">
                    <h3>No Focus on Health Goals</h3>
                    <p>
                        Traditional recipe services don’t focus on your health goals, leaving you to
                        figure out the nutritional details yourself. Gourmai’s AI will tailor
                        recipes to your fitness objectives, whether you're building muscle, losing
                        weight, or just trying to eat healthier.
                    </p>
                </div>

                <div class="column">
                    <h3>Time-Consuming and Complex</h3>
                    <p>
                        Searching for recipes that match your needs can be a frustrating,
                        time-consuming process. Gourmai simplifies everything by doing the hard work
                        for you. From recipe suggestions to shopping lists, our app makes it easy to
                        eat well and stay on track.
                    </p>
                </div>
            </div>

            <div class="column">
                <div class="column">
                    <h3>Limited Nutritional & Allergen Information</h3>
                    <p>
                        Many recipe services provide minimal nutritional data, and allergen
                        information is often lacking. Gourmai will provide detailed nutritional
                        breakdowns and allergen information with each recipe, ensuring you’re making
                        the right choices for your body.
                    </p>
                </div>

                <div class="column">
                    <h3>Ad-Ridden and Cluttered</h3>
                    <p>
                        Traditional recipe sites are often bombarded with ads and pop-ups,
                        disrupting your experience. Gourmai offers a clean, ad-free environment,
                        making your meal planning and shopping experience simple and enjoyable.
                    </p>
                </div>

                <div class="column">
                    <h3>No Integration with Grocery Shopping</h3>
                    <p>
                        Most recipe sites stop at the recipe. With Gourmai, you can export your
                        recipes directly to Amazon’s food delivery service, making it easier than
                        ever to shop for the ingredients you need—all without leaving the app.
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
    flex-wrap: wrap
    padding-top: 50px

    justify-content: center

@media (max-width: 600px)
    .container
        gap: 20px
</style>
