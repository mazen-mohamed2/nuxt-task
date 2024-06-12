import gql from 'graphql-tag';

export const GET_ALBUMS = gql`
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
