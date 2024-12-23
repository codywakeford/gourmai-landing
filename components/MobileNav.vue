<template>
    <section>
        <nav :class="{ active: navOpen }">
            <div class="content">
                <a href="#" class="gourmai-title">Gourmai</a>
                <Icon
                    @click="navOpen = !navOpen"
                    icon="iconamoon:menu-burger-horizontal"
                    color="#ffffff"
                    width="30"
                />
            </div>
        </nav>
        <aside class="aside" :class="{ active: navOpen }">
            <a @click="navOpen = false" href="#whyAi">Why AI?</a>
            <a @click="navOpen = false" href="#whyGourmai">Why Gourmai?</a>
            <a @click="navOpen = false" href="#howItWorks">How It Works</a>
            <a @click="navOpen = false" href="mailto:codypwakeford@gmail.com">Contact Me</a>
            <a @click="navOpen = false" href="#waitingList">Join the waiting list!</a>
        </aside>
    </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"

const navOpen = ref<boolean>(false)
</script>

<style lang="sass" scoped>
@import "/styles/g.sass"
section
    width: 100%
    position: relative
    border-bottom: 1px solid $secondary
    user-select: none

aside
    position: fixed
    display: flex
    flex-direction: column
    padding-inline: 25px
    gap: 10px
    z-index: 50
    opacity: 0
    transform: translateY(-100px)
    transition: transform 0.15s, opacity 0.05s

    &.active
        opacity: 1
        transform: translateY(100px)

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
    height: 50px
    transition: height 0.15s

    &.active
        height: 270px

.content
    padding-inline: 25px
    display: flex
    justify-content: space-between
    align-items: center
    max-width: 1400px
    margin-inline: auto
    min-height: 50px


a
    color: white
    text-decoration: none
    transition: color 0.2s
    cursor: pointer

    &:hover
        color: $primary

.gourmai-title
    font-size: 1.5rem
    font-weight: bold

@media (width < 950px)
    .content
        grid-template-columns: auto auto

    .center
        display: none
</style>
