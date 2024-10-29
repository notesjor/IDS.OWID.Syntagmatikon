<template>
    <svg viewBox="0 0 24 84" version="1.1" :style="style">
        <path id="back" d="M24.112,5.304l-13.015,-5.304l-8.567,78.696l13.015,5.304l8.567,-78.696Z" :style="c2" />
        <path id="front" d="M17.623,1.662l-15.093,3.322l4.54,77.202l15.092,-3.322l-4.539,-77.202Z" :style="c1" />
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
            return `fill:${this.color1};`
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