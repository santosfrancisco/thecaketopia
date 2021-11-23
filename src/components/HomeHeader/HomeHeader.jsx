import React from "react";

import * as S from "./styles";

function HomeHeader() {
  return (
    <S.Container>
      <img
        src="/Logo.svg"
        style={{ width: 62, height: 95, marginBottom: 16 }}
      />
      <S.Title>Caketopia</S.Title>
      <S.Description>Gastronomia e Confeitaria</S.Description>
    </S.Container>
  );
}

export default HomeHeader;
