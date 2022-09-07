<template>
  <div id="app">
    <posts-view/>
  </div>
</template>

<script>
import PostsView from '@/views/PostsView.vue';

export default {
  components: {
    PostsView,
  },
};
</script>

<style lang="sass">
@import "@/sass/style.sass"
</style>
