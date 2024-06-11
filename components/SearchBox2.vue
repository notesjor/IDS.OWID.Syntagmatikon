<template>
    <v-expansion-panel v-if="searchStore != null">
        <v-expansion-panel-title :style="styleBoarder">
            <div style="margin:-10px"><v-icon :style="styleIcon" v-if="!allSameValue"
                    @click="selectNone">mdi-filter-remove</v-icon>{{ title }}</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
            <div class="nolink">
                <v-row style="margin:0px 0px 0px -35px;">
                    <v-col>
                        <div style="font-size:14px; display:block; float:left; padding-left:25px">
                            Auswahl:
                        </div>
                        <a @click="selectAll" style="cursor: pointer; font-weight: 600;">
                            <h6
                                style="font-size:14px; display:block; float:left; margin-left:10px; font-variant:small-caps">
                                Alle
                            </h6>
                        </a>
                        <a @click="selectNone" style="cursor: pointer; font-weight: 600;">
                            <h6
                                style="font-size:14px; display:block; float:left; margin:0px 10px 0px 10px; font-variant:small-caps">
                                Keine
                            </h6>
                        </a>
                        <a @click="selectInvert" style="cursor: pointer; font-weight: 600;">
                            <h6 style="font-size:14px; display:block; float:left; font-variant:small-caps">
                                Invertieren
                            </h6>
                        </a>
                    </v-col>
                </v-row>
                <v-row style="margin:0px 0px 0px 0px">
                    <v-checkbox v-for="x in items" :key="x.item" hide-details="true" v-model="x.checked"
                        style="width: 100%;" density="compact">
                        <template v-slot:label>
                            <span v-html="x.item" style="margin-left: 5px;"></span>
                        </template>
                    </v-checkbox>
                </v-row>
            </div>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<!-- TODO -->
<style scoped>
label {
    opacity: 1 !important;
}
</style>

<script>
import { useSearchStore } from '~/stores/search';

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        color:{
            type: String,
            default: "black"
        }
    },

    mounted() {
        this.searchStore = useSearchStore();
    },

    data() {
        return {
            searchStore: null,
            items: [],
        }
    },

    methods: {
        selectAll() {
            this.items.forEach(x => x.checked = true);
        },
        selectNone() {
            this.items.forEach(x => x.checked = false);
        },
        selectInvert() {
            this.items.forEach(x => x.checked = !x.checked);
        },
        changeGroup() {
            this.searchStore.updateGroup(this.name);
        }
    },

    // watch if searchStore getter initialized is set to true
    watch: {
        searchStore: function (val) {
            if (val == null | val.initialized == false)
                return;

            var items = this.searchStore.getUniqueItems(this.name);
            this.items = Array.from(items).map(x => {
                return {
                    item: x,
                    checked: true
                }
            });
        },
        items: {
            handler: function (val) {
                this.searchStore.updateItems(this.name, val);
            },
            deep: true
        }
    },

    computed: {
        allSameValue() {
            return this.items.every(x => x.checked === true) || this.items.every(x => x.checked === false);
        },
        styleBoarder() {
            return !this.allSameValue ? `border-left: 40px solid ${this.$props.color};` : `border-left: 10px solid ${this.$props.color};`;
        },
        styleIcon() {
            return `margin: 0px 20px 0px -47px; color: ${this.$props.color != "white" ? "white" : "black"};`;
        }
    }
}
</script>