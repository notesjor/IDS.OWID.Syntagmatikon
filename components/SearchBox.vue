<template>
    <v-expansion-panel :title="title" :v-model="expanded">
        <v-expansion-panel-text>
            <div class="nolink">
                <v-row style="margin:0px 0px 0px -35px;">
                    <v-col>
                        <div style="font-size:14px; display:block; float:left; padding-left:25px">
                            Auswahl:
                        </div>
                        <a @click="selectAll" style="cursor: pointer; font-weight: 600;">
                            <h6
                                style="font-size:14px; display:block; float:left; margin-left:10px; font-variant:small-caps">
                                Alle
                            </h6>
                        </a>
                        <a @click="selectNone" style="cursor: pointer; font-weight: 600;">
                            <h6
                                style="font-size:14px; display:block; float:left; margin:0px 10px 0px 10px; font-variant:small-caps">
                                Keine
                            </h6>
                        </a>
                        <a @click="selectInvert" style="cursor: pointer; font-weight: 600;">
                            <h6 style="font-size:14px; display:block; float:left; font-variant:small-caps">
                                Invertieren
                            </h6>
                        </a>
                    </v-col>
                </v-row>
                <v-row style="margin:-15px 0px 0px -10px">
                    <v-col>
                        <v-checkbox v-for="x in items" :key="x" density="compact" hide-details="true" :label="x" />
                    </v-col>
                </v-row>
            </div>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
        expanded: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        selectAll() {
            this.$emit('select-all');
        },
        selectNone() {
            this.$emit('select-none');
        },
        selectInvert() {
            this.$emit('select-invert');
        }
    }
}
</script>