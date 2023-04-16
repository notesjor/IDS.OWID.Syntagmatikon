<template>
    <div style="margin-left:-17%; margin-right: -19%;">
        <v-row>
            <v-col>
                <div
                    style="display: grid; max-height: 20px; grid-template-columns: 150px auto 150px; grid-template-rows: 100%; gap: 0px 0px; grid-template-areas: 'btn header switch'; ">
                    <div style="grid-area: btn;">
                        <v-chip :color="panes == 1 ? 'blue' : 'grey'" @click="panes = 1" variant="outlined">1</v-chip>&nbsp;
                        <v-chip :color="panes == 2 ? 'blue' : 'grey'" @click="panes = 2" variant="outlined">2</v-chip>&nbsp;
                        <v-chip :color="panes == 3 ? 'blue' : 'grey'" @click="panes = 3" variant="outlined">3</v-chip>
                    </div>
                    <div style="grid-area: header; text-align: left; margin: 5px 0px 0px -20px;">
                        Ressourcen-Vergleich zum Suchausdruck "ENDE"
                    </div>
                    <div style="grid-area: switch; margin-top:-10px;">
                        <v-switch label="Editor" v-model="editor"></v-switch>
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col></v-col>
        </v-row>
        <splitpanes style="height: 77vh" class="default-theme" v-if="panes == 1">
            <pane><iframe :src="urls[0]" style="width:100%; height:100%;"/></pane>
        </splitpanes>
        <splitpanes style="height: 77vh" class="default-theme" v-else-if="panes == 2">
            <pane><iframe :src="urls[0]" style="width:100%; height:100%;"/></pane>
            <pane><iframe :src="urls[1]" style="width:100%; height:100%;"/></pane>
        </splitpanes>
        <splitpanes style="height: 77vh" class="default-theme" v-else>
            <pane><iframe :src="urls[0]" style="width:100%; height:100%;"/></pane>
            <pane><iframe :src="urls[1]" style="width:100%; height:100%;"/></pane>
            <pane><iframe :src="urls[2]" style="width:100%; height:100%;"/></pane>
        </splitpanes>
    </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
// import 'splitpanes/dist/splitpanes.min.css'
import 'splitpanes/dist/splitpanes.css'

export default {
    components: { Splitpanes, Pane },
    data: () => ({
        panes: 3,
        urls: [
            'http://uwv.ids-mannheim.de/prepcon/modul2/artikel/ohne_Ende/index.html',
            'https://www.owid.de/artikel/401702',
            'https://www.owid.de/plus/live-2021/?locale=null&data=W3sibGF5ZXIiOjAsInBvc2l0aW9uIjowLCJ0b2tlbiI6ImVuZGUifV0='],
        editor: false
    }),
}
</script>

<style>
.splitpanes.default-theme .splitpanes__splitter:before,
.splitpanes.default-theme .splitpanes__splitter:after {
    background-color: #333333;
}
</style>