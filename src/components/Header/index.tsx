"use client";

import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";
import Button from "../Button";
import { Colors } from "@/styles/global";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <S.HeaderStyle>
      <div className="container flex justify-between">
        <h1>
          <Link href={"/home"}>
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
              <Link href={"/home"}>
                <Button
                  hover={Colors.white}
                  padding="8px"
                  width="124px"
                  className={pathname === "/home" ? "active" : ""}
                >
                  HOME
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"/portfolio"}>
                <Button
                  hover={Colors.white}
                  padding="8px"
                  width="124px"
                  className={pathname === "/portfolio" ? "active" : ""}
                >
                  PORTFÓLIO
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"/sobre"}>
                <Button
                  bg=""
                  hover={Colors.white}
                  padding="8px"
                  width="124px"
                  className={pathname === "/sobre" ? "active" : ""}
                >
                  SOBRE
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"/contato"}>
                <Button
                  bg=""
                  hover={Colors.white}
                  padding="8px"
                  width="124px"
                  className={pathname === "/contato" ? "active" : ""}
                >
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
