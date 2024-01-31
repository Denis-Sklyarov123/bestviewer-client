import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/Checkbox/index.tsx";
import InputUniversal from "../../components/InputUniversal/index.tsx";
import AppleIcon from "../../assets/icon/apple.svg?react";
import FacebookIcon from "../../assets/icon/facebook.svg?react";
import GoogleIcon from "../../assets/icon/google.svg?react";
import CinemaLogo from "../../assets/icon/film.svg?react";
import { InputEnum } from "../../types/enums/InputEnum.ts";
import {
  ContainerInput,
  ContentSection,
  AccountSelectorBar,
  ClickableText,
  SignUpMessage,
  Header,
  ContinueWith,
  AccountBtn,
  UniversalBtn,
} from "./styled";

function CreateAccount() {
  const navigate = useNavigate();

  return (
    <>
      <CinemaLogo width={100} height={100} />

      <Header>Create Your Account</Header>

      <ContainerInput>
        <InputUniversal type={InputEnum.email} />

        <InputUniversal type={InputEnum.password} />
      </ContainerInput>

      <Checkbox labelProp="Remember me" />

      <UniversalBtn onClick={() => console.log("sign in")} label="Sign up" />

      <ContinueWith>or continue with</ContinueWith>

      <AccountSelectorBar>
        <AccountBtn bgColor="" onClick={() => console.log("click")} label="">
          <FacebookIcon width={22} height={25} />
        </AccountBtn>

        <AccountBtn bgColor="" onClick={() => console.log("click")} label="">
          <GoogleIcon width={22} height={25} />
        </AccountBtn>

        <AccountBtn bgColor="" onClick={() => console.log("click")} label="">
          <AppleIcon width={28} height={30} />
        </AccountBtn>
      </AccountSelectorBar>

      <ContentSection>
        <SignUpMessage>Already have an account? </SignUpMessage>

        <ClickableText onClick={() => navigate("/login")}>
          Sign in
        </ClickableText>
      </ContentSection>
    </>
  );
}

export default CreateAccount;
