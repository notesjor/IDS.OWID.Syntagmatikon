<template>
  <v-tabs fixed-tabs style="width: 100%; margin-top:20px" v-model="tab">
    <v-tab value="1" class="nocaps">
      <v-tab-title><v-icon v-show="tab == 2" style="margin-right: 5px;">mdi-arrow-right-bold-box-outline</v-icon>Wo
        finde ich diese Angabe?</v-tab-title>
    </v-tab>
    <v-tab value="2" class="nocaps">
      <v-tab-title><v-icon v-show="tab == 1"
          style="margin-right: 5px;">mdi-arrow-right-bold-box-outline</v-icon>Beispiele und
        Interpretation?</v-tab-title>
    </v-tab>
  </v-tabs>

  <v-tabs-window v-model="tab"
    style="border: 1px white solid; border-radius: 5px; padding: 10px; background-color: white; margin:0px -10px 0px -10px">
    <v-tabs-window-item value="1" style="padding:0px 0px 0px 0px">
      <v-row style="margin: 10px 0px;">
        <p style="margin: 10px 0px">
          <slot name="webpage-text">
            Die beschriebene Information ist im Artikel an folgender Position zu finden (rote Markierung):
          </slot>
        </p>
        <div style="width: 100%;">
          <img :src="webpage" alt="Artikel mit Annotation" style="margin: auto;">
        </div>
      </v-row>
    </v-tabs-window-item>

    <v-tabs-window-item value="2" style="padding:0px 0px 0px 0px">
      <v-row style="margin: 10px 0px;">
        <slot></slot>
      </v-row>
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script>

export default {
  name: "ResourceExplain",
  props: {
    webpage: {
      default: "../dummy/resource.png"
    }
  },
  data() {
    return {
      tab: "1"
    }
  }
}

</script>