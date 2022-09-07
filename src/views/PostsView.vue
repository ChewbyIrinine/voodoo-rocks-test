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
        <div
          v-for="index in 10"
          :key="index"
          class="post-item card"
        >
          <div class="card-body">
            <h5 class="card-title">Sample text</h5>
            <p class="card-text">
              Sample text sample text sample text sample text sample text sample text sample text
              sample text sample text
            </p>
            <h6 class="card-subtitle mb-2 text-muted">Author</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostsView',
};
</script>
