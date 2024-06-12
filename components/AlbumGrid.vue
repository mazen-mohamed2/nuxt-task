<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="album in albums.data" :key="album.id" class="album-card">
        <NuxtLink :to="'/album/' + album.id">
          <h2 class="text-xl font-bold">{{ album.title }}</h2>
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      albums: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .album-card {
    @apply p-4 border rounded shadow;
  }
  </style>
  