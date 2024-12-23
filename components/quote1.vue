<template>
    <section>
        <div class="column card">
            <h1>
                “The right meal can change your day. The right system can change your life. Gourmai
                is here to do both.”
            </h1>
            <h2>Founder</h2>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
@import "/styles/g.sass"

section
    background: $background-dark
    display: flex
    align-items: center
    width: 100%
    padding-inline: 25px

.card
    padding-block: 75px
    margin-inline: auto

h1
    max-width: 650px
    margin: 0
    font-size: 2rem
h2
    font-size: 1rem
    font-weight: normal
    margin: 0
    color: $primary
</style>
