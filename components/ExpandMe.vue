<template>
    <span>
        <v-btn density="compact" size="small" variant=tonal icon="mdi-plus" @click="toggleDiv"
            style="display: inline-block;" aria-label="Zeige zusätzlichen Text an"></v-btn>
    </span>
    <div class="more" v-show="isVisible">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: "ExpandMe",
    data() {
        return {
            isVisible: false,
        }
    },
    methods: {
        toggleDiv() {
            this.isVisible = !this.isVisible;
        },
    }
}
</script>

<style scoped>
.more {
    margin: 10px;
    padding: 10px;
    background-color: #f9f9f9;
    line-height: 2em;
    text-align: justify;
    text-justify: inter-word;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
}
</style>