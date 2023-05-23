<template>
  <div>
    <v-row style="padding:20px 5px 5px 5px">
      <v-card elevation="8">
        <v-card-text class="text" style="line-height: 24px;">
          <sampler-item-text v-for="(t, i) in text" :key="i" :text="t" :num="i"></sampler-item-text>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row style="padding: 10px 25px 5px 25px;">
      <div id="samplerInfo" />
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

  data() {
    return {
      text: [],
      source: "",
      article: "",
      type: "",
      href: "",
    };
  },

  mounted() {
    this.$data.text = this.getText();
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
    activateNode(event) {
      var attr = event.target.attributes;

      this.$data.source = attr.getNamedItem('source').value;
      this.$data.article = attr.getNamedItem('article').value;
      this.$data.type = attr.getNamedItem('type').value;
      this.$data.href = attr.getNamedItem('href').value;
    },
  }
}
</script>

<style>
.text {
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 300;
}

span[source="Sprichwörterbuch"] {
  color: #0d65c2;
  background-color: rgba(13, 101, 194, 0.1);
  border-radius: 3px;
  border: 2px solid rgb(13, 101, 194);
  padding: 0 3px;
}

span[source="XXX"] {
  color: #008702;
  background-color: rgba(0, 135, 2, 0.1);
  border-radius: 3px;
  border: 2px solid rgb(0, 135, 2);
  padding: 0 3px;
}

span[source="Wörterbuch ABC"] {
  color: #c5049b;
  background-color: rgba(197, 4, 155, 0.1);
  border-radius: 3px;
  border: 2px solid rgb(197, 4, 155);
  padding: 0 3px;
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