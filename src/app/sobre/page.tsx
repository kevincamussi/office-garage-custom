"use client";

import * as S from "./styles";

const Sobre = () => {
  return (
    <div className="container flex justify-around mt-4 bg-white p-12 rounded-2xl">
      <S.AboutDiv>
        <S.AboutCard />
        <h2 className="mt-12">A OFICINA</h2>
      </S.AboutDiv>
      <S.AboutDiv>
        <h2 className="mb-12">NOSSA EQUIPE</h2>
        <S.AboutCard />
      </S.AboutDiv>
    </div>
  );
};

export default Sobre;
