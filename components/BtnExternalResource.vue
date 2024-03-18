<template>
  <div class="nolink">
    <!-- BUTTON START -->
    <v-sheet @click="dialog_search = true" :disabled="query === ''" style="text-transform: none;">
      <v-btn color="#f9b211" variant="tonal" icon="mdi-magnify">
      </v-btn>
      <span style="margin-left: 5px; font-weight: 600;">{{ name }}: </span>
      <slot />
    </v-sheet>
    <!-- BUTTON ENDE -->
    <!-- DIALOG - START -->
    <v-dialog v-model="dialog_search" width="90%" height="100%">
      <v-card>
        <v-card-title>
          <div style="display: flex;">
            <div style="display: inline;">
              Daten in {{ name }} zu: 
              <span style="font-weight:lighter; margin-left:10px; margin-right:5px">
                {{ query }}
              </span>
              <!-- TODO <a :href="getKorapLink()" target="_blank" style="text-decoration:none"><v-icon>mdi-arrow-right-circle-outline</v-icon></a>-->
            </div>
            <div style="flex-grow: 1;" />
            <div style="display: inline;">
              <v-icon @click="dialog_search = false">mdi-close</v-icon>
            </div>
          </div>
        </v-card-title>
        <v-card-text>
          <div>
            <!--
            <v-alert color="#f9b211" dense outlined text type="warning">
              <strong>Hinweis:</strong> Diese Funktion fragt eine bestimmte Zeitreihe in OWIDplusLIVE ab.
            </v-alert>
          -->
            <div style="display: flex; justify-content: center; align-items: center; margin-top:20px">
              <iframe :src="src" width="100%" :height="height" frameborder="0"></iframe>
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <!---->
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- DIALOG - ENDE -->
  </div>
</template>

<script>
import { useResourcesStore } from '~/stores/resources';

export default {
  name: 'BtnExternalResource',

  props: {
    label: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    },
    resource: {
      type: String,
      default: ""
    },
    query: {
      type: String,
      default: ""
    }
  },

  mounted() {
    var store = useResourcesStore();
    this.resources = store.getResources(null);
  },

  data() {
    return {
      dialog_search: false,
      resources: [],
    };
  },

  computed: {
    name(){
      return this.label != "" ? this.label : this.calcName();
    },
    src() {
      return this.url != "" ? this.url : this.calcSrc();
    },
    height() {
      return window.innerHeight * 0.73 + "px";
    }
  },

  methods: {
    calcName() {
      for (var i = 0; i < this.resources.length; i++) {
        if (this.resources[i].key != this.resource)
          continue

        return this.resources[i].nameShort;
      }
      return "";
    },
    calcSrc() {
      for (var i = 0; i < this.resources.length; i++) {
        if (this.resources[i].key != this.resource)
          continue

        var urlPattern = this.resources[i].quest;
        if(urlPattern == undefined)
          return "";

        return urlPattern.replace("{q}", this.query);
      }
      return "";
    }
  }
}
</script>
