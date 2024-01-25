import { useState } from "react";
import { InputEnum } from "../../types/enums/InputEnum";
import "./style.css";
import PasswordIcon from "../../assets/icon/lock-solid.svg?react";
import EmailIcon from "../../assets/icon/email-solid.svg?react";

interface InputType {
  type?: InputEnum;
}

function InputUniversal(props: InputType) {
  const { type = InputEnum.default } = props;
  const [isShow, setIsShow] = useState(false);

  return (
    <div style={{ display: "flex", gap: 10 }}>
      {type === InputEnum.password && (
        <>
          <input type={isShow ? "text" : "password"} />
          {isShow ? (
            <div>
              <PasswordIcon />
            </div>
          ) : (
            <div>
              <PasswordIcon />
            </div>
          )}
        </>
      )}
      {type === InputEnum.email && (
        <>
          <div>
            <EmailIcon width={20} height={20} />
          </div>
          <input style={{ border: 0 }} placeholder="Email" type={type} />
          <div></div>
        </>
      )}
      {type === InputEnum.default && (
        <>
          <PasswordIcon width={20} height={20} />
          <input style={{ border: 0 }} placeholder="text" type={type} />
          <PasswordIcon width={20} height={20} />
        </>
      )}
    </div>
  );
}

export default InputUniversal;
