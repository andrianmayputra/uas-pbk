<template>
    <div>
      <h1>Posts</h1>
      <label for="userSelect">Select User:</label>
      <q-select
        v-model="selectedUser"
        :options="users"
        option-label="name"
        option-value="id"
        @update:model-value="fetchPosts"
      />
      <div v-if="posts.length === 0">Loading posts...</div>
      <div v-else>
        <div v-for="post in posts" :key="post.id" class="post">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useMainStore } from '../stores/index.js';
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const store = useMainStore();
      const users = ref(store.users);
      const posts = ref(store.posts);
      const selectedUser = ref(null);
  
      const fetchPosts = async (userId) => {
        await store.fetchPosts(userId);
        posts.value = store.posts;
      };
  
      onMounted(async () => {
        await store.fetchUsers();
        users.value = store.users;
      });
  
      return { users, posts, selectedUser, fetchPosts };
    },
  };
  </script>
  