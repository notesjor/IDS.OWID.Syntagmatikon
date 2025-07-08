<template>
     <div style="margin-top: 5px; margin-bottom: 5px; text-align: right;">
 <NuxtLink :to=to target="_blank"><v-btn size="small" prepend-icon="mdi-arrow-right-bold-box-outline"
                variant="elevated" color=""><span class="nocaps">zu diesem Beispiel</span></v-btn></NuxtLink>
          </div>     
</template>

<script>
export default {
    props: {
        to: {type: String, 
            required: true, 
        },
        }
    }
</script>