import "./style.css";
// import React from "react";
import BtnAccount from "../../components/BtnAccount/index.tsx";
import BtnUniversal from "../../components/BtnUniversal/index.tsx";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/Checkbox/index.tsx";
import InputUniversal from "../../components/InputUniversal/index.tsx";
import AppleIcon from "../../assets/icon/apple.svg?react";
import FacebookIcon from "../../assets/icon/facebook.svg?react";
import GoogleIcon from "../../assets/icon/google.svg?react";
import CinemaLogo from "../../assets/icon/film.svg?react";
import { InputEnum } from "../../types/enums/InputEnum.ts";

function CreateYourAccount() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <a target="_blank">
          <CinemaLogo width={125} height={125} />
        </a>
      </div>
      <h2>Create Your Account</h2>
      <div>
        <InputUniversal type={InputEnum.email} />
      </div>
      <div>
        <InputUniversal type={InputEnum.password} />
      </div>
      <div className="checkbox-container">
        <Checkbox labelProp="Remember me" classList="custom-styles-checkbox" />
      </div>
      <div>
        <BtnUniversal
          classList="btnUniversal"
          onClick={() => console.log("sign in")}
          label="Sign up"
        />
      </div>
      <h4>or continue with</h4>
      <div className="container-card">
        <BtnAccount
          classList="btnAccount"
          onClick={() => console.log("click")}
          label=""
        >
          <FacebookIcon width={22} height={25} />
        </BtnAccount>
        <BtnAccount
          classList="btnAccount center-button"
          onClick={() => console.log("lox")}
          label=""
        >
          <GoogleIcon width={22} height={25} />
        </BtnAccount>
        <BtnAccount
          classList="btnAccount"
          onClick={() => console.log("click")}
          label=""
        >
          <AppleIcon width={28} height={30} />
        </BtnAccount>
      </div>
      <div className="content-section">
        <p className="read-the-docs">Already have an account? </p>
        <p className="sign-in-text" onClick={() => navigate("/test")}>
          Sign in
        </p>
      </div>
    </>
  );
}

export default CreateYourAccount;
