<template>
    <span :style="style"><slot/></span>
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
            if(this.layoutVars == null) return {};
            var color = this.layoutVars.getParentColor;
            return {
                borderTop: `3px solid ${color}`,
                backgroundColor: `${color}4D`
            };
        }
    }
}
</script>