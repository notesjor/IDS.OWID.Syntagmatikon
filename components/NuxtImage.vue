<template>
  <div>
    <div class="container"><img :src="src" :alt="alt" @click="isZoomed = true" class="normalImg" /></div>
    <span class="normalText">
      <div @click="isZoomed = true" style="cursor: zoom-in; margin-bottom: 0.85rem;">
        <slot></slot>
        <span v-if="to != null" style="margin-bottom: 1.85rem;">
            <a :href="to" target="_blank" class="captionLink" @click="closeZoomWithDelay">
            <v-icon>mdi-arrow-right-circle-outline</v-icon>
            zu diesem Beispiel
            </a>
        </span>
        <span v-else style="margin-bottom: 1.85rem;"></span>
      </div>      
    </span>
  </div>
  <v-dialog v-model="isZoomed" max-width="75vw" max-height="85vh">
    <v-card @click="isZoomed = false" v-if="isZoomed">
      <div class="container"><img :src="src" :alt="alt" class="zoomedImg" style="max-width: 90%;"/></div>
      <span class="zoomedText">
        <div @click="isZoomed = true" style="cursor: zoom-in;">
          <slot></slot>
          <span v-if="to != null" style="margin-bottom: 1.85rem;">
            <a :href="to" target="_blank" class="captionLink">
              <v-icon>mdi-arrow-right-circle-outline</v-icon>
              zu diesem Beispiel
            </a>
          </span>
        </div>
      </span>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'NuxtImg',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'Abbildung'
    },
    to: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isZoomed: false
    }
  },
  methods: {
    closeZoomWithDelay() {
      self = this;
      setTimeout(() => {
        self.isZoomed = false;
      }, 500); 
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  border-width: 2px;
}

.normalImg {
  margin: auto;
  display: block;
  cursor: zoom-in;
}

.normalText {
  font-size: 0.85em;
  color: #333;
  margin-bottom: 20px;
}

.zoomedText {
  font-size: 1em;
  color: #333;
  padding: 10px;
}

.zoomedImg {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 8px;
  cursor: zoom-out;
  margin-left: auto;
  margin-right: auto;
}

.captionLink {
  font-weight: 500;
}
</style>