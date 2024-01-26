import { useState } from "react";
import { InputEnum } from "../../types/enums/InputEnum";
import PasswordIcon from "../../assets/icon/lock-solid.svg?react";
import PasswordGreenIcon from "../../assets/icon/lock-green.svg?react";
import PasswordGrayIcon from "../../assets/icon/lock-gray.svg?react";
import EmailIcon from "../../assets/icon/email-solid.svg?react";
import EmailGreenIcon from "../../assets/icon/email-green.svg?react";
import EmailGrayIcon from "../../assets/icon/email-gray.svg?react";
import EyeSlashGreenPassword from "../../assets/icon/eye-slash-green.svg?react";
import EyeSlashPassword from "../../assets/icon/eye-slash-solid.svg?react";
import EyeSlashGrayPassword from "../../assets/icon/eye-slash-gray.svg?react";
import { CustomInput, IconWrapper, ContainerWrapper } from "./styled";

interface InputType {
  type?: InputEnum;
}

function InputUniversal(props: InputType) {
  const { type = InputEnum.default } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [isInputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <ContainerWrapper $isFocused={isFocused}>
      {type === InputEnum.password && (
        <>
          {isInputValue ? (
            <>
              {isFocused ? (
                <IconWrapper>
                  <PasswordGreenIcon width={20} height={20} />
                </IconWrapper>
              ) : (
                <IconWrapper>
                  <PasswordIcon width={20} height={20} />
                </IconWrapper>
              )}
            </>
          ) : isFocused ? (
            <IconWrapper>
              <PasswordGreenIcon width={20} height={20} />
            </IconWrapper>
          ) : (
            <IconWrapper>
              <PasswordGrayIcon width={20} height={20} />
            </IconWrapper>
          )}
          <CustomInput
            $isFocused={isFocused}
            $isDefault={false}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{ border: 0 }}
            placeholder="Password"
            type={"password"}
            value={isInputValue}
            onChange={handleInputChange}
          />
          {isInputValue ? (
            isFocused ? (
              <IconWrapper>
                <EyeSlashGreenPassword width={20} height={20} />
              </IconWrapper>
            ) : (
              <IconWrapper>
                <EyeSlashPassword width={20} height={20} />
              </IconWrapper>
            )
          ) : isFocused ? (
            <IconWrapper>
              <EyeSlashGreenPassword width={20} height={20} />
            </IconWrapper>
          ) : (
            <IconWrapper>
              <EyeSlashGrayPassword width={20} height={20} />
            </IconWrapper>
          )}
        </>
      )}
      {type === InputEnum.email && (
        <>
          {isInputValue ? (
            isFocused ? (
              <IconWrapper>
                <EmailGreenIcon width={20} height={20} />
              </IconWrapper>
            ) : (
              <IconWrapper>
                <EmailIcon width={20} height={20} />
              </IconWrapper>
            )
          ) : isFocused ? (
            <IconWrapper>
              <EmailGreenIcon width={20} height={20} />
            </IconWrapper>
          ) : (
            <IconWrapper>
              <EmailGrayIcon width={20} height={20} />
            </IconWrapper>
          )}
          <CustomInput
            $isFocused={isFocused}
            $isDefault={true}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{ border: 0 }}
            placeholder="Email"
            type={"email"}
            value={isInputValue}
            onChange={handleInputChange}
          />
        </>
      )}
      {type === InputEnum.default && (
        <>
          {isFocused ? (
            <IconWrapper>
              <EmailIcon width={20} height={20} />
            </IconWrapper>
          ) : (
            <IconWrapper>
              <EmailIcon width={20} height={20} />
            </IconWrapper>
          )}
          <CustomInput
            $isFocused={isFocused}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{ border: 0 }}
            placeholder="Email"
            type={type}
          />
        </>
      )}
    </ContainerWrapper>
  );
}

export default InputUniversal;
