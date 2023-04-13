<template>
  <v-row>
    <v-col>
      <div ref="cydiv" style="width:93.5vw; height:82vh; margin-left:-12vw"></div>
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
        { data: { id: 'root', label: 'ENDE' }, classes: 'token' },
        { data: { id: 'n2', label: 'https://www.owid.de/suche/wort?wort=Ende' }, classes: 'www' },
        { data: { id: 'n3', label: 'http://uwv.ids-mannheim.de/prepcon/modul1/tables.html' }, classes: 'www' },
        { data: { id: 'n4', label: 'http://uwv.ids-mannheim.de/prepcon/modul2/artikel/ohne_Ende/index.html' }, classes: 'www' },
        { data: { id: 'n5', label: 'http://wvonline.ids-mannheim.de/dtww/dtww_e.htm' }, classes: 'www' },
        { data: { id: 'n6', label: 'http://uwv.ids-mannheim.de/spruchlist/' }, classes: 'www' }
      ],
      edges: [
        { data: { source: 'root', target: 'n2', width: '50px', label: 'OWID-Suche um WB-Selektion ergänzen' } },
        { data: { source: 'root', target: 'n3', width: '5px', label: 'PREPCON braucht Filter' } },
        { data: { source: 'root', target: 'n4', width: '75px', label: 'OK' } },
        { data: { source: 'root', target: 'n5', width: '150px', label: 'Belege müssen ausklappen' } },
        { data: { source: 'root', target: 'n6', width: '50px', label: 'SpruchList braucht Filter' } }
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
            'width': '1920',
            'height': '1080',
            'text-halign': 'center',
            'text-valign': 'center',
            'background-color': '#fff',
            'border-color': '#000',
            'border-width': '5px'
          }
        },
        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            'line-color': '#ccc',
            'width': 'data(width)',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'source-arrow-color': '#ccc',
            'source-arrow-shape': 'none',
            'label': 'data(label)',
            'font-size': '150px'
            //'line-style': 'dotted'
          }
        },
        {
          selector: '.token',
          style: {
            'shape': 'rectangle',
            'width': '1920',
            'height': '1080',
            'text-halign': 'center',
            'text-valign': 'center',
            'background-color': '#fff',
            'border-color': '#000',
            'border-width': '5px',
            'font-size': '250px',
            'font-weight': 'bold',
            'label': 'data(label)'
          }
        }
      ],

      zoom: 0.2,
      minZoom: 0.01,
      maxZoom: 4
    });

    cy.nodeHtmlLabel([{
      query: '.www',
      tpl: function (data) {
        return "<iframe height=\"1080\" width=\"1920\" src=\"" + data.label + "\"></iframe>";
      }
    }
    ]);
  },

  methods: {
  }
}
</script>

<style></style>