<template>
  <h3
    style="margin-left: auto; margin-right: auto; text-decoration: underline; text-decoration-color: black; text-decoration-thickness: 2px; display: block;">
    Beispiele</h3>
  <v-row style="margin: 10px 0px;">
    <slot></slot>
  </v-row>
</template>

<script>

export default {
  name: "ResourceExplain",
  data() {
    return {
      tab: "2"
    }
  }
}

</script>