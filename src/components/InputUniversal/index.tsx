import { useState, useEffect } from "react";
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
import {
  CustomInput,
  IconWrapper,
  ContainerWrapper,
  PhoneInputGlobalStyles,
  SelectWrapper,
  CustomSelect,
  SelectOption,
  ArrowIcon,
} from "./styled";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface InputType {
  type?: InputEnum;
  placeholder?: string;
}

// Опции для выпадающего списка гендеров
const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

function InputUniversal(props: InputType) {
  const { type = InputEnum.default, placeholder = "" } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [isInputValue, setInputValue] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [genderInputValue, setGenderInputValue] = useState("");
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
  const [filteredGenderOptions, setFilteredGenderOptions] =
    useState(genderOptions);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleGenderInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setGenderInputValue(value);

    // Фильтрация опций по введенному тексту
    if (value) {
      const filtered = genderOptions.filter((option) =>
        option.label.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredGenderOptions(filtered);
      setIsGenderDropdownOpen(true); // Открываем выпадающий список только при вводе текста
    } else {
      setFilteredGenderOptions(genderOptions);
      setIsGenderDropdownOpen(false); // Закрываем выпадающий список, если поле пустое
    }
  };

  const handleGenderSelect = (value: string, label: string) => {
    setSelectedGender(value);
    setGenderInputValue(label);
    setIsGenderDropdownOpen(false);
  };

  // Обновляем отфильтрованные опции при открытии выпадающего списка
  useEffect(() => {
    if (isGenderDropdownOpen) {
      if (genderInputValue) {
        const filtered = genderOptions.filter((option) =>
          option.label.toLowerCase().startsWith(genderInputValue.toLowerCase())
        );
        setFilteredGenderOptions(filtered);
      } else {
        setFilteredGenderOptions(genderOptions);
      }
    }
  }, [isGenderDropdownOpen, genderInputValue]);

  return (
    <>
      <PhoneInputGlobalStyles />
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
            <CustomInput
              $isFocused={isFocused}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={{ border: 0, padding: 10 }}
              placeholder={placeholder}
              type={type}
            />
          </>
        )}
        {type === InputEnum.gender && (
          <SelectWrapper>
            <CustomInput
              $isFocused={isFocused}
              onFocus={() => {
                setIsFocused(true);
                // Не открываем выпадающий список при фокусе
              }}
              onBlur={() => {
                setIsFocused(false);
                // Задержка, чтобы успеть выбрать опцию перед закрытием
                setTimeout(() => setIsGenderDropdownOpen(false), 200);
              }}
              style={{ border: 0 }}
              placeholder="Select Gender"
              value={genderInputValue}
              onChange={handleGenderInputChange}
            />
            <ArrowIcon
              onClick={() => {
                // При клике на стрелку показываем все опции
                setIsGenderDropdownOpen(!isGenderDropdownOpen);
                if (!isGenderDropdownOpen) {
                  setFilteredGenderOptions(genderOptions);
                }
              }}
            >
              ▼
            </ArrowIcon>
            {isGenderDropdownOpen && filteredGenderOptions.length > 0 && (
              <CustomSelect>
                {filteredGenderOptions.map((option) => (
                  <SelectOption
                    key={option.value}
                    onClick={() =>
                      handleGenderSelect(option.value, option.label)
                    }
                    $isSelected={selectedGender === option.value}
                  >
                    {option.label}
                  </SelectOption>
                ))}
              </CustomSelect>
            )}
          </SelectWrapper>
        )}
        {type === InputEnum.phoneNumber && (
          <>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={setPhone}
              inputStyle={{
                width: "100%",
                height: "100%",
                color: "black",
                borderRadius: "10px",
              }}
              buttonStyle={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "10px",
              }}
              containerClass="custom-phone-container"
              inputClass="custom-phone-input"
              dropdownClass="custom-phone-dropdown"
              buttonClass="custom-phone-button"
            />
          </>
        )}
      </ContainerWrapper>
    </>
  );
}

export default InputUniversal;
