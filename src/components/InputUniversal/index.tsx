import { useState } from "react";
import { InputEnum } from "../../types/enums/InputEnum";
import "./style.css";
import PasswordIcon from "../../assets/icon/lock-solid.svg?react";
import EmailIcon from "../../assets/icon/email-solid.svg?react";
import EyeSlashPassword from "../../assets/icon/eye-slash-solid.svg?react";
// import EyePassword from "../../assets/icon/eye-solid.svg?react";

interface InputType {
  type?: InputEnum;
}

function InputUniversal(props: InputType) {
  const { type = InputEnum.default } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="icon-input-container">
      {type === InputEnum.password && (
        <>
          <div className="container-icon">
            <PasswordIcon width={20} height={20} />
          </div>
          <input
            style={{ border: 0 }}
            placeholder="Password"
            type={"password"}
            onClick={() => {
              setIsFocused(true);
            }}
          />
          {isFocused ? (
            <div className="container-icon">
              <EyeSlashPassword width={20} height={20} />
            </div>
          ) : (
            <div className="container-icon">
              <EyeSlashPassword width={20} height={20} />
            </div>
          )}
        </>
      )}
      {type === InputEnum.email && (
        <>
          <div className="container-icon">
            <EmailIcon width={20} height={20} />
          </div>
          <input style={{ border: 0 }} placeholder="Email" type={"email"} />
          <div className="container-icon">
            <EmailIcon width={20} height={20} />
          </div>
        </>
      )}
      {type === InputEnum.default && (
        <>
          <PasswordIcon width={20} height={20} />
          <input className="input" placeholder="text" type={type} />
          <PasswordIcon width={20} height={20} />
        </>
      )}
    </div>
  );
}

export default InputUniversal;
