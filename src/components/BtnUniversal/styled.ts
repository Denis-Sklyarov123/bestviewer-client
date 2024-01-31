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
`;
