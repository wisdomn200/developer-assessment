import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://example.com/graphql',
  cache: new InMemoryCache()
});

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
      pictures {
        url
      }
    }
  }
`;

export default client;
