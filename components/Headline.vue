<template>
    <h1 v-if="h == 1" style="margin-bottom:-1rem;">
        <gradient :color1="color1" :color2="color2" class="gradient" />
        <slot />
    </h1>
    <h2 v-if="h == 2">
        <gradient :color1="color1" :color2="color2" class="gradient" />
        <slot />
    </h2>
    <h3 v-if="h == 3">
        <gradient :color1="color1" :color2="color2" class="gradient" />
        <slot />
    </h3>
    <h2 style="margin:0px 0px 10px 10px; border-bottom: 3px lightgray solid;" v-if="h == 4"><slot /></h2>
    <div v-if="h == 0">
        <gradient :color1="color1" :color2="color2" class="gradient"/>
        <span style="font-weight: 300; font-size: 1.25rem;">
            <slot />
        </span>
    </div>
</template>

<style>
.gradient{
    margin:-3px 10px 0px -5px
}
</style>

<script>
export default {
    props: {
        color1: {
            type: String,
            default: "#000"
        },
        color2: {
            type: String,
            default: "#000"
        },
        h: {
            type: Number,
            default: 0
        },
    },
}
</script>