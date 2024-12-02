<!-- HINWEIS: Dies ist eine Sub-Kompoente und gehört zu Sampler.vue -->
<template>
  <div>
    <v-row style="padding:20px 5px 5px 5px">
      <v-card elevation="8">
        <v-card-text class="text" style="line-height: 24px;">
          <sampler-item-text v-for="(t, i) in text" :key="i" :text="t" :num="i" @publish="publish"></sampler-item-text>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row style="padding: 10px 25px 5px 25px;" v-if="info != null">
      <div style="width: 100%;">
        <v-card>
          <v-card-title :style="infoStyle">{{ info.source }}</v-card-title>
          <v-card-subtitle>{{ info.type }}</v-card-subtitle>
          <v-card-text>
            <v-btn prepend-icon="mdi-arrow-right" style="text-transform: none;" :href="info.href">{{ info.article
              }}</v-btn>
          </v-card-text>
        </v-card>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  emits: ["next"],

  data() {
    return {
      text: [],
      source: "",
      article: "",
      type: "",
      href: "",

      info: null,
      infoStyle: "",

      stop: false,
    };
  },

  async mounted() {
    this.$data.text = this.getText();
    var text = this.$data.text;

    var last = null;
    var count = 0;

    for (const t of text) {
      if (t.color == "black")
        continue;

      setTimeout((obj) => {
        if (obj.last != null)
          obj.last.unpublish();
        obj.t.publish();
      }, count * 5000, { last: last, t: t });

      last = t;
      count++;
    }

    setTimeout((obj) => {
      if (obj.last != null)
        obj.last.unpublish();
      this.$emit("next");
    }, count * 5000, { last: last });
  },

  methods: {
    getText() {
      var texts = [];
      var current = {
        text: "",
        color: "black",
        source: "",
        article: "",
        type: "",
        href: ""
      };
      const { tokens, annotations } = this.data;

      var stop = -1;
      for (let i = 0; i < tokens.length; i++) {
        if (stop > -1 && i === stop) {
          if (current.text != "") {
            texts.push(current);
          }

          current = {
            text: "",
            color: "black",
            source: "",
            article: "",
            type: "",
            href: ""
          };
          stop = -1;
        }

        if (stop === -1) {
          let annotation = annotations.find(a => a.from === i);
          if (annotation) {
            stop = annotation.to;

            if (current.text != "") {
              texts.push(current);
            }

            current = {
              text: tokens[i] + " ",
              color: annotation.color,
              source: annotation.source,
              article: annotation.article,
              type: annotation.type,
              href: annotation.href
            };
          }
          else {
            current.text += tokens[i] + " ";
          }
        }
        else {
          current.text += tokens[i] + " ";
        }
      }

      if (current.text != "") {
        texts.push(current);
      }

      return texts;
    },
    publish(data) {
      if (data == null) {
        return;
      }
      this.$data.info = data;
      this.$data.infoStyle = `color:${data.color};`;
    },
  }
}
</script>

<style scoped>
.text {
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 300;
}

div.v-window__controls>button.v-btn {
  font-size: 15px;
  width: 32px;
  height: 32px;
}

div.v-window__controls {
  max-height: 275px;
}
</style>