import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./components/App";
/* import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate"; */

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({ cache, link });

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
