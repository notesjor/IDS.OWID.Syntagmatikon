<template>
    <v-card style="margin-bottom: 10px;" elevation="0" @mouseenter="changeOverlay(true)" @mouseleave="changeOverlay(false)">
        <v-card-title>
            <a :href="url" target="_blank">
                <h2 class="text-xl" v-html="nameShort" />
            </a>
        </v-card-title>
        <v-card-text style="margin-top:-10px">
            <a :href="url" target="_blank">
                <v-card elevation="0">
                    <v-card-text>
                        <img v-if="img != undefined" :src="img"
                            style="width: 100%; height: auto; margin-bottom: 10px;" />
                        <img v-else src="/dummy/resource.png" style="width: 100%; height: auto; margin-bottom: 10px;" />
                        <v-overlay contained v-model="overlay" style="align-items: center; text-align: center;">
                            <v-btn prepend-icon="mdi-open-in-new" style="margin-left: 55px;">Zur Ressource</v-btn>
                        </v-overlay>
                    </v-card-text>
                </v-card>

                <div style="text-align: justify;">
                    <div v-html="description" />
                </div>
            </a>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        url: String,
        nameShort: String,
        img: String,
        description: String
    },
    data() {
        return {
            overlay: false
        }
    },
    methods: {
        changeOverlay: function (value) {
            console.log(value)
            this.overlay = value;
        }
    }
}
</script>