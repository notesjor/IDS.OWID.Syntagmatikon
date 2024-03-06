<template>
    <v-expansion-panel :title="title">
        <v-expansion-panel-text>
            <v-checkbox v-for="x in items" :key="x" density="compact" hide-details="true" :label="x" />
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    }
}
</script>