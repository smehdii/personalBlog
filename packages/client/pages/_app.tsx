import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";

import withApolloClient from "../lib/with-apollo-client";

import "semantic-ui-css/semantic.min.css";
import { Container as SemanticContainer } from "semantic-ui-react";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props as any;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
