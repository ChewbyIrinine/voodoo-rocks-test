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
          v-model.trim="postsFilter"
        >
      </div>
    </div>
    <div class="posts-list">
      <div class="posts-grid">
        <post-item
          v-for="item in posts"
          :key="item.id"
          :data="item"
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
      initialPosts: [],
      posts: [],
      users: [],
      postsFilter: '',
    };
  },

  watch: {
    postsFilter(newValue) {
      if (newValue) {
        this.posts = this.initialPosts.filter(
          (item) => item?.userName?.toLowerCase()?.includes(newValue.toLowerCase()),
        );
      } else this.posts = this.initialPosts;
    },

    initialPosts(newValue) {
      this.posts = newValue;
    },
  },

  async mounted() {
    await this.getUsers().then(() => this.fetchPosts());
  },

  methods: {
    async getPosts() {
      try {
        const response = await this.$http.get(
          'http://jsonplaceholder.typicode.com/posts',
        );
        return response.data;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
      return null;
    },

    async getUsers() {
      try {
        const response = await this.$http.get(
          'http://jsonplaceholder.typicode.com/users',
        );
        this.users = response.data;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },

    getUserName(id) {
      return this.users.find((item) => item.id === id)?.name;
    },

    async fetchPosts() {
      try {
        this.initialPosts = await this.getPosts();
        this.initialPosts = this.initialPosts.map((item) => ({
          ...item,
          userName: this.getUserName(item.userId),
        }));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
  },
};
</script>
