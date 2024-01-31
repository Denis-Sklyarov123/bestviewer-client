import "./style.css";
import { useNavigate } from "react-router-dom";
import {
  AccountSelectorBar,
  Header,
  InterestsSelector,
  UniversalBtn,
} from "./styled";

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
        <UniversalBtn onClick={() => console.log("/click")} label="Drama" />
        <UniversalBtn onClick={() => console.log("/click")} label="Drama" />
        <UniversalBtn onClick={() => console.log("/click")} label="Drama" />
        <UniversalBtn onClick={() => console.log("/click")} label="Drama" />
        <UniversalBtn onClick={() => console.log("/click")} label="Drama" />
        <UniversalBtn onClick={() => console.log("/click")} label="Drama" />
        <UniversalBtn onClick={() => console.log("/click")} label="Drama" />
        <UniversalBtn onClick={() => console.log("/click")} label="Drama" />
        <UniversalBtn onClick={() => console.log("/click")} label="Drama" />
        <UniversalBtn onClick={() => console.log("/click")} label="Drama" />
        <UniversalBtn onClick={() => console.log("/click")} label="Drama" />
        <UniversalBtn onClick={() => console.log("/click")} label="Drama" />
      </AccountSelectorBar>

      <div>
        <UniversalBtn
          onClick={() => navigate("/login")}
          label="Sign in with password"
        />
        <UniversalBtn
          onClick={() => navigate("/login")}
          label="Sign in with password"
        />
      </div>
    </>
  );
}

export default ChooseInterest;
