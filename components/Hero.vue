<template>
    <section>
        <div class="background-image" />
        <h3 class="coming-soon-chip">Closed Beta!</h3>
        <h1>Unlock Your Perfect Meal with Gourmai</h1>
        <h2>
            Your AI-powered recipe assistant for personalized meal plans, tailored health goals, and
            seamless grocery shopping.
        </h2>
        <nuxt-link
            class="join-link"
            to="https://play.google.com/apps/internaltest/4701539507518301389"
            >Join the closed android beta today!</nuxt-link
        >
    </section>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
@import "/styles/g.sass"

section
    display: flex
    flex-direction: column
    gap: 10px
    margin: 250px 0
    position: relative
    padding-inline: 25px

.coming-soon-chip
    outline: 1px solid $primary
    padding: 2px 20px 2px 27px
    margin: 0 auto
    width: min-content
    white-space: nowrap
    font-size: 0.75rem
    border-radius: 25px
    color: $primary
    position: relative
    z-index: 2

    &::before
        content: ""
        left: 12px
        top: calc(50% - 3.5px)
        position: absolute
        color: $primary
        width: 7px
        height: 7px
        border-radius: 50%
        background: $primary

.join-link
    text-align: center
    position: relative
    color: $primary
    z-index: 1000

h1
    font-weight: bolder
    font-size: 4rem
    max-width: 750px
    font-weight: 700
    margin: 0 auto
    text-align: center
    padding: 0
    line-height: 1.2
    z-index: 2
    position: relative

h2
    max-width: 600px
    text-align: center
    margin: 0
    font-size: 1.2rem
    margin-inline: auto
    font-weight: normal
    color: #999
    position: relative
    z-index: 2
    color: $text-dark


.background-image
    position: absolute
    height: 200%
    width: 100%
    top: -170px
    left: 0
    z-index: 1
    background-image: radial-gradient( circle at top center, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.0) 30%, $background 40% ), url("/assets/background-grid.png")
    background-size: cover
    background-position: center


@media (width < 600px)
    h1
        font-size: 2rem
    h2
        font-size: 0.8rem
</style>
