<template>
    <v-card style="margin-bottom: 10px;" elevation="0">
        <v-card-title v-html="title" />
        <v-card-text>

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
            searchStore: null
        }
    },

    watch:{
        searchStore:{
            handler: function(val){
                if(this.searchStore != null)
                console.log(this.title);
                console.log(this.searchStore.getFilter(this.title));
            },
            deep: true
        }
    }
}
</script>