import { useState } from "react";

import {
  AvatarWrapper,
  AvatarImage,
  AvatarPlaceholder,
  HiddenInput,
} from "./styled";

const AvatarUploader = () => {
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <AvatarWrapper
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        {avatar ? (
          <AvatarImage src={avatar} alt="Avatar" />
        ) : (
          <AvatarPlaceholder>Upload Avatar</AvatarPlaceholder>
        )}
      </AvatarWrapper>
      <HiddenInput
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
    </>
  );
};

export default AvatarUploader;
