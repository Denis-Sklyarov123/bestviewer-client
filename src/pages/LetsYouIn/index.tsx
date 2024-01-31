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
  AccountBtn,
  UniversalBtn,
} from "./styled";
import BtnAccount from "../../components/BtnAccount";

function LetsYouIn() {
  const navigate = useNavigate();

  return (
    <>
      <CinemaLogo width={125} height={110} />

      <Header>Let's you in</Header>

      <AccountSelectorBar>
        <AccountBtn
          bgColor=""
          onClick={() => console.log("click")}
          label="Continue with Facebook"
        >
          <FacebookIcon width={22} height={25} />
        </AccountBtn>

        <AccountBtn
          bgColor=""
          onClick={() => console.log("click")}
          label="Continue with Google"
        >
          <GoogleIcon width={22} height={25} />
        </AccountBtn>

        <BtnAccount
          bgColor=""
          onClick={() => console.log("click")}
          label="Continue with Apple"
        >
          <AppleIcon width={28} height={25} />
        </BtnAccount>

        <ContinueWith>or</ContinueWith>
      </AccountSelectorBar>

      <UniversalBtn
        minWidth=""
        color=""
        bgColor="#06c149"
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
