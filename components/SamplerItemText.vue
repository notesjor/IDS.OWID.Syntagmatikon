<!-- HINWEIS: Dies ist eine Sub-Kompoente und gehört zu SamplerItem.vue -->
<template>
  <span :style="style" v-html="text.text.trim()" @mouseover="hover()" @mouseleave="unpublish()"></span>
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
    t.publish = this.publish;
    t.unpublish = this.unpublish;
    
    if (t.color == "black")
      this.$data.style = `line-height: 32px; :${t.color}; margin-left:${this.num > 0 ? 5 : 0}px;`;
    else
      this.$data.style = `line-height: 32px; color:${t.color}; background-color:${t.color}0A; margin-left:${this.num > 0 ? 5 : 0}px; border-radius: 3px; border: 2px dotted ${t.color}; padding: 0 3px`;
  },

  methods: {
    hover(){
      // delete all Timeouts
      var id = window.setTimeout(function() {}, 0);
      while (id--) {
        window.clearTimeout(id);
      }
      this.publish();
    },
    publish() {
      let t = this.text;
      if (t.color == "black")
        return;
            
      this.$data.style = `line-height: 32px; color:${t.color}; background-color:${t.color}0A; margin-left:${this.num > 0 ? 5 : 0}px; border-radius: 3px; border: 2px solid ${t.color}; padding: 0 3px`;
      this.$emit("publish", this.text);
    },
    unpublish(){
      let t = this.text;
      if (t.color == "black")
        return;
      
      this.$data.style = `line-height: 32px; color:${t.color}; background-color:${t.color}0A; margin-left:${this.num > 0 ? 5 : 0}px; border-radius: 3px; border: 2px dotted ${t.color}; padding: 0 3px`;
    }
  }
}
</script>

<style></style>