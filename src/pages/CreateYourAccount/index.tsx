import "./style.css";
import BtnAccount from "../../components/BtnAccount/index.tsx";
import BtnUniversal from "../../components/BtnUniversal/index.tsx";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/Checkbox/index.tsx";
import InputUniversal from "../../components/InputUniversal/index.tsx";

function CreateYourAccount() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <a target="_blank">
          <div></div>
        </a>
      </div>
      <h2>Create Your Account</h2>
      <div>
        <InputUniversal />
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
          <div></div>
        </BtnAccount>
        <BtnAccount
          classList="btnAccount center-button"
          onClick={() => console.log("lox")}
          label=""
        >
          <div></div>
        </BtnAccount>
        <BtnAccount
          classList="btnAccount"
          onClick={() => console.log("click")}
          label=""
        >
          <div></div>
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
