<template>
  <div>
    <v-row>
      <v-col>        
        <v-card elevation="5">
          <v-card-text>
            <div ref="content" class="text">
              <span v-for="(item, i) in json" :key="i">
                <a v-if="item.article" :article="item.article" :rtype="item.rtype" :source="item.source" :href="item.href" @mouseenter="mouseenter" @mouseleave="mouseleave">{{ item.text }}</a>
                <span v-else>{{ item.text }}</span>
              </span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div ref="info" style="display:none;">
          <v-card style="width:90%; margin-left:auto; margin-right: auto;">
            <v-card-title :style="styleHead">{{ tooltip.source }}</v-card-title>
            <v-card-subtitle>{{ tooltip.rtype }}</v-card-subtitle>
            <v-card-text>
              <v-icon>mdi-arrow-right</v-icon> {{ tooltip.article }}
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SlideBox",
  props: {
    json: {
      type: String,
      required: true,
    }
  },

  data() {
    return {
      tooltip: {
        article: 'Den Tag nicht vor dem Abend loben',
        rtype: 'Sprichwort',
        source: 'Sprichwörterbuch',
        href: 'https://www.owid.de/artikel/401610'
      }
    }
  },
  mounted() {
    console.log("hello from mounted")
    this.$refs.content.querySelectorAll('a').forEach((link) => {
      link.addEventListener('mouseenter', this.mouseenter);
      //link.addEventListener('mouseleave', this.mouseleave);
    });
  },
  methods: {
    mouseenter(e) {
      this.$data.tooltip.article = e.target.getAttribute('article');
      this.$data.tooltip.rtype = e.target.getAttribute('rtype');
      this.$data.tooltip.source = e.target.getAttribute('source');
      this.$data.tooltip.href = e.target.getAttribute('href');
      this.$data.tooltip.color = window.getComputedStyle(e.target).color;

      this.$refs.info.style.display = 'block';
    },
  },
  computed: {
    styleHead() {
      return {
        'color': this.$data.tooltip.color
      }
    }
  }
}
</script>

<style>
.text {
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 300;
}

a[source="Sprichwörterbuch"] {
  color: rgb(13, 101, 194);
  background-color: rgba(13, 101, 194, 0.1);
  border-radius: 3px;
  border: 2px solid rgb(13, 101, 194);
  padding: 0 3px;
}

a[source="XXX"] {
  color: rgb(0, 135, 2);
  background-color: rgba(0, 135, 2, 0.1);
  border-radius: 3px;
  border: 2px solid rgb(0, 135, 2);
  padding: 0 3px;
}

a[source="Wörterbuch ABC"] {
  color: rgb(197, 4, 155);
  background-color: rgba(197, 4, 155, 0.1);
  border-radius: 3px;
  border: 2px solid rgb(197, 4, 155);
  padding: 0 3px;
}
</style>