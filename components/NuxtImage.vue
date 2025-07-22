<template>
  <div>
    <div class="imgBorder"><img :src="src" :alt="alt" :style="style" @click="isZoomed = true" class="imgText" /></div>
    <span class="captionText">
      <div @click="isZoomed = true" style="cursor: zoom-in;">
        <slot></slot>
      </div>
      <div v-if="href != null" class="relink" style="margin-bottom: 1.85rem;">
        <a :href="href" target="_blank" class="captionLink">
          <span style="margin-left: 5px;">zu diesem Beispiel</span>
        </a>
      </div>
    </span>
  </div>
  <v-dialog v-model="isZoomed">
    <v-card @click="isZoomed = false" v-if="isZoomed">
      <div class="imgBorder"><img :src="src" :alt="alt" class="zoomed" style="margin-left: auto; margin-right: auto;" /></div>
      <span class="captionZoom">
        <div @click="isZoomed = true" style="cursor: zoom-in;">
          <slot></slot>
        </div>
        <div v-if="href != null" class="relink">
          <a :href="href" target="_blank" class="captionLink">
            <span style="margin-left: 5px;">zu diesem Beispiel</span>
          </a>
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
    style: {
      type: String,
    },
    href: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isZoomed: false
    }
  }
}
</script>

<style scoped>
.imgBorder {
  width: 100%;
  border-width: 2px;
}

.imgText {
  margin: auto;
  display: block;
  cursor: zoom-in;
}

.captionText {
  font-size: 0.85em;
  color: #333;
  margin-bottom: 20px;
}

.captionZoom {
  font-size: 1em;
  color: #333;
  padding: 10px;
}

.captionLink {
  font-weight: 500;
}

.zoomed {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 8px;
  transition: transform 0.3s;
  cursor: zoom-out;
}

.close {
  position: fixed;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
</style>