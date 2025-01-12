<template>
    <section>
        <nav>
            <div class="content">
                <div class="left">
                    <!-- <img class="logo" src="/assets/gourman.png" alt="logo" /> -->
                    <a href="#" class="gourmai-title">Gourmai</a>
                </div>

                <div class="center">
                    <ul>
                        <a href="/#whyAi">Why AI?</a>
                        <a href="/#whyGourmai">Why Gourmai?</a>
                        <a href="/#howItWorks">How It Works</a>
                        <a href="mailto:codypwakeford@gmail.com">Contact Me</a>
                    </ul>
                </div>

                <div class="right">
                    <ButtonLight href="#waitingList">Join the waiting list!</ButtonLight>
                </div>
            </div>
        </nav>
    </section>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
@import "/styles/g.sass"

section
    width: 100%
    position: relative
    border-bottom: 1px solid $secondary

nav
    position: fixed
    width: 100%
    left: 50%
    transform: translateX(-50%)
    border-bottom: 1px solid $secondary
    z-index: 10
    background: $background-transparent
    backdrop-filter: blur(5px)
    padding: 10px 0
    width: 100%

.content
    padding-inline: 25px
    display: grid
    grid-template-columns: 1fr auto 1fr
    align-items: center
    max-width: 1400px
    margin-inline: auto
    min-height: 50px



.left
    display: flex
    gap: 10px

    .logo
        height: 50px
        width: 60px

.center > ul
    display: flex
    gap: 25px

a
    color: white
    text-decoration: none
    transition: color 0.2s
    cursor: pointer

    &:hover
        color: $primary

.right

    margin-left: auto
    padding-left: auto

.gourmai-title
    font-size: 1.5rem
    font-weight: bold

@media (width < 950px)
    .content
        grid-template-columns: auto auto

    .center
        display: none
</style>
