<template>
    <div class="image-zoom-container">
        <details>
            <summary>
                <img :src="src" :alt="alt" :style="style" @click="openZoom" />
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
        }
    },
    data() {
        return {
            isZoomed: false
        }
    },
    methods: {
        openZoom() {
          console.log('Image clicked for zoom');
            this.isZoomed = true;
        },
        closeZoom() {
          console.log('Zoom closed');
            this.isZoomed = false;
        }
    }
}
</script>

<style scoped>
.image-zoom-container {
  position: relative;
}

details summary {
  list-style: none;
  cursor: zoom-in;
}

details[open] summary {
  cursor: default;
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