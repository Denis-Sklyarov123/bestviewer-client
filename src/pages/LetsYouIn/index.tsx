import "./style.css";
import BtnAccount from "../../components/BtnAccount/index.tsx";
import BtnUniversal from "../../components/BtnUniversal/index.tsx";
import { useNavigate } from "react-router-dom";
import AppleIcon from "../../assets/icon/apple.svg?react";
import FacebookIcon from "../../assets/icon/facebook.svg?react";
import GoogleIcon from "../../assets/icon/google.svg?react";
import CinemaLogo from "../../assets/icon/videoCameraCinema.svg?react";

function LetsYouIn() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <a target="_blank">
          <CinemaLogo width={125} height={110} />
        </a>
      </div>
      <div style={{ fontSize: "7vh", fontWeight: "bold" }}>Let's you in</div>
      <div className="card">
        <BtnAccount
          classList="btnAccount"
          onClick={() => console.log("face")}
          label="Continue with Facebook"
        >
          <div className="IconStyle">
            <FacebookIcon width={22} height={25} />
          </div>
        </BtnAccount>
        <BtnAccount
          classList="btnAccount"
          onClick={() => console.log("lox")}
          label="Continue with Google"
        >
          <div className="IconStyle">
            <GoogleIcon width={22} height={25} />
          </div>
        </BtnAccount>
        <BtnAccount
          classList="btnAccount"
          onClick={() => console.log("click")}
          label="Continue with Apple"
        >
          <div className="IconStyle">
            <AppleIcon width={28} height={30} />
          </div>
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
        <p className="sign-up-text" onClick={() => navigate("/createaccount")}>
          Sign up
        </p>
      </div>
    </>
  );
}

export default LetsYouIn;
