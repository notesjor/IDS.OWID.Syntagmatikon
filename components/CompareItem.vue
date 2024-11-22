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
                <nuxt-link v-if="buttonUrl != null" :to="buttonUrl"><v-btn prepend-icon="mdi-lightbulb-on"
                        class="nocaps" variant="elevated" color="">Fallbeispiel</v-btn></nuxt-link>
                <v-spacer></v-spacer>
                <nuxt-link v-if="!simple" :to="resource.url"><v-btn prepend-icon="mdi-arrow-right-bold-box-outline"
                        class="nocaps" variant="elevated" color="">zur Ressource</v-btn></nuxt-link>
            </v-row>
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
            default: null
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
            if (this.$props.webpage != null) {
                return ".." + this.$props.webpage;
            }
            else {
                return this.$props.webpage;
            }
        }
    }
}
</script>