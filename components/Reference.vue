<template>
    <v-btn prepend-icon="mdi-arrow-right" variant="text"  density="compact"> 
        {{ text }}   
    </v-btn>
</template>

<script>
export default {
    props: {
        text: String,
        link: String
    },
}
</script>

<style scoped>
.v-btn{
    text-transform: none;
    padding: 0px;
}
::v-deep .v-btn__prepend {
    margin-right: 0px
}
::v-deep .v-btn__content {
    margin-top: -3px
}
</style>