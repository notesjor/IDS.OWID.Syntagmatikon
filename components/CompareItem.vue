<template>
    <v-tabs-window-item :value="value">
        <v-row style="margin:20px 20px 20px 20px">
            <v-row>
                <v-col cols="12">
                    <div class="relink">
                        <slot></slot>
                    </div>
                </v-col>
            </v-row>

            <v-row v-if="!simple">
                <v-col cols="12">
                    <resource-explain>
                        <slot name="explain"></slot>
                    </resource-explain>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-spacer></v-spacer>
                    <nuxt-link v-if="!simple" :to="resource?.url"><v-btn prepend-icon="mdi-arrow-right-bold-box-outline"
                            variant="elevated" color=""><span class="nocaps">zur Ressource</span></v-btn></nuxt-link>
                </v-col>
            </v-row>
        </v-row>
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