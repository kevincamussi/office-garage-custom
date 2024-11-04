import { ButtonStyle } from "./styles";

export type ButtonProps = {
  padding?: string;
  bg?: string;
  hover?: string;
  hovercolor?: string;
  width?: string;
  children: React.ReactNode;
};

const Button = ({
  children,
  bg,
  padding,
  hover,
  hovercolor,
  width,
}: ButtonProps) => {
  return (
    <ButtonStyle
      padding={padding}
      bg={bg}
      hover={hover}
      hovercolor={hovercolor}
      width={width}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
