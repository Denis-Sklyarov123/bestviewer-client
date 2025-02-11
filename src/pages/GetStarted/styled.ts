import styled from "styled-components";
import BtnUniversal from "../../components/BtnUniversal";
import getStartedImg from "../../assets/images/get-started.jpg";

export const Layout = styled.div`
  background-image: url("${getStartedImg}") !important;
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  font-size: 4vh;
  font-weight: bold;

  // ${Layout}{
  // // qwewqew
  // }
`;

export const ContinueWith = styled.h4`
  margin-bottom: 0px;
`;

export const UniversalBtn = styled(BtnUniversal)``;

// export const Body = styled.div`
//   background-image: ${({ isGetStarted }) =>
//     isGetStarted && url("${getStartedImg}")};

//   background-color: ${({ isGetStarted }) => !isGetStarted && "grey"};
// `;
