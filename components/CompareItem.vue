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
                    <p v-if="description == null" style="color:darkgray; font-size: 0.8em; font-style: italic; margin: -10px 0px 0px 0px;" v-html="resource.nameLong" />
                    <p v-else style="color:darkgray; font-size: 0.8em; font-style: italic; margin: -10px 0px 0px 0px;" v-html="description" />
                </v-row>
            </v-col>

        </v-row>
        <v-row style="margin:10px 10px 5px 10px">

            <div class="relink"><slot></slot></div>

            <resource-explain v-if="!simple" :webpage="correctedWebPage">
                <slot name="explain"></slot>
                <template v-if="$slots.webpagetext" #webpagetext><slot name="webpagetext"></slot></template>
            </resource-explain>

            <nuxt-link v-if="buttonUrl != null" :to="buttonUrl"><v-btn prepend-icon="mdi-arrow-right-bold-box-outline" class="nocaps">Weiterführende Erklärung anzeigen</v-btn></nuxt-link>
        </v-row>        
    </v-tabs-window-item>
</template>

<script>
import { useResourcesStore } from '~/stores/resources';
import { useRoute } from 'vue-router'

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
            router: {},
            resourcesStore: {},
            resource: null,
            buttonUrl: null
        }
    },
    mounted() {
        this.$data.router = useRouter();
        this.$data.resourcesStore = useResourcesStore();
        this.$data.resource = this.$data.resourcesStore.getResource(this.$props.rkey);
        
        var current = useRoute().path;
        var matches = this.$data.router.getRoutes().filter(r => r.path.startsWith(`${current}/${this.$props.rkey}`));

        this.$data.buttonUrl = matches.length > 0 ? matches[0].path : null;
    },
    computed: {
        correctedWebPage() {
            return ".." + this.$props.webpage;
        }
    }
}
</script>