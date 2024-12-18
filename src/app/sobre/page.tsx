"use client";

import * as S from "./styles";

const Sobre = () => {
  return (
    <div className="container overflow-hidden flex justify-around mt-4 bg-white p-12 rounded-2xl">
      <S.AboutDiv
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h2 className="mb-8">A OFICINA</h2>
        <S.AboutCard />
      </S.AboutDiv>
    </div>
  );
};

export default Sobre;
