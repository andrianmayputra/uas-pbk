<template>
    <div>
      <h1>Photos</h1>
      <div v-if="photos.length === 0">Loading photos...</div>
      <div v-else>
        <div v-for="photo in photos" :key="photo.id" class="photo">
          <img :src="photo.thumbnailUrl" :alt="photo.title" />
          <p>{{ photo.title }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useMainStore } from '../stores/index.js';
  import { ref, onMounted } from 'vue';
  
  export default {
    props: {
      albumId: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const store = useMainStore();
      const photos = ref(store.photos);
  
      onMounted(async () => {
        await store.fetchPhotos(props.albumId);
        photos.value = store.photos;
      });
  
      return { photos };
    },
  };
  </script>
  