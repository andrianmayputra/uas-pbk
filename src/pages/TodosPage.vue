<template>
    <div>
      <h1>Todos</h1>
      <q-btn @click="addActivity">Add Activity</q-btn>
      <div v-for="(activity, index) in activities" :key="index" class="activity">
        <q-checkbox v-model="activity.completed" />
        <span :class="{ completed: activity.completed }">{{ activity.name }}</span>
        <q-btn dense flat @click="removeActivity(index)">Cancel</q-btn>
      </div>
    </div>
  </template>
  
  <script>
  import { useMainStore } from '../stores/index.js';
  import { ref } from 'vue';
  
  export default {
    setup() {
      const store = useMainStore();
      const activities = ref(store.activities);
  
      const addActivity = () => {
        const activityName = prompt('Enter the name of the activity:');
        if (activityName) {
          store.addActivity({ name: activityName, completed: false });
        }
      };
  
      const removeActivity = (index) => {
        store.activities.splice(index, 1);
      };
  
      return { activities, addActivity, removeActivity };
    },
  };
  </script>
  
  <style>
  .completed {
    text-decoration: line-through;
    color: #888;
  }
  </style>
  