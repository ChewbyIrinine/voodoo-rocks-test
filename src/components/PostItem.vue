<template>
  <div class="post-item card">
    <div class="card-body">
      <h5 class="card-title">{{ getPostTitle }}</h5>
      <p class="card-text">{{ getPostBody }}</p>
      <h6 class="card-subtitle mb-2 text-muted">{{ getAuthor }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',

  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    getPostTitle() {
      return this.data.title;
    },

    getPostBody() {
      return this.data.title;
    },

    getAuthor() {
      return this.data.userName;
    },
  },
};
</script>
