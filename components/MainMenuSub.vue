<template>
    <v-navigation-drawer :permanent="!useMobileView" v-if="!useMobileView"
        style="z-index:1; transform: none; font-family: 'Fira Sans';" expand-on-hover>

        <v-list density="compact" nav :style="menuStyleMobileFix" style="font-family: var(--FF-DISPLAY);">
            <v-list-subheader style="margin-bottom: 20px;">Verfügbare<br />{{ layoutVars?.parent }}</v-list-subheader>
            <main-menu-item v-for="p in paths" :key="p" :useMobileView="useMobileView" :color2="color" :icon="icon"
                :to="p.url" class="subMenuItem">
                <span v-html="p.name" />
            </main-menu-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { useLayoutStore } from '~/stores/layout';
export default {
    props: {
        useMobileView: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            layoutVars: null
        }
    },
    mounted() {
        this.layoutVars = useLayoutStore();
    },
    computed: {
        menuStyleMobileFix() {
            if (this.useMobileView) {
                return "";
            } else {
                return "display: flex; flex-direction: column; justify-content: center; height: 100%;"
            }
        },
        paths() {
            if (this.layoutVars == null) {
                return [];
            } else {
                return this.layoutVars.getPaths;
            }
        },
        color() {
            if (this.layoutVars == null) {
                return "#000";
            } else {
                return this.layoutVars.getParentColor;
            }
        },
        icon() {
            if (this.layoutVars == null) {
                return "";
            } else {
                return this.layoutVars.getParentIcon;
            }
        }
    }
}
</script>

<style scoped>
.subMenuItem {
    margin: 0px 10px 5px -5px;
}
</style>