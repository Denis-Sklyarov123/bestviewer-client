import { useNavigate } from "react-router-dom";
import InputUniversal from "../../components/InputUniversal/index.tsx";
import { InputEnum } from "../../types/enums/InputEnum.ts";
import { ContainerInput, Header, UniversalBtn } from "./styled.ts";
import { Body } from "../../styled.ts";
import AvatarUploader from "../../components/AvatarUploader/index.tsx";

function FillYourProfile() {
  const navigate = useNavigate();

  return (
    <>
      <Body isGetStarted={false}>
        <AvatarUploader></AvatarUploader>

        <Header>Fill Your Profile</Header>

        <ContainerInput>
          <InputUniversal type={InputEnum.email} />

          <InputUniversal type={InputEnum.password} />

          <InputUniversal type={InputEnum.password} />

          <InputUniversal type={InputEnum.password} />

          <InputUniversal type={InputEnum.password} />
        </ContainerInput>

        <UniversalBtn
          minWidth=""
          color=""
          bgColor="#06c149"
          onClick={() => navigate("/interest")}
          label="Sign in"
        />
      </Body>
    </>
  );
}

export default FillYourProfile;
