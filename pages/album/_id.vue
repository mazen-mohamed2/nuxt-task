<template>
    <div>
      <AlbumDetails :album="album" v-if="!loading && !error" />
      <div v-if="loading">Loading...</div>
      <div v-if="error">Error: {{ error.message }}</div>
    </div>
  </template>
  
  <script>
  import gql from 'graphql-tag';
  import AlbumDetails from '@/components/AlbumDetails.vue';
  
  const GET_ALBUM = gql`
    query GetAlbum($id: ID!) {
      album(id: $id) {
        id
        title
        photos {
          data {
            id
            title
            url
          }
        }
      }
    }
  `;
  
  export default {
    components: { AlbumDetails },
    async asyncData({ params, app }) {
      try {
        const client = app.apolloProvider.defaultClient;
        const { data } = await client.query({
          query: GET_ALBUM,
          variables: { id: params.id }
        });
        return { album: data.album, loading: false, error: null };
      } catch (error) {
        return { album: null, loading: false, error };
      }
    },
    data() {
      return {
        loading: true,
        error: null
      };
    }
  };
  </script>
  