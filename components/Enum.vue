<template>
    <div style="display: inline-block; margin-right: -10px;">        
        <v-icon color="red" style="display: inline-block; position: relative; top: -5px;">mdi-circle</v-icon>
        <div style="font-family: Arial, Helvetica, sans-serif; color:white; font-weight: 500; display: inline-block; position: relative; top: 0px; left:-18.5px">{{v}}</div>
    </div>
</template>

<script>
export default {
    props: {
        v: {
            default: "0"
        }
    },
}
</script>