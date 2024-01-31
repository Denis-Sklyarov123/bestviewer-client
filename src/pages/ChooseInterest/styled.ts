import styled from "styled-components";
import BtnUniversal from "../../components/BtnUniversal";

export const Header = styled.div`
  font-size: 4vh;
  font-weight: bold;
`;

export const AccountSelectorBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 2em;
  padding-top: 2em;
  column-gap: 1vh;
  row-gap: 2vh;
`;

export const InterestsSelector = styled.h4``;

export const UniversalBtn = styled(BtnUniversal)``;

export const ContainerBtnNavigate = styled.div`
  display: flex;
  flex-direction: row;
`;
