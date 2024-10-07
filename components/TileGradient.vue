<template>
    <div class="nolink" @mouseenter="rotateBkgGradient" @mouseleave="rotateBkgGradient" style="height: auto; margin-bottom: 10px;">
        <v-card :style="highlightItem('Deskriptive Datenbank')" :elevation="elevated ? 1 : 0" style="padding: 0px 5px 0px 0px; height: 100%;" fill-height>
            <v-card-title>
                <NuxtLink :to="link">
                    <div style="position: relative;">
                        <gradient style="min-width: 317px; min-height: 50px; border-radius:25px" :color1="color1"
                            :color2="color2" :color3="color3" :degree="90" ref="bkgGradient" />
                        <h3
                            style="position: absolute; top:-6px; left:5px; background-color: rgba(255, 255, 255, 0.65); padding: 8px 5px 3px 10px; width: 100%; min-width: 300px; border-radius:25px; max-height: 42.5px;">
                            <v-btn v-if="link != null" variant="tonal" icon="mdi-arrow-right-circle-outline"
                                style="display:inline-block; margin:-9px 0px 0px -5px; font-size: 0.6em;" width="30"
                                height="30"></v-btn>
                            <span v-html="title" style="margin: -15px 0px 0px 5px;"></span>
                        </h3>
                    </div>
                </NuxtLink>
            </v-card-title>
            <v-card-text>
                <NuxtLink :to="link">
                    <div class="relink">
                        <slot />
                    </div>
                </NuxtLink>
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
            elevated: false,
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
        },
        rotateBkgGradient() {
            this.$refs.bkgGradient.rotateGradient();
            this.elevated = !this.elevated;
        },
    },
}
</script>