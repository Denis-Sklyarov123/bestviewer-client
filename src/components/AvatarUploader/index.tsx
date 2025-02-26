import { useState } from "react";
import { AvatarDefault, AvatarAddedImg } from "./styled";

const AvatarUploader = () => {
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div
        onClick={() => document.getElementById("fileInput")?.click()}
        style={{ cursor: "pointer" }}
      >
        {avatar ? (
          <AvatarAddedImg src={avatar} alt="Avatar" />
        ) : (
          <AvatarDefault>Upload Avatar</AvatarDefault>
        )}
      </div>
      <input
        id="fileInput"
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default AvatarUploader;
