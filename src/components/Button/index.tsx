import { ButtonStyle } from "./styles";

const Button = ({ children }: { children: string | number }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;
