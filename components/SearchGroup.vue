<template>
    <v-card style="margin-bottom: 10px;" elevation="0">
        <v-card-title v-html="title" />
        <v-card-text>
            <ul>
                <li v-for="item in items" :key="item">
                    <a :href="item.url">{{ item.key }}</a>
                </li>
            </ul>
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
    },

    data() {
        return {
            searchStore: null,
            items: []
        }
    },

    watch:{
        searchStore:{
            handler: function(val){
                if(this.searchStore != null)
                
                var groups = new Set(this.searchStore.getFilter(this.title).map(x=>x.key));
                this.items = this.searchStore.items.filter(x=>groups.has(x.dic));
            },
            deep: true
        }
    }
}
</script>