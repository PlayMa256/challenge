import {
  ApolloClient,
  HttpLink,
  InMemoryCache
} from "@apollo/client";

const httpLink = new HttpLink({
  // @ts-ignore
  uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});