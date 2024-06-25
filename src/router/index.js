import { createRouter, createWebHistory } from 'vue-router';
import TodosPage from './pages/TodosPage.vue';
import PostsPage from './pages/PostsPage.vue';
import AlbumsPage from './pages/AlbumsPage.vue';
import PhotoList from './components/PhotoList.vue';

const routes = [
  { path: '/', redirect: '/todos' },
  { path: '/todos', component: TodosPage },
  { path: '/posts', component: PostsPage },
  { path: '/albums', component: AlbumsPage },
  { path: '/albums/:id', component: PhotoList, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
