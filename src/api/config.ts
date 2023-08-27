import {
  ApolloClient,
  InMemoryCache,
  // ApolloProvider,
  // gql,
} from "@apollo/client";

const API_URL = "https://countries.trevorblades.com/";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default client;
