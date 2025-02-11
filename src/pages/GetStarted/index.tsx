import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header, ContinueWith, UniversalBtn } from "./styled";

function LetsYouIn() {
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("root")?.classList.add("background-image");

    return () => {
      document.getElementById("root")?.classList.remove("background-image");
    };
  }, []);

  return (
    <>
      <Header>Welcome to Bestviewer</Header>
      <ContinueWith>
        The best streaming anime app of the century to entertain you every day
      </ContinueWith>
      <UniversalBtn
        minWidth=""
        color=""
        bgColor="#06c149"
        onClick={() => navigate("/letsYouIn")}
        label="Get Started"
      />
      {/* <Body isGetStarted={true || false} /> */}
    </>
  );
}

export default LetsYouIn;
