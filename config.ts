import {
  ApolloClient,
  HttpLink,
  InMemoryCache
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: 'http://localhost:8080/v1/graphql',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});