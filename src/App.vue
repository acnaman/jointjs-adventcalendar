<template>
  <div id="paper"></div>
</template>

<script>
import { dia, shapes, g } from 'jointjs';
import { createCalendarDay } from './calendar-parts';

const namespace = shapes;
const articles = new Map();
{
  articles.set(1, { title: "JointJSの解説", url: "http://sample.com" });
  articles.set(2, { title: "なにか書きます", url: "" });
  articles.set(3, { title: "Vue.jsの歴史", url: "http://sample.com" });
  articles.set(4, { title: "datasetについて書く", url: "" });
  articles.set(5, { title: "", url: "" });
  articles.set(6, { title: "", url: "" });
  articles.set(7, { title: "", url: "" });
  articles.set(8, { title: "サーバーサイドJS", url: "" });
  articles.set(9, { title: "", url: "" });
  articles.set(10, { title: "なんかかく", url: "" });
  articles.set(11, { title: "TypeScriptの記事", url: "http://sample.com" });
  articles.set(12, { title: "", url: "" });
  articles.set(13, { title: "", url: "" });
  articles.set(14, { title: "JSおすすめ記事紹介", url: "http://sample.com" });
  articles.set(15, { title: "", url: "" });
  articles.set(16, { title: "SVGでトナカイ書く", url: "" });
  articles.set(17, { title: "", url: "" });
  articles.set(18, { title: "", url: "" });
  articles.set(19, { title: "", url: "" });
  articles.set(20, { title: "Cellの作り方", url: "http://sample.com" });
  articles.set(21, { title: "", url: "" });
  articles.set(22, { title: "", url: "" });
  articles.set(23, { title: "", url: "" });
  articles.set(24, { title: "", url: "" });
  articles.set(25, { title: "フロントエンドJS", url: "http://sample.com" });
  articles.set(26, { title: "", url: "" });
  articles.set(27, { title: "", url: "" });
  articles.set(28, { title: "", url: "" });
  articles.set(29, { title: "", url: "" });
  articles.set(30, { title: "", url: "" });
  articles.set(31, { title: "クリスマスプレゼント", url: "http://sample.com" });
}

const startDate = new Date("December 1, 2023 12:00:00");
const startWeekDay = startDate.getDay();

export default {
  data() {
    return {
      graph: null,
      paper: null,
      startPos: 20,
      isShownEditModal: false,
      targetArticle: { title: "", url: "" },
    }
  },

  methods: {
    showEditModal() {
      this.isShownEditModal = true;
    }
  },

  mounted() {
    this.graph = new dia.Graph({}, { cellNamespace: namespace });
    this.paper = new dia.Paper({
      el: document.getElementById('paper'),
      model: this.graph,
      width: 1200,
      height: 1500,
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

    this.paper.on('editCalendar', function (cellView) {
      const date = cellView.model.attr('date');
      this.showEditModal(articles.get(date));
    });

    let weekDay = startWeekDay;
    let weekCounter = 0;
    const startPosX = 100;
    const startPosY = 50;

    for (let i = 0; i < 31; i++) {
      const targetDate = i + 1;
      const targetPoint = new g.Point(startPosX + 150 * weekDay, startPosY + 170 * weekCounter);
      const article = articles.get(targetDate);
      const dayCell = createCalendarDay(targetDate, targetPoint, article.title, article.url);
      dayCell.addTo(this.graph);

      weekDay++;

      // 次の週に移動
      if (weekDay === 7) {
        weekDay = 0;
        weekCounter++;
      }
    }
  }
}

</script>

<style scoped>
.namespace {
  width: 100%;
  height: 100%;
}
</style>
