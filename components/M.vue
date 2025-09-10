<template>
    <span :class="['klammer', { 'has-content': hasContent }]" :style="style">
        <slot />
    </span>
</template>

<script>
import { useLayoutStore } from '~/stores/layout';

export default {
    data() {
        return {
            layoutVars: null
        }
    },
    mounted() {
        this.layoutVars = useLayoutStore();
    },
    computed: {
        style() {
            if (this.layoutVars == null) return {};
            const color = this.layoutVars.getParentColor;
            return {
                borderTop: `3px solid ${color}`,
                backgroundColor: `${color}4D`
            };
        },
        hasContent() {
            return this.$slots.default !== undefined;
        }
    }
}
</script>

<style scoped>
.klammer {
    position: relative;
    padding: 0px 5px;
}

.klammer::before,
.klammer::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    /* Linkes Dreieck */
    border-right: 3px solid transparent;
    /* Rechtes Dreieck */
}

.klammer::before {
    left: -1px;
    top: -1px;
    transform: rotate(-90deg);
}

.klammer::after {
    right: -1px;
    top: -1px;
    transform: rotate(90deg);
}

.klammer.has-content::before,
.klammer.has-content::after {
    border-top: inherit;
}
</style>
