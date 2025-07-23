<template>
    <v-tabs-window-item :value="value">
        <div class="relink">
            <slot></slot>
        </div>

        <resource-explain v-if="!simple">
            <slot name="explain"></slot>
        </resource-explain>

        <v-spacer></v-spacer>
        <div style="text-align: center;">
            <nuxt-link v-if="!simple" :to="resource?.url"><v-btn prepend-icon="mdi-arrow-right-circle-outline"
                variant="elevated" color=""><span class="nocaps">zur Ressource</span></v-btn></nuxt-link>
        </div>
    </v-tabs-window-item>
</template>

<script>
import { useResourcesStore } from '~/stores/resources';

export default {
    name: "CompareItem",
    props: {
        value: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: null
        },
        rkey: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            resourcesStore: null,
        }
    },
    mounted() {
        this.resourcesStore = useResourcesStore();
    },
    computed: {
        simple() {
            return this.$props.value == "0";
        },
        resource() {
            if (this.resourcesStore == null)
                return { url: "" };
            return this.resourcesStore.getResource(this.$props.rkey);
        }
    }
}
</script>