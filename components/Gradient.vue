<template>
  <div :style="gradientStyle">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    color1: {
      type: String,
      required: false,
      default: '#000000'
    },
    color2: {
      type: String,
      required: false,
      default: '#ffff00'
    },
    color3: {
      type: String,
      required: false,
      default: ''
    },
    width: {
      type: String,
      required: false,
      default: '100%'
    },
    height: {
      type: String,
      required: false,
      default: '50px'
    },
    degree: {
      type: Number,
      required: false,
      default: 0
    }
  },

  data() {
    return {
      addDegree: 0
    };
  },

  methods: {
    rotateGradient() {
      this.addDegree += 180;
    },    
  },

  computed: {
    gradientStyle() {
      if (this.color3 == '')
        return `width:${this.width}; height:${this.height}; transition: background 3s ease; background-image: linear-gradient(${this.degree + this.addDegree}deg, ${this.color1} 0%, ${this.color2} 100%);`;
      else
        return `width:${this.width}; height:${this.height}; transition: background 3s ease; background-image: linear-gradient(${this.degree + this.addDegree}deg, ${this.color1} 0%, ${this.color2} 50%, ${this.color3} 100%);`;
    }
  }
};
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>