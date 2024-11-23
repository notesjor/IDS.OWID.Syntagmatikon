<template>
    <v-tabs-window-item :value="value">
        <v-row style="margin:20px 20px 20px 20px">
            <v-row>
                <div class="relink">
                    <slot></slot>
                </div>

                <resource-explain v-if="!simple" :webpage="correctedWebPage">
                    <slot name="explain"></slot>
                    <template v-if="$slots.webpagetext" #webpagetext>
                        <slot name="webpagetext"></slot>
                    </template>
                </resource-explain>
            </v-row>

            <v-row>
                <v-spacer></v-spacer>
                <nuxt-link v-if="!simple" :to="resource?.url"><v-btn prepend-icon="mdi-arrow-right-bold-box-outline"
                        variant="elevated" color=""><span class="nocaps">zur Ressource</span></v-btn></nuxt-link>
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
        webpage: {
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
        correctedWebPage() {
            if (this.$props.webpage != null) {
                return ".." + this.$props.webpage;
            }
            else {
                return this.$props.webpage;
            }
        },
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