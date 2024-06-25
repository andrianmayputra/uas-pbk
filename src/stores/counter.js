import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    activities: [],
    users: [],
    posts: [],
    albums: [],
    photos: [],
  }),
  actions: {
    addActivity(activity) {
      this.activities.push(activity);
    },
    async fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await response.json();
    },
    async fetchPosts(userId) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      this.posts = await response.json();
    },
    async fetchAlbums() {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      this.albums = await response.json();
    },
    async fetchPhotos(albumId) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      this.photos = await response.json();
    },
  },
});
