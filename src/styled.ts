import styled from "styled-components";
import getStartedImg from "./assets/images/get-started.jpg";

// export const Body = styled.div`
//   background-image: ${({ isGetStarted }) =>
//     isGetStarted && url("${getStartedImg}")};

//   background-color: ${({ isGetStarted }) => !isGetStarted && "grey"};
// `;

export const Body = styled.div`
  background-image: url("${getStartedImg}") !important;
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 200vh;
  min-height: 100vh;
`;
