<template>
  <div>
    <div>
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
          </div>
        </div>
        <input
          type="text"
          class="form-control"
          id="inlineFormInputGroup"
          placeholder="Filter by author..."
        >
      </div>
    </div>
    <div class="posts-list">
      <div class="posts-grid">
        <post-item
          v-for="item in posts"
          :key="item.id"
          :data="item"
          :author="getUserName(item.userId)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';

export default {
  name: 'PostsView',

  components: {
    PostItem,
  },

  data() {
    return {
      posts: [],
      users: [],
    };
  },

  mounted() {
    this.getData();
    this.getUsers();
  },

  methods: {
    async getData() {
      try {
        const response = await this.$http.get(
          'http://jsonplaceholder.typicode.com/posts',
        );
        this.posts = response.data;
      } catch (error) {
        error.log(error);
      }
    },

    async getUsers() {
      try {
        const response = await this.$http.get(
          'http://jsonplaceholder.typicode.com/users',
        );
        this.users = response.data;
      } catch (error) {
        error.log(error);
      }
    },

    getUserName(id) {
      return this.users.find((item) => item.id === id)?.name;
    },
  },
};
</script>
