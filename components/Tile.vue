<template>
    <div class="nolink">
        <v-card :style="highlightItem('Deskriptive Datenbank')" elevation="0">
            <v-card-title>
                <NuxtLink :to="link">
                    <div style="position: relative; justify-content: center;">
                        <NuxtImage :src="img"
                            style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                        <div
                            style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px">
                            <h3 style="text-wrap:wrap; text-align: left;">
                                <v-btn v-if="link != null" variant="tonal" icon="mdi-arrow-right-circle-outline"
                                    style="display:inline-block; margin:-5px 0px 0px 0px; font-size: 0.6em;" width="30"
                                    height="30"></v-btn>
                                {{ title }}
                            </h3>
                            <h4 style="text-wrap:wrap; text-align: left;" v-if="subtitle != null">{{ subtitle }}</h4>
                        </div>
                    </div>
                </NuxtLink>
            </v-card-title>
            <v-card-text>
                <div class="relink">
                    <slot />
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "Tile",
    theme: { dark: false },
    props: {
        title: { type: String, default: null }, // Titel
        subtitle: { type: String, default: null }, // Untertitel (optional)
        img: { type: String, default: null }, // Bild
        link: { type: String, default: null }, // Link - Verlinkt werden Titel, Unteritel, Grafik und Text
    },
    data() {
        return {
            highlight: null,
        };
    },
    mounted() {
        if (this.$route.query.highlight) {
            this.highlight = this.$route.query.highlight;
        }
    },
    methods: {
        highlightItem() {
            return this.highlight == this.title ?
                "max-width: 350px; margin:10px; border: 3px solid black" :
                "max-width: 350px; margin:10px";
        }
    },
}
</script>

<style scoped>
h4 {
    font-size: 12pt;
}
</style>