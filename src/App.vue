<template>
  <button @click="addRect">追加</button>
  <div id="paper"></div>
</template>

<script>
import { dia, shapes } from 'jointjs';

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
      const rect = new shapes.standard.Rectangle({
        size: { width: 150, height: 40 },
        position: { x: 10, y: this.startPos },
        attrs: {
          body: {
            event: 'rect2.click'
          }
        }
      });
      rect.attr('body/fill', 'lightblue');
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
      linkPinning: false,
      defaultAnchor: {
        name: 'bottomLeft',
      }
    });
  }
}

</script>

<style scoped>
</style>
