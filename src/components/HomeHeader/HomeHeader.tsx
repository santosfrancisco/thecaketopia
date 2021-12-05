import React from "react";
import { TITLE } from "../../../lib/constants";

import * as S from "./styles";

function HomeHeader() {
  return (
    <S.Container>
      <img src="/cupcakes.svg" style={{ width: 162, marginBottom: 16 }} />
      <S.Title>{TITLE}</S.Title>
      <S.Description>Gastronomia e Confeitaria</S.Description>
    </S.Container>
  );
}

export default HomeHeader;
