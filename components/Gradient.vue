<template>
    <v-icon :style="iconColor">{{ icon }}</v-icon>
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
    },
    computed: {
        iconColor() {
            return `color: ${this.color1}`;
        }
    },
}
</script>