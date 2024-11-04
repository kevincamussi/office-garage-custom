"use client";

import Image from "next/image";
import * as S from "./styles";
import Link from "next/link";

const Header = () => {
  return (
    <S.HeaderStyle>
      <div className="container flex justify-between">
        <Image
          src="/logo.png"
          alt={"Logo"}
          width={582}
          height={105}
          style={{ maxWidth: "582px", height: "auto" }}
        />
        <S.Nav>
          <ul>
            <li>
              <Link href={"#"}>HOME</Link>
            </li>
            <li>
              <Link href={"#"}>PORTFÓLIO</Link>
            </li>
            <li>
              <Link href={"#"}>SOBRE</Link>
            </li>
            <li>
              <Link href={"#"}>CONTATO</Link>
            </li>
          </ul>
        </S.Nav>
      </div>
    </S.HeaderStyle>
  );
};

export default Header;
