import { Button, ButtonProps } from "react-bootstrap";
import styled from "styled-components";

export const StyledBootstrapButton = styled(Button)<
  ButtonProps,
  { $bgColor?: string }
>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : "transparent")};

  margin-top: 2vh;
  column-gap: 5px;
  border-color: rgba(0, 0, 0, 0.1);
`;
