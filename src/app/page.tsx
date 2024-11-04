"use client";

import Button from "@/components/Button";
import { Colors } from "@/styles/global";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex justify-center">
      <Link className="absolute bottom-20" href={"#"}>
        <Button padding="24px 128px" bg={Colors.white} hover={Colors.black}>
          AGENDE UM HORÁRIO
        </Button>
      </Link>
    </div>
  );
};

export default Home;
