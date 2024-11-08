import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";

import "../styles/global.css";
import StyledComponentsRegystry from "@/lib/registry";
import { GlobalStyle } from "@/styles/global";

import Header from "@/components/Header";

const InriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={InriaSans.className}>
        <StyledComponentsRegystry>
          <GlobalStyle />
          <Header />
          {children}
        </StyledComponentsRegystry>
      </body>
    </html>
  );
}
