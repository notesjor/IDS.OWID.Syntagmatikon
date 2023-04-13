<template>
  <v-row>
    <v-col>
      <div ref="cydiv" style="width:70vw; height:82vh;"></div>
    </v-col>
  </v-row>
  <div style="scripts"></div>
</template>

<script>
import cytoscape from "cytoscape";
import nodeHtmlLabel from "cytoscape-node-html-label";

export default {
  name: "Index",
  theme: { dark: false },
  data() {
    return {
      nodes: [
        { data: { id: 'n1', label: '<i>Knoten 1</i>' }, classes: 'html' },
        { data: { id: 'n2', label: 'https://www.owid.de' }, classes: 'html' },
        { data: { id: 'n3', label: '<div>Knoten 3</div>' }, classes: 'html' },
        { data: { id: 'n4', label: '<div>Knoten 4</div>' }, classes: 'html' }
      ],
      edges: [
        { data: { source: 'n1', target: 'n2' } },
        { data: { source: 'n1', target: 'n3' } },
        { data: { source: 'n1', target: 'n4' } },
        { data: { source: 'n2', target: 'n3' } },
        { data: { source: 'n2', target: 'n4' } },
        { data: { source: 'n3', target: 'n4' } }
      ],
    }
  },

  mounted() {
    cytoscape.use(nodeHtmlLabel);
    
    var cy = cytoscape({
      container: this.$refs.cydiv,
      elements: {
        nodes: this.$data.nodes,
        edges: this.$data.edges
      },

      layout: {
        name: 'circle'
      },

      style: [
        {
          selector: 'node',
          style: {
            'shape': 'rectangle',
            'width': '1020',
            'height': '800',
            'text-halign': 'center',
            'text-valign': 'center',
            'background-color': '#fff',
            'border-color': '#000',
            'border-width': '2px'
          }
        },
        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            'line-color': '#ccc',
            'width': '50px',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'source-arrow-color': '#ccc',
            'source-arrow-shape': 'none',
            'line-style': 'dotted'
          }
        }
      ],

      zoom: 0.2,
      minZoom: 0.1,
      maxZoom: 4
    });

    cy.nodeHtmlLabel([{
      query: 'node',
      tpl: function (data) {
        return "<iframe height=\"800\" width=\"1020\" src=\"" + data.label + "\"></iframe>";
      }
    }
    ]);
  },

  methods: {
  }
}
</script>

<style></style>