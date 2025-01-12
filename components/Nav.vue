<template>
    <section>
        <DesktopNav class="desktop" />
        <MobileNav class="mobile" ref="nav" />
    </section>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.desktop
    display: block

.mobile
    display: none

@media (max-width: 900px)
    .desktop
        display: none

    .mobile
        display: block
</style>
