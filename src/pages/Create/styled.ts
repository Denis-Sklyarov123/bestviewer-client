import styled from "styled-components";
import BtnAccount from "../../components/BtnAccount";
import BtnUniversal from "../../components/BtnUniversal";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 100vh;
  border-radius: 8px;
`;

export const Header = styled.h2``;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ClickableText = styled.p`
  color: #06c149;
  margin-left: 5px;
  cursor: pointer;
`;

export const SignUpMessage = styled.p`
  color: #888;
`;

export const ContinueWith = styled.h4`
  margin-bottom: 0px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

export const AccountSelectorBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2em;
  justify-content: center;
  padding-top: 0px;
  padding-bottom: 1vh;
  gap: 2vh;
`;

export const AccountBtn = styled(BtnAccount)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 2vh;
  border-color: rgba(0, 0, 0, 0.1);
`;

export const UniversalBtn = styled(BtnUniversal)``;
