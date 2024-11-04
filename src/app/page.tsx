"use client";

import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Link className="absolute bottom-20" href={"#"}>
        <Button>AGENDE UM HORÁRIO</Button>;
      </Link>
    </div>
  );
}
