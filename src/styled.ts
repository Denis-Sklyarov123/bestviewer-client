import styled from "styled-components";
import getStartedImg from "./assets/images/anime-characters-body.jpg";

interface BodyProps {
  isGetStarted: boolean;
}

export const Body = styled.div<BodyProps>`
  margin: 0;
  display: flex;
  place-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.7);
  background-image: url(${({ isGetStarted }) => isGetStarted && getStartedImg});
  background-color: ${({ isGetStarted }) => !isGetStarted && "#242424"};
`;
