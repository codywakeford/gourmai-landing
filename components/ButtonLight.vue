<template>
    <a>
        <slot />
    </a>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
@import "/styles/g.sass"
a
    background: white
    padding: 7px 15px
    border-radius: 5px
    border: none
    cursor: pointer
    color: black !important
    font-size: 0.9rem

    &:hover
        background: lightgrey

    &:active
        transform: translate(0.5px, 0.5px)
</style>
