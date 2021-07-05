import React from "react";

import { Container } from "./styles";

import Footer from "./footer";
import Meta from "../meta";
import Navbar from "../Navbar";

function Layout({ children }) {
  return (
    <Container>
      <Meta />
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </Container>
  );
}

export default Layout;
