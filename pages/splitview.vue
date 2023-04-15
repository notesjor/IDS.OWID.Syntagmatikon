<template>
    <div style="margin-left:-17%; margin-right: -19%;">
    <v-row>
        <v-col>
            <div>
                <v-chip :color="panes == 1 ? 'blue' : 'grey'" @click="panes = 1" variant="outlined">1</v-chip>&nbsp;
                <v-chip :color="panes == 2 ? 'blue' : 'grey'" @click="panes = 2" variant="outlined">2</v-chip>&nbsp;
                <v-chip :color="panes == 3 ? 'blue' : 'grey'" @click="panes = 3" variant="outlined">3</v-chip>
            <div class="text-xl" style="display: inline-block; margin: 0px 0px 0px 10px;">
            <div style="position:absolute; margin-top: -20px;">Ressourcen-Vergleich zum Suchausdruck "ENDE"</div>
            </div>
            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col></v-col>
    </v-row>    
        <splitpanes style="height: 400px" class="default-theme">
            <pane min-size="20" style="background-color: red;">1</pane>
            <pane style="background-color: red;">5</pane>
            <pane style="background-color: red;">5</pane>
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
        panes: 3
    }),
}
</script>