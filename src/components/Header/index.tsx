"use client";

import Image from "next/image";
import * as S from "./styles";
import Link from "next/link";
import Button from "../Button";
import { Colors } from "@/styles/global";

const Header = () => {
  return (
    <S.HeaderStyle>
      <div className="container flex justify-between">
        <h1>
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt={"Office Garage Custom"}
              width={582}
              height={105}
              style={{ maxWidth: "582px", height: "auto" }}
            />
          </Link>
        </h1>
        <S.Nav>
          <ul>
            <li>
              <Link href={"/"}>
                <Button bg="" hover={Colors.white} padding="8px" width="124px">
                  HOME
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Button bg="" hover={Colors.white} padding="8px" width="124px">
                  PORTFÓLIO
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"/sobre"}>
                <Button
                  bg=""
                  hover={Colors.white}
                  hovercolor={Colors.black}
                  padding="8px 0"
                  width="124px"
                >
                  SOBRE
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Button bg="" hover={Colors.white} padding="8px" width="124px">
                  CONTATO
                </Button>
              </Link>
            </li>
          </ul>
        </S.Nav>
      </div>
    </S.HeaderStyle>
  );
};

export default Header;
