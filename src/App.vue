<template>
  <button @click="addRect">追加</button>
  <div id="paper"></div>
</template>

<script>
import { dia, shapes, g } from 'jointjs';
import { PostedDay } from './calendar-parts';

const namespace = shapes;

export default {
  data() {
    return {
      graph: null,
      paper: null,
      startPos: 20,
    }
  },

  methods: {
    addRect() {
      const rect = PostedDay.create('2', new g.Point(40, this.startPos), "JointJSの使い方", "https://google.com");
      this.graph.addCell(rect);

      this.startPos += 50;
    }
  },

  mounted() {
    this.graph = new dia.Graph({}, { cellNamespace: namespace });
    this.paper = new dia.Paper({
      el: document.getElementById('paper'),
      model: this.graph,
      width: 600,
      height: 600,
      drawGrid: "mesh",
      gridSize: 10,
      cellViewNamespace: namespace,
      defaultLink: () => new shapes.standard.Link(),
      preventContextMenu: false,
      linkPinning: false,
      defaultAnchor: {
        name: 'bottomLeft',
      }
    });
  }
}

</script>

<style scoped>
.namespace {
  width: 100%;
  height: 100%;
}
</style>
