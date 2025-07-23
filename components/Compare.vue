<!-- HINWEIS: Dies ist eine Kompoente, mit mehreren Sub-Komponenten: SamplerItem +> SamplerItemText -->
<template>
  <div v-if="extraLarge" class="nolink"
    style="border:1px #ccc solid; border-radius: 5px; padding: 10px; background-color: rgba(0, 0, 0, 0.05); position: relative; left: -10px; width: calc(100% + 330px);">
    <v-row style="margin-top:-20px">
      <v-col cols="8">
        <div style="background: #fff; border-radius: 5px; margin-left: 4px;">
          <v-tabs-window v-model="currentTab"
            style="border: 1px white solid; border-radius: 5px; padding: 10px; background-color: #fff; margin:0px -10px 0px -10px">
            <slot />
          </v-tabs-window>
        </div>
      </v-col>
      <v-col cols="4">
        <div style="position: sticky; top: 10px; max-height: calc(100vh - 40px); overflow-y: auto;">
          <v-tabs v-model="currentTab" direction="vertical">
            <v-tab v-for="(item, index) in tabs" :key="index" class="denseMe">
              <span class="nocaps" style="letter-spacing: normal;">
                <v-chip variant="outlined" density="compact">
                  <span v-html="item" style="font-family: var(--FF-DISPLAY);" /><br />
                </v-chip>
              </span>
            </v-tab>
          </v-tabs>
        </div>
      </v-col>
    </v-row>
  </div>
  <div v-else class="nolink"
    style="border:1px #ccc solid; border-radius: 5px; padding: 10px; background-color: rgba(0, 0, 0, 0.05);">
    <v-row style="margin-top:-20px">
      <v-col>
        <v-tabs v-model="currentTab">
          <v-tab v-for="(item, index) in tabs" :key="index">
            <span class="nocaps" style="letter-spacing: normal;">
              <v-chip variant="outlined" density="compact">
                <span v-html="item" style="font-family: var(--FF-DISPLAY);" /><br />
              </v-chip>
            </span>
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>

    <v-row style="margin: -10px 0px 0px 0px;">
      <v-col>
        <v-tabs-window v-model="currentTab"
          style="border: 1px white solid; border-radius: 5px; padding: 10px; background-color: white; margin:0px -10px 0px -10px">
          <slot />
        </v-tabs-window>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { useResourcesStore } from '~/stores/resources';

export default {
  name: "Compare",
  props: {
    title: {
      type: String,
      default: "Ressourcen"
    },
    filter: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentTab: 0,
      tabs: [],
      extraLarge: false,
    }
  },
  mounted() {
    this.resourcesStore = useResourcesStore();

    var tabs = [];
    tabs.push("Übersicht");
    if (this.resourcesStore == null)
      return tabs;

    for (let i = 0; i < this.filter.length; i++) {
      tabs.push(this.resourcesStore.getResource(this.filter[i]).nameShort);
    }
    this.tabs = tabs;

    this.checkWidth();
    window.addEventListener('resize', this.checkWidth);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkWidth);
  },
  methods: {
    checkWidth() {
      this.extraLarge = window.innerWidth >= 1460;
    }
  }
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

.denseMe {
  font-size: 0.8rem;
  padding: 0px 0px 0px 10px;
  height: 40px !important;
}

div.v-tabs-window-item {
  margin: 20px !important;
  background-color: red;
}
</style>
