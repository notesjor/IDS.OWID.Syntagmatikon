<template>
    <v-card v-if="items.length > 0" elevation="0">
        <v-card-text style="line-height: 2.3em;">
            <v-row>
                <v-col>
                    <div style="margin-top: -30px;">
                        <a :href="item.url" v-for="item in items" :key="item.id"
                            style="margin-right: 15px; display: block;">
                            <v-btn variant="text" style="text-transform: none;">
                                <v-icon
                                    style="margin: 0px 5px 0px 0px; font-size: 1em;">mdi-arrow-right-circle-outline</v-icon>
                                <span style="font-size: 1.2em; word-wrap:break-word">
                                    <div style="display: inline-block;">{{ item.key }}</div>
                                    <div v-if="!this.searchStore.isDefault"
                                        style="display: inline-block; color: #999; font-size: 0.7em;">
                                        (<span v-html="this.resourcesStore.getItemByKey(item.dic).nameShort"></span>)
                                    </div>
                                </span>
                            </v-btn>
                        </a>
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import { useSearchStore } from '~/stores/search';
import { useResourcesStore } from '~/stores/resources';
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },

    mounted() {
        this.searchStore = useSearchStore();
        this.resourcesStore = useResourcesStore();
        this.groups = new Set(this.searchStore.getFilter(this.title).map(x => x.key));
    },

    data() {
        return {
            searchStore: null,
            searchStoreCounter: -1,
            resourcesStore: null,

            groups: new Set(),

            items: [],
            pages: 0,
            index: 1,

            resource: null,
        }
    },

    methods: {
        update() {
            var self = this;
            this.searchStore.getItems(this.groups, this.index).then(items => {
                self.pages = self.searchStore.getPageSize(self.groups);
                self.items = items;
                self.resource = self.searchStore.isDefault ? self.resourcesStore.getItemByNameShort(self.title) : null;
            });
        }
    },

    watch: {
        searchStore: {
            handler: function (val) {
                if (this.searchStore == null)
                    return;
                if (this.searchStore.counter == this.searchStoreCounter)
                    return;

                this.searchStoreCounter = this.searchStore.counter;
                this.groups = new Set(this.searchStore.getFilter(this.title).map(x => x.key));
                this.index = 1;

                this.update();
            },
            deep: true
        },
        index: {
            handler: function (val) {
                if (this.searchStore == null)
                    return;

                this.update();
            }
        },
        title: {
            handler: function (val) {
                this.index = 1;
                this.groups = new Set(this.searchStore.getFilter(this.title).map(x => x.key));
                this.update();
            }
        }
    }
}
</script>