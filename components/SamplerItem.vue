<template>
  <div>
    <v-row style="padding:20px 5px 5px 5px">
      <v-card elevation="8">
        <v-card-text>
          <div class="text" ref="htmlContainer"></div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row style="padding: 10px 25px 5px 25px;">
      <v-card elevation="4" style="width: 100%;">
        <v-card-title>{{ source }}</v-card-title>
        <v-card-subtitle>{{ type }}</v-card-subtitle>
        <v-card-text>
          <v-icon>mdi-arrow-right</v-icon> {{ article }}
        </v-card-text>
      </v-card>
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
      source: "",
      article: "",
      type: "",
      href: "",
    };
  },

  mounted() {
    var self = this;

    self.$refs.htmlContainer.innerHTML = self.getText();
    var spans = self.$refs.htmlContainer.querySelectorAll('span');
    for (let i = 0; i < spans.length; i++) {
      spans[i].addEventListener('mouseenter', self.activateNode);
    }
  },

  methods: {
    getText() {
      let html = "";
      const { tokens, annotations } = this.data;

      var annotation = null;


      for (let i = 0; i < tokens.length; i++) {
        if (i > 0)

          if (annotation && i >= annotation.to) {
            // remove last char from html
            html = html.substring(0, html.length - 1);
            html += "</span> ";
            annotation = null;
          }

        const tmp = annotations.find(a => a.from === i);
        if (tmp) {
          annotation = tmp;
          html += `<span source="${annotation.source}" article="${annotation.article}" type="${annotation.type}" href="${annotation.href}">`;
        }

        html += tokens[i];

        if (i < tokens.length - 1) {
          html += " ";
        }
      }

      return html;
    },
    activateNode(event) {
      const { source, article, type, href } = event.target.attributes;

      this.$data.source = source.value;
      this.$data.article = article.value;
      this.$data.type = type.value;
      this.$data.href = href.value;
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
  color: rgb(13, 101, 194);
  background-color: rgba(13, 101, 194, 0.1);
  border-radius: 3px;
  border: 2px solid rgb(13, 101, 194);
  padding: 0 3px;
}

span[source="XXX"] {
  color: rgb(0, 135, 2);
  background-color: rgba(0, 135, 2, 0.1);
  border-radius: 3px;
  border: 2px solid rgb(0, 135, 2);
  padding: 0 3px;
}

span[source="Wörterbuch ABC"] {
  color: rgb(197, 4, 155);
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