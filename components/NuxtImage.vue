<template>
  <div>
    <div class="container"><img :src="src" :alt="alt" @click="isZoomed = true" class="normalImg" /></div>
    <span class="normalText">
      <div @click="isZoomed = true" style="cursor: zoom-in;">
        <slot></slot>
      </div>
      <div v-if="to != null" style="margin-bottom: 1.85rem;">
        <a :href="to" target="_blank" class="captionLink">
          <v-chip variant="outlined" density="compact">zu diesem Beispiel</v-chip> 
        </a>
      </div>
      <div v-else style="margin-bottom: 1.85rem;"></div>
    </span>
  </div>
  <v-dialog v-model="isZoomed">
    <v-card @click="isZoomed = false" v-if="isZoomed">
      <div class="container"><img :src="src" :alt="alt" class="zoomedImg" /></div>
      <span class="zoomedText">
        <div @click="isZoomed = true" style="cursor: zoom-in;">
          <slot></slot>
        </div>
        <div v-if="to != null">
          <a :href="to" target="_blank" class="captionLink">
            <v-chip variant="outlined" density="compact">zu diesem Beispiel</v-chip> 
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
    to: {
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