<template>
  <div class="image-zoom-container relink">
    <details>
      <summary>
        <div class="imgBorder"><img :src="src" :alt="alt" :style="style" @click="openZoom" class="imgText" /></div>
        <span class="captionText">
          <slot></slot>
          <div v-if="href != null">
            <a :href="href" target="_blank" class="captionLink">
              <span style="margin-left: 5px;">zu diesem Beispiel</span>
            </a>
          </div>
        </span>
      </summary>
      <div class="overlay" @click="closeZoom" v-if="isZoomed">
        <img :src="src" :alt="alt" class="zoomed" />
        <button class="close">×</button>
      </div>
    </details>
  </div>
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
  },
  methods: {
    openZoom() {
      this.isZoomed = true;
    },
    closeZoom() {
      this.isZoomed = false;
    }
  }
}
</script>

<style scoped>
.image-zoom-container {
  position: relative;
}

.imgBorder {
  width: 100%;
  border-width: 2px;
}

.imgText {
  margin: auto;
  display: block;
}

summary {
  margin-bottom: 1.75rem;
}

details summary {
  list-style: none;
  cursor: zoom-in;
}

details[open] summary {
  cursor: default;
}

.captionText {
  font-size: 0.85em;
  color: #333;
  margin-bottom: 20px;
}

.captionLink {
  font-weight: 500;
}

.thumbnail {
  width: 300px;
  transition: 0.3s;
  border-radius: 8px;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
  z-index: 1000;
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