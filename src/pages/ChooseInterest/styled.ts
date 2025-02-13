import styled from "styled-components";
import BtnUniversal from "../../components/BtnUniversal";
import { Body } from "../../styled";

export const BodyInterest = styled(Body)`
    display: flex;
    flex-wrap: wrap;
    column-gap: 1vh;
    row-gap: 2vh;
    justify-content: center;
}
`;

export const Header = styled.div`
  font-size: 4vh;
  font-weight: bold;
`;

export const AccountSelectorBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 2em;
  padding-top: 2em;
  column-gap: 1vh;
  row-gap: 2vh;
  justify-content: space-evenly;
  max-width: 25vw;
`;

export const InterestsSelector = styled.h4``;

export const UniversalBtn = styled(BtnUniversal)``;

export const ContainerBtnNavigate = styled.div`
  min-width: 25vw;
  max-width: 25vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
