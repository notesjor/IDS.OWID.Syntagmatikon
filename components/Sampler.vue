<!-- HINWEIS: Dies ist eine Kompoente, mit mehreren Sub-Komponenten: SamplerItem +> SamplerItemText -->
<template>
  <div class="nolink"
    style="border:1px #ccc solid; border-radius: 5px; padding: 10px; background-color: rgba(0, 0, 0, 0.05);">
    <v-row>
      <v-col>
        <div @mouseenter="carouselStop" @mouseleave="carouselStart"
          style="border: 1px white solid; border-radius: 5px; padding: 5px; background-color: white;">
          <v-tabs-window hide-delimiter-background hide-delimiters continuous v-model="tab" :cycle="cycle"
            class="notransition" interval="10000">
            <v-tabs-window-item v-for="(item, i) in generatePages()" :key="i" eager>
              <div style="padding:20px 75px 0px 75px;">
                <v-row>
                  <!--Styling für den Beleg-->
                  <div style="padding:10px 40px 10px 40px; background-color: #fff9eb; margin-top:20px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">


                    <div v-html="item.html" style="margin:10px -20px 0px -20px; 
                     
                      line-height: 1.5; font-weight: 300;">
                    </div>
                  </div>
                </v-row>
                <div style="width: 100%; margin: 40px 0px 0px 0px">
                  <a v-for="r in item.references" :key="r" :href="r.href" target="_blank">
                    <hr style="width: 75%; margin-left: auto; margin-right: auto;" />
                    <div style="font-weight: 200;" v-html="r.source"></div>
                    <div>
                      <v-icon :style="`color:${r.color}; margin-right: 5px;display:inline-block;margin:-7px 5px 0px 0px`"
                        class="animated">mdi-arrow-right-circle-outline</v-icon>
                      <div :style="`color:${r.color};display:inline-block;`">{{ r.article }}</div>
                    </div>
                    <div>{{ r.type }}</div>
                  </a>
                </div>
              </div>
            </v-tabs-window-item>
          </v-tabs-window>
          <v-btn density="compact" variant="text" @click="tabPrev" icon="mdi-arrow-left-bold-box-outline"
            class="myBtnPrev"></v-btn>
          <v-btn density="compact" variant="text" @click="tabNext" icon="mdi-arrow-right-bold-box-outline"
            class="myBtnNext"></v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row style="margin-top:0px">
      <v-col>
        <!-- <p class="text-xl">Interaktive Beispiele</p> -->
        <div class="caption">
          Interaktive Beispiele. Sind mehrere Beispiele in einem Beleg, können diese durch Anklicken einzeln ausgewählt
          werden.
        </div>
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
    tabPrev() {
      if (this.tab > 0)
        this.tab = this.tab - 1;
    },
    tabNext() {
      if (this.tab < this.$props.items.length - 1)
        this.tab = this.tab + 1;
    }
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
  color: darkgrey;
  position: relative;
  top: -10rem;
}

.myBtnNext {
  color: darkgrey;
  position: relative;
  top: -10rem;
  left: 28.5rem;
}
</style>
