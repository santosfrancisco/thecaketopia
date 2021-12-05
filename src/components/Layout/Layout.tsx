import React from "react";

import { Container } from "./styles";

import Footer from "./Footer";
import Navbar from "../Navbar";
import Head from "next/head";
import { TITLE } from "../../../lib/constants";

function Layout({ children }) {
  return (
    <Container>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </Container>
  );
}

export default Layout;
