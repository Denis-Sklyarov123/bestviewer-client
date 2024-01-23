import "./style.css";
import BtnAccount from "../../components/BtnAccount/index.tsx";
import AppleIcon from "../../assets/img/apple-black-logo-svgrepo-com.svg";
import FacebookIcon from "../../assets/img/facebook-3-logo-svgrepo-com.svg";
import GoogleIcon from "../../assets/img/google-icon-logo-svgrepo-com.svg";
import BtnUniversal from "../../components/BtnUniversal/index.tsx";
import CinemaLogo from "../../assets/img/video-camera-cinema-svgrepo-com.svg";

function LetsYouIn() {
  return (
    <>
      <div>
        <a target="_blank">
          <img src={CinemaLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Let's you in</h1>
      <div className="card">
        <BtnAccount
          classList="BtnAccount"
          onClick={() => console.log("lox")}
          label="Continue with Facebook"
        >
          <img src={FacebookIcon} className="IconStyle" alt="IconStyle" />
        </BtnAccount>
        <BtnAccount
          classList="BtnAccount"
          onClick={() => console.log("lox")}
          label="Continue with Google"
        >
          <img src={GoogleIcon} className="IconStyle" alt="IconStyle" />
        </BtnAccount>
        <BtnAccount
          classList="BtnAccount"
          onClick={() => console.log("click")}
          label="Continue with Apple"
        >
          <img src={AppleIcon} className="IconStyle" alt="IconStyle" />
        </BtnAccount>
        <h4>or</h4>
      </div>
      <div>
        <BtnUniversal
          classList="BtnUniversal"
          onClick={() => console.log("sign in")}
          label="Sign in with password"
        />
      </div>
      <p className="read-the-docs">Don't have an account? Sign up</p>
    </>
  );
}

export default LetsYouIn;
