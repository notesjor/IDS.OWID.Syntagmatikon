<template>
    <img :src="src" :alt="alt" :style="style" />
</template>

<script>
export default {
    name: 'NuxtImg',
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: 'Abbildung'
        },
        style: {
            type: String,
        }
    }
}
</script>