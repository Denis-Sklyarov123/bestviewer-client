import "./style.css";
import { useNavigate } from "react-router-dom";
import {
  AccountSelectorBar,
  Header,
  InterestsSelector,
  UniversalBtn,
  ContainerBtnNavigate,
} from "./styled";
import BtnGenre from "../../components/BtnGenre";

function ChooseInterest() {
  const navigate = useNavigate();

  return (
    <>
      <Header>Let's you in</Header>
      <InterestsSelector>
        Choose your interests and get the best movie recommendations. Don't
        worry, you can always change this later.
      </InterestsSelector>
      <AccountSelectorBar>
        <BtnGenre onClick={() => console.log("/click")} label="Drama" />
        <BtnGenre onClick={() => console.log("/click")} label="Drama" />
        <BtnGenre onClick={() => console.log("/click")} label="Drama" />
        <BtnGenre onClick={() => console.log("/click")} label="Drama" />
        <BtnGenre onClick={() => console.log("/click")} label="Drama" />
        <BtnGenre onClick={() => console.log("/click")} label="Drama" />
        <BtnGenre onClick={() => console.log("/click")} label="Drama" />
        <BtnGenre onClick={() => console.log("/click")} label="Drama" />
        <BtnGenre onClick={() => console.log("/click")} label="Drama" />
        <BtnGenre onClick={() => console.log("/click")} label="Drama" />
        <BtnGenre onClick={() => console.log("/click")} label="Drama" />
        <BtnGenre onClick={() => console.log("/click")} label="Drama" />
        <BtnGenre onClick={() => console.log("/click")} label="Drama" />
        <BtnGenre onClick={() => console.log("/click")} label="Drama" />
        <BtnGenre onClick={() => console.log("/click")} label="Drama" />
      </AccountSelectorBar>

      <ContainerBtnNavigate>
        <UniversalBtn
          bgColor="#e6f9ed"
          onClick={() => navigate("/login")}
          label="Sign in with password"
        />
        <UniversalBtn
          bgColor="#06c149"
          onClick={() => navigate("/login")}
          label="Sign in with password"
        />
      </ContainerBtnNavigate>
    </>
  );
}

export default ChooseInterest;
