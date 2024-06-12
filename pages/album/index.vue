<template>
    <div>
      <AlbumGrid :albums="albums" v-if="!loading && !error" />
      <div v-if="loading">Loading...</div>
      <div v-if="error">Error: {{ error.message }}</div>
    </div>
  </template>
  
  <script>
  import gql from 'graphql-tag';
  import AlbumGrid from '@/components/AlbumGrid.vue';
  
  const GET_ALBUMS = gql`
    query {
      albums {
        data {
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
    }
  `;
  
  export default {
    components: { AlbumGrid },
    async asyncData({ app }) {
      try {
        const client = app.apolloProvider.defaultClient;
        const { data } = await client.query({ query: GET_ALBUMS });
        return { albums: data.albums, loading: false, error: null };
      } catch (error) {
        return { albums: null, loading: false, error };
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
  