import "./style.css";
import BtnAccount from "../../components/BtnAccount/index.tsx";
import BtnUniversal from "../../components/BtnUniversal/index.tsx";
import { useNavigate } from "react-router-dom";

function LetsYouIn() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <a target="_blank">
          {/* <img src={CinemaLogo} className="logo" alt="Vite logo" /> */}
        </a>
      </div>
      <div style={{ fontSize: "7vh", fontWeight: "bold" }}>Let's you in</div>
      <div className="card">
        <BtnAccount
          classList="btnAccount"
          onClick={() => console.log("face")}
          label="Continue with Facebook"
        >
          <div></div>
          {/* <img src={FacebookIcon} className="IconStyle" alt="IconStyle" /> */}
        </BtnAccount>
        <BtnAccount
          classList="btnAccount"
          onClick={() => console.log("lox")}
          label="Continue with Google"
        >
          <div></div>

          {/* <img src={GoogleIcon} className="IconStyle" alt="IconStyle" /> */}
        </BtnAccount>
        <BtnAccount
          classList="btnAccount"
          onClick={() => console.log("click")}
          label="Continue with Apple"
        >
          <div></div>

          {/* <img src={AppleIcon} className="IconStyle" alt="IconStyle" /> */}
        </BtnAccount>
        <h4 className="or">or</h4>
      </div>
      <div>
        <BtnUniversal
          classList="btnUniversal"
          onClick={() => console.log("click")}
          label="Sign in with password"
        />
      </div>
      <div className="content-section">
        <p className="read-the-docs">Don't have an account? </p>
        <p
          className="sign-up-text"
          onClick={() => navigate("/CreateYourAccount")}
        >
          Sign up
        </p>
      </div>
    </>
  );
}

export default LetsYouIn;
