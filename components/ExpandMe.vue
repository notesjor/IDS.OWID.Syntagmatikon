<template>
    <span>
        <v-btn density="compact" size="small" variant=tonal icon="mdi-plus" @click="toggleDiv"
            style="display: inline-block;"></v-btn>
    </span>
    <div class="more" v-show="isVisible">
        <slot></slot>
    </div>
</template>

<script>
import cache from '~/api/cache.js';

export default {
    name: "ExpandMe",
    data() {
        return {
            isVisible: false,
        }
    },

    mounted() {
    },

    methods: {
        toggleDiv() {
            this.isVisible = !this.isVisible;

            if (this.isVisible) {
                new cache().callCache(this.$route.path, "EXP");
            }
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