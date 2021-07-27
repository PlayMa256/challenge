import {
  ApolloClient,
  HttpLink,
  InMemoryCache
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: 'https://pleased-mastiff-54.hasura.app/v1/graphql',
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret": "zlqOCAaiinll6jGrhdsJbE24ZbOL1gBF1LdzGrPmy8uyWmXPCpkrQ9Hs4ddQqOoK"
  }
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});