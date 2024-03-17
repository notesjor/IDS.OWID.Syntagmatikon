<template>
    <v-card v-if="items.length > 0" style="margin-bottom: 10px;" elevation="0">
        <v-card-title v-html="title" />
        <v-card-text style="line-height: 2.3em;">
            <a :href="item.url" v-for="item in items" :key="item.id" style="margin-right: 15px; display: block;">
                <v-btn variant="text" style="text-transform: none;">
                    <v-icon style="margin: 0px 5px 0px 0px; font-size: 1em;">mdi-open-in-new</v-icon>
                    <span style="font-size: 1.2em;">{{ item.key }}</span>
                </v-btn>
            </a>
            <v-pagination v-model="index" :length="pages" rounded="circle"></v-pagination>
        </v-card-text>
    </v-card>
</template>

<script>
import { useSearchStore } from '~/stores/search';
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },

    mounted() {
        this.searchStore = useSearchStore();
        this.groups = new Set(this.searchStore.getFilter(this.title).map(x => x.key));
    },

    data() {
        return {
            searchStore: null,
            searchStoreCounter: -1,

            groups: new Set(),

            items: [],
            pages: 0,
            index: 1,
        }
    },

    methods: {
        update() {
            var self = this;
            this.searchStore.getItems(this.groups, this.index).then(items => {
                self.pages = self.searchStore.getPageSize(self.groups);
                self.items = items;
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