"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { Colors } from "@/styles/global";
import { BackgroundCarousel } from "./backgroundCarousel";

const Home = () => {
  return (
    <>
      <BackgroundCarousel />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 100, y: 710 }}
        transition={{ duration: 2 }}
        className="flex justify-center"
      >
        <Link className="absolute bottom-20" href={"#"}>
          <Button padding="24px 128px" bg={Colors.white} hover={Colors.black}>
            AGENDE UM HORÁRIO
          </Button>
        </Link>
      </motion.div>
    </>
  );
};

export default Home;
