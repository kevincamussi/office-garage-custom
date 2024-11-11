"use client";

import { ButtonStyle } from "./styles";

export type ButtonProps = {
  padding?: string;
  bg?: string;
  hover?: string;
  hovercolor?: string;
  width?: string;
  isactive?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  bg,
  padding,
  hover,
  hovercolor,
  width,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonStyle
      padding={padding}
      bg={bg}
      hover={hover}
      hovercolor={hovercolor}
      width={width}
      className={className}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
