<template>
    <Component />
</template>
  
<script setup>
definePageMeta({
    layout: 'page'
})

import { defineAsyncComponent } from 'vue'
let Component = defineAsyncComponent(() => import(`../subpages/${this.$route.params.id}.vue`))
</script>