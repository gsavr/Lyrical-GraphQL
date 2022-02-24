import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { HashRouter } from "react-router-dom";

import App from "./components/App";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  cache,
  link,
  /* dataIdFromObject: (o) => o.id,
  //this take every single piece of data and runs though this fn, thi sidentifies all data inside the apollo store */
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
