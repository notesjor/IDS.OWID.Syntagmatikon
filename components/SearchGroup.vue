<template>
    <v-card v-if="items.length > 0" style="margin-bottom: 10px;" elevation="0">
        <v-card-title>
            <div v-if="this.searchStore.isDefault">
                <a :href="resource.url">
                    <v-icon style="font-size: 0.9em; margin-top:-3px; margin-right: 5px;">mdi-open-in-new</v-icon>
                    <span v-html="title"></span>
                </a>
            </div>
            <div v-else>
                <span v-html="title"></span>
            </div>
        </v-card-title>
        <v-card-text style="line-height: 2.3em;">
            <div v-if="this.searchStore.isDefault">
                <!-- image floated left around text -->
                <img :src="resource.img" style="height: 100px; float: left; margin-right: 15px;"></img>
                <div style="font-size: 1.1em; line-height: 1.7em; margin-bottom: 10px;" v-html="resource.description"></div>
            </div>
            <a :href="item.url" v-for="item in items" :key="item.id" style="margin-right: 15px; display: block;">
                <v-btn variant="text" style="text-transform: none;">
                    <v-icon style="margin: 0px 5px 0px 0px; font-size: 1em;">mdi-open-in-new</v-icon>
                    <span style="font-size: 1.2em;">
                        <div style="display: inline-block;">{{ item.key }}</div>
                        <div v-if="!this.searchStore.isDefault"
                            style="display: inline-block; color: #999; font-size: 0.7em; margin: -50px 0px 0px 5px;">
                            (<span v-html="this.resourcesStore.getItemByKey(item.dic).nameShort"></span>)
                        </div>
                    </span>
                </v-btn>
            </a>
            <v-pagination v-model="index" :length="pages" rounded="circle"></v-pagination>
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