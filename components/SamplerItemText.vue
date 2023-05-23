<template>
  <span :style="style" v-html="text.text.trim()" @mouseenter="publish()"></span>
  <Teleport to="#samplerInfo">
    {{ xy }}
  </Teleport>
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
            xy: ""
        };
    },

    mounted() {
        var t = this.text;
        this.$data.style = `color:${t.color}; background-color:${t.color}0A; margin-left:${this.num > 0 ? 5 : 0}px`;
        console.log(this.$data.style);
    },

    methods: {
        publish(){
            document.getElementById('samplerInfo').innerHTML = '';
            this.$data.xy = "xxx";
        }
    }
}
</script>

<style>

</style>