import { Button, ButtonProps } from "react-bootstrap";
import styled from "styled-components";

export const StyledBtnUniversal = styled(Button)<
  ButtonProps,
  { $bgColor?: string }
>`
  background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : "transparent")};
  border-radius: 10vh;
  min-width: 40vh;
  color: white;
  margin-top: 2vh;
`;
