<template>
    <NuxtImg :src="src" :alt="alt" :style="style" preset="ipxwebp" loading="lazy" />
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