<template>
  <v-row>
    <v-col>
      <div ref="cydiv" style="width:93.5vw; height:82vh; margin-left:-12vw;"></div>
    </v-col>
  </v-row>
  <div style="scripts"></div>
</template>

<script>
import cytoscape from "cytoscape";
import nodeHtmlLabel from "cytoscape-node-html-label";
import panzoom from "cytoscape-panzoom";

export default {
  name: "Index",
  theme: { dark: false },
  data() {
    return {
      nodes: [
        { data: { id: 'root', label: 'ENDE' }, classes: 'token' },
        { data: { id: 'n2', label: 'https://www.owid.de/suche/wort?wort=Ende' }, classes: 'www' },
        { data: { id: 'n2.1', label: 'https://www.owid.de/artikel/401702' }, classes: 'www' },
        { data: { id: 'n2.2', label: 'https://www.owid.de/artikel/404227' }, classes: 'www' },
        { data: { id: 'n2.3', label: 'https://www.owid.de/artikel/401805' }, classes: 'www' },
        { data: { id: 'n2.4', label: 'https://www.owid.de/artikel/401850' }, classes: 'www' },
        { data: { id: 'n3', label: 'http://uwv.ids-mannheim.de/prepcon/modul1/tables.html' }, classes: 'www' },
        { data: { id: 'n4', label: 'http://uwv.ids-mannheim.de/prepcon/modul2/artikel/ohne_Ende/index.html' }, classes: 'www' },
        { data: { id: 'n5', label: 'http://wvonline.ids-mannheim.de/dtww/dtww_e.htm' }, classes: 'www' },
        { data: { id: 'n6', label: 'http://uwv.ids-mannheim.de/spruchlist/' }, classes: 'www' }
      ],
      edges: [
        { data: { source: 'root', target: 'n2', width: '150px', label: 'OWID-Suche um WB-Selektion ergänzen' } },
        { data: { source: 'n2', target: 'n2.1', width: '50px', label: 'Ende gut, alles gut.' } },
        { data: { source: 'n2', target: 'n2.2', width: '50px', label: 'Alles hat ein Ende.' } },
        { data: { source: 'n2', target: 'n2.3', width: '50px', label: 'Lieber ein Ende mit Schrecken als ein Schrecken ohne Ende.' } },
        { data: { source: 'n2', target: 'n2.4', width: '50px', label: 'Viele Hände, schnelles Ende.' } },
        { data: { source: 'root', target: 'n3', width: '5px', label: 'PREPCON braucht Filter' } },
        { data: { source: 'root', target: 'n4', width: '75px', label: 'OK' } },
        { data: { source: 'root', target: 'n5', width: '150px', label: 'Belege müssen ausklappen' } },
        { data: { source: 'root', target: 'n6', width: '50px', label: 'SpruchList braucht Filter' } }
      ],
    }
  },

  mounted() {
    cytoscape.use(nodeHtmlLabel);
    cytoscape.use(panzoom);

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

    // the default values of each option are outlined below:
    var defaults = {
      zoomFactor: 0.05, // zoom factor per zoom tick
      zoomDelay: 45, // how many ms between zoom ticks
      minZoom: 0.1, // min zoom level
      maxZoom: 10, // max zoom level
      fitPadding: 50, // padding when fitting
      panSpeed: 10, // how many ms in between pan ticks
      panDistance: 10, // max pan distance per tick
      panDragAreaSize: 75, // the length of the pan drag box in which the vector for panning is calculated (bigger = finer control of pan speed and direction)
      panMinPercentSpeed: 0.25, // the slowest speed we can pan by (as a percent of panSpeed)
      panInactiveArea: 8, // radius of inactive area in pan drag box
      panIndicatorMinOpacity: 0.5, // min opacity of pan indicator (the draggable nib); scales from this to 1.0
      zoomOnly: false, // a minimal version of the ui only with zooming (useful on systems with bad mousewheel resolution)
      fitSelector: undefined, // selector of elements to fit
      animateOnFit: function () { // whether to animate on fit
        return false;
      },
      fitAnimationDuration: 1000, // duration of animation on fit

      // icon class names
      sliderHandleIcon: 'fa fa-minus',
      zoomInIcon: 'fa fa-plus',
      zoomOutIcon: 'fa fa-minus',
      resetIcon: 'fa fa-expand'
    };

    // add the panzoom control
    cy.panzoom(defaults);
  },

  methods: {
  }
}
</script>

<style></style>