<template>
    <div>
      <h1>Albums</h1>
      <div v-if="albums.length === 0">Loading albums...</div>
      <div v-else>
        <div v-for="album in albums" :key="album.id" class="album">
          <h3>{{ album.title }}</h3>
          <q-btn flat @click="viewPhotos(album.id)">View Photos</q-btn>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useMainStore } from '../stores/index.js';
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const store = useMainStore();
      const albums = ref(store.albums);
      const router = useRouter();
  
      const viewPhotos = (albumId) => {
        router.push(`/albums/${albumId}`);
      };
  
      onMounted(async () => {
        await store.fetchAlbums();
        albums.value = store.albums;
      });
  
      return { albums, viewPhotos };
    },
  };
  </script>
  