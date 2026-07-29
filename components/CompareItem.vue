<template>
    <v-window-item :key="`vwindow-${value}-${rkey}`">
        <div class="relink">
            <slot></slot>
        </div>

        <resource-explain v-if="!simple">
            <slot name="explain"></slot>
        </resource-explain>

        <v-spacer></v-spacer>
        <div style="text-align: center;">
                <nuxt-link v-if="!simple && resourceUrl" :to="resourceUrl" target="_blank">
                    <v-chip variant="outlined" density="compact">zur Ressource</v-chip>
                </nuxt-link>
        </div>
    </v-window-item>
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
            const res = this.resourcesStore.getResource(this.$props.rkey);
            return res ? res : { url: "" };
        },
        resourceUrl() {
            return this.resource && this.resource.url ? this.resource.url : "";
        }
    }
}
</script>