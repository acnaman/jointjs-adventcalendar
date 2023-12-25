<template>
  <div class="modal">
    <p>タイトル</p>
    <input v-bind="article.title" />

    <p>URL</p>
    <input v-bind="article.url" />

    <div>
      <button @click="cancel">キャンセル</button>
      <button @click="update">更新する</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {title: String, url: String},
  },
  data() {
    return {
      graph: null,
      paper: null,
      startPos: 20,
    }
  },

  methods: {
    cancel() {
      this.$emit('cancel');
    },
    update() {
      this.$emit('update');
    }
  },
}
</script>

<style scoped>
.modal {
  z-index: 100;
  width: 300px;
  height: 300px;
  margin: 0;
}
</style>