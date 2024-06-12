<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">{{ album.title }}</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="photo in album.photos.data" :key="photo.id" class="photo-card">
        <img :src="photo.url" :alt="photo.title" class="w-full h-auto" />
        <p class="text-center">{{ photo.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.photo-card {
  @apply p-4 border rounded shadow;
}
</style>
