<template>
    <Component />
</template>
  
<script setup>
definePageMeta({
    layout: 'page'
})

const route = useRoute()

import { defineAsyncComponent  } from 'vue'
let Component = defineAsyncComponent(() => import(`./subpages/${route.params.id}.vue`))
</script>