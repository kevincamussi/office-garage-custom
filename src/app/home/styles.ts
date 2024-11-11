import styled from "styled-components";

type Props = {
  backgroundimage: string;
};

export const Images = styled.div<Props>`
  background-image: ${({ backgroundimage }: Props) =>
    `url(${backgroundimage})`};
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;
  z-index: -1;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    z-index: 3;
  }
`;
