import { useNavigate } from "react-router-dom";
import InputUniversal from "../../components/InputUniversal/index.tsx";
import { InputEnum } from "../../types/enums/InputEnum.ts";
import { ContainerInput, Header, UniversalBtn } from "./styled.ts";
import { Body } from "../../styled.ts";
import AvatarUploader from "../../components/AvatarUploader/index.tsx";
import defaultAvatar from "../../assets/images/avatar-google-612x612.jpg";

function FillYourProfile() {
  const navigate = useNavigate();

  return (
    <>
      <Body isGetStarted={false}>
        <AvatarUploader initialImage={defaultAvatar} />

        <Header>Fill Your Profile</Header>

        <ContainerInput>
          <InputUniversal type={InputEnum.email} />

          <InputUniversal type={InputEnum.phoneNumber} />

          <InputUniversal type={InputEnum.default} placeholder="Full Name" />

          <InputUniversal type={InputEnum.default} placeholder="Nickname" />

          <InputUniversal type={InputEnum.gender} />
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
