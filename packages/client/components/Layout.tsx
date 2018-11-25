import * as React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "semantic-ui-react";

type Props = {
  title?: string;
};

const Layout: React.SFC<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </div>
);

export default Layout;
