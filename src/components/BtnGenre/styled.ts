import { Button, ButtonProps } from "react-bootstrap";
import styled, { css } from "styled-components";

export const StyledBtnGenre = styled(Button)<ButtonProps, { active?: boolean }>`
  background-color: white;
  border-radius: 10vh;
  // min-width: 13vh;
  color: #06c149;

  ${({ active }) =>
    active &&
    css`
      transition: 0.4s ease;
      background-color: #06c149;
      color: white;
    `}
`;
