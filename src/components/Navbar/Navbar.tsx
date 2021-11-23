import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import * as Styled from "./styles";

const Navbar = () => {
  const router = useRouter();
  return (
    <Styled.Container>
      <div>
        <Link href="/">
          <a aria-label="Início">
            <img src="/Logo.svg" style={{ width: 24, height: 38 }} />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <Styled.MenuItem
            active={
              router.pathname === "/" || router.pathname.startsWith("/posts")
            }
          >
            Blog
          </Styled.MenuItem>
        </Link>
        <Link href="/sobre">
          <Styled.MenuItem active={router.pathname === "/sobre"}>
            Sobre
          </Styled.MenuItem>
        </Link>
      </div>
    </Styled.Container>
  );
};

export default Navbar;
