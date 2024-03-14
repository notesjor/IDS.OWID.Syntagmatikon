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
                        <v-checkbox v-for="x in itemState" :key="x.item" density="compact" hide-details="true"
                            :label="x.item" v-model="x.checked"/>
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
            type: Set,
            required: true
        },
        expanded: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            itemState: null
        }
    },

    methods: {
        selectAll() {
            // set all items in itemState to true
            this.itemState = this.itemState.map(x => { return { item: x.item, checked: true } });
        },
        selectNone() {
            this.itemState = this.itemState.map(x => { return { item: x.item, checked: false } });
        },
        selectInvert() {
            this.itemState = this.itemState.map(x => { return { item: x.item, checked: !x.checked } });
        }
    },
    watch: {
        items: {
            immediate: true,
            handler(newVal) {
                if(newVal != null)
                    this.itemState = Array.from(newVal).map(x => { return { item: x, checked: false } });
            }
        },

        itemState: {
            handler(newVal) {
                if(newVal.filter(x => x.checked).length == 0)
                    this.$emit('selected-items-changed', null);
                else
                    this.$emit('selected-items-changed', newVal.filter(x => !x.checked).map(x => x.item));
            },
            deep: true
        }
    },
}
</script>