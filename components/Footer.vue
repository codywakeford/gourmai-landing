<template>
    <footer class="footer">
        <p>&copy; {{ new Date().getFullYear() }} Novatek. All rights reserved.</p>
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
    width: 100%
    margin-inline: auto
    text-align: center
p, a
  width: 100%
  margin: 0 auto
  color: $text-dark
  text-align: center
</style>
