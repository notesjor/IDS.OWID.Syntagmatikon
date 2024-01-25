<template>
    <div ref="chart" style="min-height: 500px; height: 500px; min-width: 1000px; width: 1000px;"></div>
</template>

<script>
import { use } from "echarts/core";
import {
    LineChart
} from "echarts/charts";
import {
    GridComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    VisualMapComponent,
    ToolboxComponent,
    DataZoomComponent,
    MarkPointComponent
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import * as echarts from "echarts/core";

use([
    LineChart,
    GridComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    VisualMapComponent,
    CanvasRenderer,
    ToolboxComponent,
    DataZoomComponent,
    MarkPointComponent
]);

export default {
    name: "echartLine",
    props: {
        options: Object
    },

    data() {
        return {
            chart: null
        };
    },

    mounted() {
        this.chart = echarts.init(this.$refs.chart);
    },

    watch: {
        options: {
            deep: true,
            handler() {
                this.chart.setOption(this.options);
            }
        }
    }
}
</script>

<style></style>