import { Button, ButtonProps } from "react-bootstrap";
import styled from "styled-components";

export const StyledBtnUniversal = styled(Button)<
  ButtonProps,
  { $bgColor?: string; $color?: string; $minWidth?: string }
>`
  background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : "transparent")};
  border-radius: 10vh;
  min-width: ${({ $minWidth }) => ($minWidth ? $minWidth : "40vh")};
  color: ${({ $color }) => ($color ? $color : "white")};
  margin-top: 2vh;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 15px 5px rgba(0, 255, 0, 0.3);
  }
`;
