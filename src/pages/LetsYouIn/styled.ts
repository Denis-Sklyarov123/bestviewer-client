import styled from "styled-components";
import BtnAccount from "../../components/BtnAccount";
import BtnUniversal from "../../components/BtnUniversal";

export const Header = styled.div`
  font-size: 4vh;
  font-weight: bold;
`;

export const AccountSelectorBar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CinemaLogoContainer = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 50%;
  transition: box-shadow 0.3s ease;
  background-color: #06c149;
св
  &:hover {
    box-shadow: 0px 0px 15px 5px rgba(0, 255, 0, 0.3);
`;

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

export const AccountBtn = styled(BtnAccount)`
  background-color: #000 !important;
`;

export const UniversalBtn = styled(BtnUniversal)``;
