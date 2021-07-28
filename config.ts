import {
  ApolloClient,
  HttpLink,
  InMemoryCache
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
  ...(process.env.NEXT_PUBLIC_HASURA_ENDPOINT) ? {
    headers: {
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ENDPOINT
    }
  } : {}
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});