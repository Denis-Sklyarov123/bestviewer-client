import styled from "styled-components";
import BtnUniversal from "../../components/BtnUniversal";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 30vh;
  border-radius: 8px;
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
  margin-bottom: revert;
`;

export const UniversalBtn = styled(BtnUniversal)``;
