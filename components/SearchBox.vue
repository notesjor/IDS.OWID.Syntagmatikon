<template>
    <v-expansion-panel>
        <v-expansion-panel-title>
            <v-switch density="compact" style="max-width: 50px; max-height: 20px; margin-top: -20px;" color="primary"
                v-model="enableState"></v-switch>
            {{ title }}
        </v-expansion-panel-title>
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
                    <v-checkbox v-for="x in itemState" :key="x.item" hide-details="true" v-model="x.checked"
                        style="width: 100%;">
                        <template v-slot:label>
                            <span v-html="x.item"></span>
                        </template>
                    </v-checkbox>
                </v-row>
            </div>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<!-- TODO -->
<style scoped>
label {
    opacity: 1 !important; 
}
</style>

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
        enable: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            itemState: null,
            enableState: true,
        }
    },

    methods: {
        selectAll() {
            this.itemState = this.itemState.map(x => { return { item: x.item, checked: true } });
        },
        selectNone() {
            this.itemState = this.itemState.map(x => { return { item: x.item, checked: false } });
        },
        selectInvert() {
            this.itemState = this.itemState.map(x => { return { item: x.item, checked: !x.checked } });
        },
        submitUpdate(){
            this.$emit('update', { items: this.itemState, enable: this.enableState});
        }
    },
    watch: {
        items: {
            immediate: true,
            handler(newVal) {
                if (newVal != null)
                    this.itemState = Array.from(newVal).map(x => { return { item: x, checked: true } });
            }
        },
        enable: {
            immediate: true,
            handler(newVal) {
                this.enableState = newVal;
            }
        },

        itemState: {
            handler(newVal) {
                this.submitUpdate();
            },
            deep: true
        },
        enableState: {
            handler(newVal) {
                if(newVal)
                    this.submitUpdate();
            }
        }
    },
}
</script>