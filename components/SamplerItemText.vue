<template>
  <span :style="style" v-html="text.text.trim()" @mouseover="publish()"></span>
</template>

<script>
export default {
  props: {
    text: {
      type: Object,
      required: true,
    },
    num: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      style: "",
      teleportActive: false,
    };
  },

  mounted() {
    var t = this.text;
    if (t.color != "black")
      this.$data.style = `line-height: 32px; color:${t.color}; background-color:${t.color}0A; margin-left:${this.num > 0 ? 5 : 0}px; border-radius: 3px; border: 2px solid ${t.color}; padding: 0 3px`;
    else
      this.$data.style = `line-height: 32px; :${t.color}; margin-left:${this.num > 0 ? 5 : 0}px;`;
  },

  methods: {
    publish() {
      this.$emit("publish", this.text);
    },
  }
}
</script>

<style></style>