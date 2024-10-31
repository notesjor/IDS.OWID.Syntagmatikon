<template>
    <v-icon :style="iconColor" @mouseenter="mouseEnter" @mouseleave="mouseLeave">{{ icon }}</v-icon>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: "mdi-compass"
        },
        color1: {
            type: String,
            default: "#666"
        },
        color2: {
            type: String,
            default: null
        },
    },
    data() {
        return {
            focused: false
        };
    },
    computed: {
        iconColor() {
            return `color: ${this.focused ? (this.color2 ?? this.color1) : this.color1}`;
        }
    },
    methods: {
        mouseEnter() {
            console.log("mouseEnter");
            this.focused = true;
        },
        mouseLeave() {
            this.focused = false;
        }
    }
}
</script>