<template>
  <div style="border:1px black solid; border-radius: 5px; padding: 10px; background-color: rgba(0, 0, 0, 0.05);">
    <v-row>
      <v-col>
        <div @mouseenter="carouselStop" @mouseleave="carouselStart"
          style="border: 1px white solid; border-radius: 5px; padding: 5px; background-color: white;">
          <v-carousel hide-delimiter-background hide-delimiters continuous ref="carousel" v-model="tab" :cycle="cycle"
            class="notransition">
            <v-carousel-item v-for="(item, i) in generatePages()" :key="i" eager>
              <v-sheet height="100%">
                <div style="padding:7px 75px 5px 75px;">
                  <v-row>
                    <div v-html="item.html"
                      style="margin:10px -50px 0px -50px; font-size: 1.1rem; line-height: 1.5; font-weight: 300;">
                    </div>
                  </v-row>                  
                  <div style="width: 100%; margin: 0px 20px 20px 20px;">
                    <a v-for="r in item.references" :key="r" :href="r.href" target="_blank">
                      <v-row>&nbsp;</v-row>
                      <v-row>
                        <hr style="width: 75%;" />
                      </v-row>
                      <v-row>
                        <div style="font-weight: 200;" v-html="r.source"></div>
                      </v-row>
                      <v-row>
                        <v-icon :style="`color:${r.color}; margin-right: 5px;`" class="animated">mdi-open-in-new</v-icon>
                        <div :style="`color:${r.color}`">{{ r.article }}</div>
                      </v-row>
                      <v-row style="font-weight: 200; font-style: italic;">
                        <div>{{ r.type }}</div>
                      </v-row>
                    </a>
                  </div>
                </div>
              </v-sheet>
            </v-carousel-item>

            <template v-slot:prev="{ props }">
              <v-btn variant="elevated" @click="props.onClick" icon="mdi-arrow-left-thick" style="background-color: rgba(0, 0, 0, 0.05);"></v-btn>
            </template>
            <template v-slot:next="{ props }">
              <v-btn variant="elevated" @click="props.onClick" icon="mdi-arrow-right-thick" style="background-color: rgba(0, 0, 0, 0.05);"></v-btn>
            </template>
          </v-carousel>
        </div>
      </v-col>
    </v-row>
    <v-row style="margin-top:-20px">
      <v-col>
        <h1 class="text-xl">Interaktive-Beispiele</h1>
        <h2 class="text-l">Klicken Sie auf eine Stelle im Beispiel, um eine Liste zugehöriger Ressourcen im Syntagmatikon
          anzuzeigen.
          Mit einem erneuten Klick auf eine der Ressourcen rufen Sie diese auf.
        </h2>        
      </v-col>
    </v-row>
  </div>
</template>

<script>
var unselectedColor = "#666";

export default {
  name: "SlideBox",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      cycle: true,
      tab: 0,
    }
  },
  methods: {
    generatePages() {
      var baseIndex = 0;
      var res = [];
      for (var x in this.$props.items) {
        var item = this.$props.items[x];
        var max = item.annotations.length;

        for (var i = 0; i < max; i++) {

          var tokens = [...item.tokens];
          var data = {};

          for (var j = 0; j < max; j++) {

            var ranges = item.annotations[j].ranges;
            var references = item.annotations[j].references;

            for (var k = 0; k < ranges.length; k++) {
              var range = ranges[k];

              var f = range.from;
              var t = range.to - 1;

              if (i == j) {
                tokens[f] = `<anno_${j} class="anno" id="${baseIndex + j}" style="${this.makeStyle(references[0].color)}">${tokens[f]}`;
                tokens[t] = `${tokens[t]}</anno_${j}>`;
              } else {
                tokens[f] = `<anno_${j} class="anno" id="${baseIndex + j}" style="${this.makeStyle(unselectedColor)}">${tokens[f]}`;
                tokens[t] = `${tokens[t]}</anno_${j}>`;
              }
            }

            if (i == j) {
              data.references = item.annotations[j].references;
            }
          }

          data.html = tokens.join(' ');
          res.push(data);
        }

        baseIndex += max;
      }
      return res;
    },
    makeStyle(color) {
      if (color == unselectedColor)
        return `color:${unselectedColor}; background-color:${unselectedColor}0A; border-radius: 3px; border: 2px dotted ${unselectedColor}; padding: 0 3px`;
      else
        return `color:${color}; background-color:${color}0A; border-radius: 3px; border: 2px dotted ${color}; padding: 3px 5px;`;
    },
    carouselStop() {
      this.cycle = false;
    },
    carouselStart() {
      this.cycle = true;
    },
  },
  mounted() {
    var self = this;
    this.$nextTick(function () {
      let buttons = document.getElementsByClassName('anno');
      // interrate over buttons
      for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        button.addEventListener('click', (event) => {
          self.tab = parseInt(button.getAttribute('id'));
        });
      }
    })
  },
}
</script>
  
<style scoped>
.v-window {
  max-height: 320px;
}

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
  animation: pulsate 2s infinite;
}

.v-window__controls > button {
  position: relative;
  top: -55px;
}

</style>

