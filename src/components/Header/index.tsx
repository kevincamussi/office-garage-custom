"use client";

import Image from "next/image";
import { HeaderStyle } from "./styles";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <Image
          src="/logo.png"
          alt={"Logo"}
          width={582}
          height={105}
          style={{ maxWidth: "582px", height: "auto" }}
        />
      </div>
    </HeaderStyle>
  );
};

export default Header;
