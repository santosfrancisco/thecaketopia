import React from "react";

import { Container } from "./styles";

import Footer from "./Footer";
import Navbar from "../Navbar";

function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </Container>
  );
}

export default Layout;
