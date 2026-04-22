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
                //borderTop: `3px solid ${color}`,
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
</style>
