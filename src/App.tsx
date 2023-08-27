import { ApolloProvider } from "@apollo/client";

import client from "./api/config";

import SearchPage from "./components/SearchPage";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SearchPage />
    </ApolloProvider>
  );
};

export default App;
