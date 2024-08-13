<template>
    <v-tabs-window-item :value="value">
        <v-row v-if="!simple" style="margin:-5px 0px 0px 10px">
            <v-col>
                <v-row>
                    <div class="relink">
                        <a :href="resource.url">
                            <h3 style="display: inline-block;" v-html="resource.nameShort"></h3>
                        </a>
                    </div>
                </v-row>
                <v-row>
                    <p v-if="description == null"
                        style="color:darkgray; font-size: 0.8em; font-style: italic; margin: -10px 0px 0px 0px;">
                        {{ resource.nameLong }}
                    </p>
                    <p v-else style="color:darkgray; font-size: 0.8em; font-style: italic; margin: -10px 0px 0px 0px;">
                        {{ description }}
                    </p>
                </v-row>
            </v-col>

        </v-row>
        <v-row style="margin:10px 10px 5px 10px">

            <div class="relink"><slot></slot></div>

            <resource-explain v-if="!simple" :webpage="correctedWebPage">
                <slot name="explain"></slot>
                <template v-if="$slots.webpagetext" #webpagetext><slot name="webpagetext"></slot></template>
            </resource-explain>
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
            default: "../dummy/resource.png"
        },
        simple: {
            type: Boolean,
            default: false
        },
        rkey: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            resourcesStore: {},
            resource: null,
        }
    },
    mounted() {
        this.$data.resourcesStore = useResourcesStore();
        this.$data.resource = this.$data.resourcesStore.getResource(this.$props.rkey);
    },
    computed: {
        correctedWebPage() {
            return ".." + this.$props.webpage;
        }
    }
}
</script>