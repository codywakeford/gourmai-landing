<template>
    <section id="waitingList">
        <h1>Join the movement.</h1>
        <p>Join the mailering list to get updates and special access.</p>

        <p class="feedback-message" :class="{ error: errorState }">{{ message }}</p>
        <div class="input-box desktop" :class="{ error: errorState }">
            <input
                placeholder="Enter your email address"
                @input=";(message = ''), (errorState = false)"
                v-model="email"
                type="email"
            />
            <button @click="addEmail">Join the waiting list!</button>
        </div>

        <div class="input-box-mobile mobile">
            <input
                placeholder="Enter your email address"
                @input=";(message = ''), (errorState = false)"
                v-model="email"
                type="email"
            />
            <button @click="addEmail">Join the waiting list!</button>
        </div>
        <p class="disclaimer">No Spam. No ads. No commitments.</p>
    </section>
</template>

<script setup lang="ts">
const email = ref("")
const message = ref("")
const errorState = ref<boolean>(false)

async function addEmail() {
    if (email.value === "") return

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        message.value = "Please enter a valid email address."
        errorState.value = true
        return
    }

    try {
        const response = await fetch(`${window.location.origin}/api/addEmail`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email.value }),
        })

        if (!response.ok) {
            message.value = "Failed to send email. Please try again."

            errorState.value = true
            return
        }
    } catch (error) {
        message.value = "Failed to send email. Please try again."
        errorState.value = true
    }

    message.value = "Thanks for your support. I will keep you updated on the progress!"
    email.value = ""
}
</script>

<style lang="sass" scoped>
@import "/styles/g.sass"

section
    background: $background-dark
    padding: 100px 25px
    display: flex
    flex-direction: column
    gap: 0px
    text-align: center

h1
    font-size: 2.5rem
    margin: 0

p
    margin: 0 0 20px 0

.input-box-mobile
    display: flex
    flex-direction: column
    margin-inline: auto

    &.error
        outline: 2px solid red

    button
        background: $text-light
        color: black
        margin-bottom: 15px
        border: none

        padding: 10px 20px
        border-radius: 10px
        cursor: pointer

        &:active
            transform: translate(1px, 1px)

    input
        background: $text-light
        padding: 10px
        border-radius: 10px
        margin-bottom: 10px
        border: none
        padding-left: 15px
        max-width: 400px
        min-width: 250px

        flex-grow: 1

        &:focus
            outline: none

.input-box
    background: $text-light
    width: min-content
    white-space: nowrap
    margin-inline: auto
    padding: 5px
    border-radius: 10px
    margin-bottom: 10px
    flex-wrap: wrap

    &.error
        outline: 2px solid red

    button
        background: $background-dark
        color: $text-light
        border: none
        padding: 10px 20px
        border-radius: 7.5px
        cursor: pointer

        &:active
            transform: translate(1px, 1px)

    input
        background: none
        border: none
        padding-left: 15px
        max-width: 300px
        flex-grow: 1

        &:focus
            outline: none

.feedback-message
    margin: 0 0 10px 0
    color: $success
    font-size: 0.8rem

    &.error
        color: red

.disclaimer
    font-size: 0.8rem
    color: $text-dark

.mobile
    display: none
@media (max-width: 700px)
    .mobile
        display: flex

    .desktop
        display: none
</style>
