<!-- HINWEIS: Dies ist eine Kompoente, mit mehreren Sub-Komponenten: SamplerItem +> SamplerItemText -->
<template>
  <div class="nolink"
    style="border:1px #ccc solid; border-radius: 5px; padding: 10px; background-color: rgba(0, 0, 0, 0.05);">
    <v-row style="margin-top:-20px">
      <v-col>
        <p class="text-xl">{{ title }}:</p>
        <v-tabs v-model="currentTab">
          <slot name="headers"></slot>
        </v-tabs>
      </v-col>
    </v-row>

    <v-row style="margin: -10px 0px 0px 0px;">
      <v-col>
        <v-tabs-window v-model="currentTab" style="border: 1px white solid; border-radius: 5px; padding: 10px; background-color: white; margin:0px -10px 0px -10px">
          <slot name="tabs"></slot>
        </v-tabs-window>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <p class="text-l">
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Compare",
  props: {
    title: {
      type: String,
      default: "Ressourcen"
    }
  },
  data() {
    return {
      currentTab: 0
    }
  },
  methods: {
  },
}
</script>

<style scoped>
.notransition div {
  transition: none !important;
  transition-timing-function: none !important;
}

@keyframes pulsate {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.1;
  }

  100% {
    opacity: 1;
  }
}

.animated {
  animation: pulsate 10s infinite;
}

.v-window__controls>button {
  position: relative;
  top: -55px;
}

.myBtnPrev {
  margin-left: -15px;
}

.myBtnNext {
  margin-right: -15px;
}
</style>
