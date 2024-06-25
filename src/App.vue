<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Futsal Activities</q-toolbar-title>
        <q-btn flat @click="$router.push('/todos')">Todos</q-btn>
        <q-btn flat @click="$router.push('/posts')">Posts</q-btn>
        <q-btn flat @click="$router.push('/albums')">Albums</q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="text-center">
      &copy; 2024 Futsal Activities App
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
