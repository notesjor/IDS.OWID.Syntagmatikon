<template>
  <div class="nolink">
    <!-- BUTTON START -->
    <v-sheet @click="dialog_search = true" :disabled="query === ''" style="text-transform: none;">
      <v-btn color="#f9b211" variant="tonal" icon="mdi-magnify">
      </v-btn>
      <span style="margin-left: 5px; font-weight: 600;">OWIDplusLIVE: </span>
      <slot />
    </v-sheet>
    <!-- BUTTON ENDE -->
    <!-- DIALOG - START -->
    <v-dialog v-model="dialog_search" width="90%" height="80%">
      <v-card>
        <v-card-title>
          <div style="display: flex;">
            <div style="display: inline;">
              OWIDplusLIVE-Zeitreihe für: <span style="font-weight:lighter; margin-left:10px; margin-right:5px">{{ query
              }}</span>
              <!-- TODO <a :href="getKorapLink()" target="_blank" style="text-decoration:none"><v-icon>mdi-open-in-new</v-icon></a>-->
            </div>
            <div style="flex-grow: 1;" />
            <div style="display: inline;">
              <v-icon @click="dialog_search = false">mdi-close</v-icon>
            </div>
          </div>
        </v-card-title>
        <v-card-text>
          <div>
            <div style="display: flex; justify-content: center; align-items: center; margin-top:20px">
              <echart-line :options="chartOptions" />
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
import { Store } from "../api/owidPlusLive/owidPlusLiveLight.js";

export default {
  name: 'BtnOwidPlusLiveSearch',

  props: {
    query: {
      type: String,
      default: ""
    },
  },

  data() {
    return {
      store: null,
      chartData: null,
      chartOptions: null,
      dialog_search: false
    };
  },

  mounted() {
    var self = this;
    this.$data.store = new Store(() => self.calc());
    console.log("OWIDPlusLiveSearch mounted");
  },

  methods: {
    calc() {
      if (this.$props.query == null)
        return;

      let self = this;
      this.$data.store.search(this.query, () => {
        self.chartData = self.$data.store.vizData;
        self.updateChart(self);
      });
    },
    updateChart(self) {
      if (self.$data.store.vizData === null) return null;

      var availableDates = self.$data.store.owid.Dates;

      var series = [];

      for (const key in self.$data.store.vizData) {
        if (key === "ALLE") continue;
        const data = self.$data.store.vizData[key];

        var values = [];
        availableDates.forEach((c) => {
          if (c in data.data) values.push(data.data[c]);
        });

        series.push({
          name: data.name,
          type: "line",
          data: values,
          symbolSize: 1,
          line: { marker: { enable: false } },
        });
      }

      var unit = self.$data.store.vizOptionRelative ? "(pro Mio. Token)" : "(Token)";

      this.$data.chartOptions = {
        toolbox: {
          show: true,
          top: "3%",
          right: "10%",
          feature: {
            saveAsImage: {
              title: "Speichern \xa0 \xa0 \xa0 \xa0 \xa0",
              name: "OWIDplusLIVE",
            },
          },
        },
        animation: false,
        legend: {
          show: true,
        },
        xAxis: {
          type: "category",
          data: availableDates,
        },
        yAxis: {
          type: "value",
          scale: true,
        },
        series: series,
        dataZoom: [
          { type: "slider", show: true },
          { type: "inside", show: true },
        ],
        tooltip: {
          axisPointer: {
            snap: true,
            type: "cross",
          },
          formatter: function (params) {
            return (
              "<strong>" +
              params.seriesName +
              "</strong><br/>" +
              params.name +
              ": " +
              params.value
                .toString()
                .replace(",", "'")
                .replace(".", ",") +
              " " +
              unit
            );
          },
        },
      };
    }
  }
}
</script>
