import { useNavigate } from "react-router-dom";
import { Header, ContinueWith, UniversalBtn } from "./styled";
import { Body } from "../../styled";

function LetsYouIn() {
  const navigate = useNavigate();

  return (
    <>
      <Body isGetStarted={true}>
        {/* <Layout> */}
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
        {/* </Layout> */}
      </Body>
    </>
  );
}

export default LetsYouIn;
