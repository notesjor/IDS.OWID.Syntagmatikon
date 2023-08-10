<template>
  <div style="max-width: 80ch;">
    <v-row>
      <v-col>
        <div>
          <h1 class="text-3xl font-bold">
            Forschungsgeschichte
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt illum ipsa reprehenderit voluptate
          molestiae, quos dignissimos voluptatem expedita sunt. Ullam, veritatis enim voluptas cumque quos illum
          necessitatibus temporibus facere?

          <v-timeline align="start">
            <v-timeline-item v-for="(year, i) in years" :key="i" :dot-color="year.color" size="small">
              <template v-slot:opposite>
                <div :class="`pt-1 headline font-weight-bold text-${year.color}`" v-text="year.year"></div>
              </template>
              <div>
                <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
                  Lorem ipsum
                </h2>
                <div>
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
                  convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an
                  salutandi sententiae.
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Index",
  theme: { dark: false },
  data() {
    return {
      years: [
        {
          color: 'cyan',
          year: '1960',
        },
        {
          color: 'green',
          year: '1970',
        },
        {
          color: 'pink',
          year: '1980',
        },
        {
          color: 'amber',
          year: '1990',
        },
        {
          color: 'orange',
          year: '2000',
        },
      ],
    }
  },

  mounted() {
  },

  methods: {
    test() {
      alert("test");
    }
  }
}
</script>

<style></style>