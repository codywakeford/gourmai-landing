<template>
    <footer class="footer">
        <p>
            &copy; {{ new Date().getFullYear() }} Novatek | <a href="/affiliate">Affiliate Links</a>
        </p>
    </footer>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
@import "/styles/g.sass"

.footer
    display: flex
    align-items: center
    padding: 25px 25px
    background-color: $background
    font-size: 0.9rem
    max-width: 100%
    margin-inline: auto
    text-align: center
p
  margin: 0 auto
  color: $text-dark
  text-align: center

a
    color: white
    text-decoration: none
</style>
