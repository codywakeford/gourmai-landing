<template>
    <Nav />
    <section class="affiliate-section">
        <header>
            <h1>Support Gourmai by using these affiliates!</h1>
            <p>
                As an Amazon Associate, we earn from qualifying purchases. Thank you for supporting
                us!
            </p>
        </header>

        <h3>Recommended cooking equipment!</h3>
        <p>
            Any purchase made within 24 hours of you clicking this link will support us. You do not
            need to purchase this item to support.
        </p>
        <ul>
            <li><a href="https://amzn.to/407eFyy">Kitchen Mixer</a></li>
            <li><a href="https://amzn.to/49Ud5Dz">Wooden Spoons</a></li>
            <li><a href="https://amzn.to/409zFoH">Frying Pan Set</a></li>
            <li><a href="https://amzn.to/40jazUt">Pizza Oven</a></li>
            <li><a href="https://amzn.to/3BRElpC">Convection Oven</a></li>
            <li><a href="https://amzn.to/3ZTYcfS">Oven tray set</a></li>
        </ul>
    </section>
    <Footer />
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
@import "/styles/g.sass"

.affiliate-section
    display: flex
    flex-direction: column
    gap: 0
    padding-block: 150px 200px
    padding-inline: 25px
    margin-inline: auto


header
    text-align: center

h1, h3
    margin: 0
    text-align: center
    margin-inline: auto

h3
    margin-top: 100px

p, a
    margin: 0
    margin-inline: auto
    max-width: 500px
    color: $text-dark

ul
    margin-inline: auto
</style>
