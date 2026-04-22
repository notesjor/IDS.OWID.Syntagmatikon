<template>
    <span v-show="visible">
        <main-menu-item v-for="p in paths" :key="p" :useMobileView="useMobileView" :color2="color" :icon="icon"
            :to="p.url" style="margin-left: 10px;" :alabel="p.name">
            <span v-html="p.name" />
        </main-menu-item>
    </span>
</template>

<script>
import { useLayoutStore } from '~/stores/layout';
export default {
    props: {
        parent: {
            type: String,
            required: true
        },
        useMobileView: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            layoutVars: null,
        }
    },
    mounted() {
        this.layoutVars = useLayoutStore();
    },
    computed: {
        paths() {
            return this.layoutVars?.paths[this.$props.parent] || [];
        },
        icon() {
            return this.layoutVars?.icons[this.$props.parent] || "mdi-compass";
        },
        color() {
            return this.layoutVars?.colors[this.$props.parent] || "#2962ff";
        },
        visible() {
            return this.$route.path.includes(this.layoutVars?.validate[this.$props.parent] || "///");
        },
    },
}
</script>