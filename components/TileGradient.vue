<template>
    <div class="nolink">
        <NuxtLink :to="link">
            <v-card :style="highlightItem('Deskriptive Datenbank')" elevation="0">
                <v-card-title>
                    <div style="position: relative;">
                        <gradient style="min-width: 332px; min-height: 50px; border-radius:25px" :color1="color1" :color2="color2"
                            :color3="color3" />
                        <h3 style="position: absolute; top:-6px; left:5px; background-color: rgba(255, 255, 255, 0.65); padding: 8px 5px 3px 10px; width: 100%; min-width: 322px; border-radius:25px">
                            <v-btn variant="tonal" icon="mdi-open-in-new"
                                style="display:inline-block; margin:-5px 0px 0px -5px; font-size: 0.6em;" width="30"
                                height="30"></v-btn>
                            {{ title }}
                        </h3>
                    </div>
                </v-card-title>
                <v-card-text>
                    <div class="relink">
                        <slot />
                    </div>
                </v-card-text>
            </v-card>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name: "Tile",
    theme: { dark: false },
    props: {
        title: { type: String, default: null }, // Titel
        //subtitle: { type: String, default: null }, // Untertitel (optional)
        color1: { type: String, default: '#000000' }, // Farbe 1
        color2: { type: String, default: '#ffff00' }, // Farbe 2
        color3: { type: String, default: '' }, // Farbe 3
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