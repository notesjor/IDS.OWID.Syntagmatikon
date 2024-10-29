<template>
    <svg width="10%" height="100%" viewBox="0 0 1 84" version="1.1" :style="style">
        <path
            d="M18,-0.24l-10.86,0l0,22.56l5.58,19.68l5.28,19.68l-0,22.32l10.86,0l-0.12,-22.32l-5.46,-19.68l-5.28,-19.68l0,-22.56Z"
            :style="c2" />
        <path
            d="M18,-0.48l10.86,0l0,22.8l-5.58,19.68l-5.28,19.92l-0,22.56l-10.86,-0l0.12,-22.8l5.46,-19.68l5.28,-19.68l0,-22.8Z"
            :style="c1" />
    </svg>
</template>

<script>
export default {
    props: {
        color1: {
            type: String,
            default: "#f00"
        },
        color2: {
            type: String,
            default: "#00f"
        },
        height: {
            type: Number,
            default: 40
        },
    },
    computed: {
        c1() {
            return `fill:${this.color1};stroke:#fff;stroke-width:3px;`
        },
        c2() {
            return `fill:${this.color2};`
        },
        style() {
            return `display:inline-block;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;max-height:${this.height}px;`
        }
    }
}
</script>