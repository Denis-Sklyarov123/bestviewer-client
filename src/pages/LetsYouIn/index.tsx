import "./style.css";
import BtnAccount from "../../components/BtnAccount/index.tsx";
import BtnUniversal from "../../components/BtnUniversal/index.tsx";
import { useNavigate } from "react-router-dom";
import AppleIcon from "../../assets/icon/apple.svg?react";
import FacebookIcon from "../../assets/icon/facebook.svg?react";
import GoogleIcon from "../../assets/icon/google.svg?react";
import CinemaLogo from "../../assets/icon/videoCameraCinema.svg?react";
import {
  AccountSelectorBar,
  ContentSection,
  ClickableText,
  SignUpMessage,
  Header,
  ContinueWith,
} from "./styled";

function LetsYouIn() {
  const navigate = useNavigate();

  return (
    <>
      <CinemaLogo width={125} height={110} />
      <Header>Let's you in</Header>
      <AccountSelectorBar>
        <BtnAccount
          classList="btnAccount"
          onClick={() => console.log("face")}
          label="Continue with Facebook"
        >
          <FacebookIcon width={22} height={25} />
        </BtnAccount>
        <BtnAccount
          classList="btnAccount"
          onClick={() => console.log("click")}
          label="Continue with Google"
        >
          <GoogleIcon width={22} height={25} />
        </BtnAccount>
        <BtnAccount
          classList="btnAccount"
          onClick={() => console.log("click")}
          label="Continue with Apple"
        >
          <AppleIcon width={28} height={25} />
        </BtnAccount>
        <ContinueWith>or</ContinueWith>
      </AccountSelectorBar>
      <BtnUniversal
        classList="btnUniversal"
        onClick={() => navigate("/login")}
        label="Sign in with password"
      />
      <ContentSection>
        <SignUpMessage>Don't have an account? </SignUpMessage>
        <ClickableText onClick={() => navigate("/create")}>
          Sign up
        </ClickableText>
      </ContentSection>
    </>
  );
}

export default LetsYouIn;
