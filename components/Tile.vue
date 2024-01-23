<template>
    <div class="nolink">
        <NuxtLink :to="link">
            <v-card :style="highlightItem('Deskriptive Datenbank')">
                <v-card-title>
                    <div style="position: relative; justify-content: center;">
                        <img :src="img" alt="" style="margin: -10px -15px 0px -15px; flex-shrink: 0; min-width: 350px;" />
                        <div
                            style="position: absolute; bottom: 0; left: 0px; background-color: rgba(255, 255, 255, 0.85); width: 110%; padding: 5px;">
                            <h3>
                                {{ title }}
                            </h3>
                            <h4 v-if="subtitle != null">{{ subtitle }}</h4>
                        </div>
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
        title: { type: String, default: null },
        subtitle: { type: String, default: null },
        img: { type: String, default: null },
        link: { type: String, default: null },
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