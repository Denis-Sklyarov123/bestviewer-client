import { useNavigate } from "react-router-dom";
import AppleIcon from "../../assets/icon/apple.svg?react";
import FacebookIcon from "../../assets/icon/facebook.svg?react";
import GoogleIcon from "../../assets/icon/google.svg?react";
import CinemaLogo from "../../assets/icon/main-icon-face-nobody.svg?react";
import {
  AccountSelectorBar,
  ContentSection,
  ClickableText,
  SignUpMessage,
  Header,
  ContinueWith,
  AccountBtn,
  UniversalBtn,
  CinemaLogoContainer,
} from "./styled";
import { Body } from "../../styled";
import BtnAccount from "../../components/BtnAccount";

function LetsYouIn() {
  const navigate = useNavigate();

  return (
    <>
      <Body isGetStarted={false}>
        <CinemaLogoContainer>
          <CinemaLogo width={150} height={150} />
        </CinemaLogoContainer>

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
      </Body>
    </>
  );
}

export default LetsYouIn;
