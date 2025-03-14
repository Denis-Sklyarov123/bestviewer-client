import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const ContainerWrapper = styled.div<{ $isFocused: boolean }>`
  border-radius: 10px;
  display: flex;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  height: 5vh;
  width: 16vw;
  border: ${({ $isFocused }) => ($isFocused ? "1" : "0")}px solid
    ${({ $isFocused }) => ($isFocused ? "green" : "gray")};
  background: ${(props) => (props.$isFocused ? "#ebfaf1" : "#fafafa")};
  // overflow: hidden;
  position: relative;
`;

export const IconWrapper = styled.div<{ $isInputEmpty?: boolean }>`
  display: flex;
  margin: 0 auto;
  width: 15%;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.$isInputEmpty ? "grey" : "black")};
`;

export const CustomInput = styled.input<{
  $isDefault?: boolean;
  $isFocused: boolean;
}>`
  color: #000;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  border: 0px;
  width: ${({ $isDefault }) => ($isDefault ? "100" : "85")}%;
  background: ${(props) => (props.$isFocused ? "#ebfaf1" : "#fafafa")};
  &:focus {
    outline: none;
    border: 1px solid blue;
    border-radius: 10px;
  }
  border-radius: 10px;
`;

// Стили для выпадающего списка гендеров
export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

export const ArrowIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666;
  font-size: 12px;
  transition: color 0.3s ease;

  &:hover {
    color: #06c149;
  }
`;

export const CustomSelect = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid rgba(6, 193, 73, 0.3);
  border-radius: 10px;
  margin-top: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  max-height: 150px;
  overflow-y: auto;
`;

export const SelectOption = styled.div<{ $isSelected: boolean }>`
  padding: 10px 15px;
  cursor: pointer;
  color: #000;
  background-color: ${(props) =>
    props.$isSelected ? "rgba(6, 193, 73, 0.1)" : "transparent"};

  &:hover {
    background-color: rgba(6, 193, 73, 0.1);
  }

  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

// Добавьте глобальные стили для кастомизации PhoneInput
export const PhoneInputGlobalStyles = createGlobalStyle`
  /* Стили для контейнера */
  .custom-phone-container {
    position: relative;
    width: 100%;
  }
  
  /* Стили для инпута при наведении */
  .custom-phone-input:hover {
    // border-color: #06c149 !important;
    // box-shadow: 0 0 0 1px rgba(6, 193, 73, 0.9) !important;
  }
  
  /* Стили для инпута при фокусе */
  .custom-phone-input:focus {
    box-shadow: 0 0 0 1px rgba(6, 193, 73, 0.9) !important;
    border-radius: 10px !important;
  }
  
  /* Стили для кнопки выбора страны при наведении */
  .custom-phone-button:hover,
  .react-tel-input .selected-flag:hover {
    background-color: #f5f5f5 !important;
    border-radius: 10px 0 0 10px !important;
  }
  
  /* Стили для кнопки выбора страны при фокусе */
  .custom-phone-button:focus,
  .react-tel-input .selected-flag:focus {
    background-color: #f5f5f5 !important;
    border-radius: 10px 0 0 10px !important;
    box-shadow: 0 0 0 1px rgba(6, 193, 73, 0.9) !important;
  }
  
  /* Стили для выпадающего списка */
  .custom-phone-dropdown {
    color: black !important;
    border-radius: 10px !important;
    max-height: 300px !important;
    overflow-y: auto !important;
  }
  
  /* Стили для элементов списка при наведении */
  .custom-phone-dropdown .country:hover {
    background-color: #f5f5f5 !important;
  }
  
  /* Стили для выбранного элемента списка */
  .custom-phone-dropdown .highlight {
    background-color: rgba(6, 193, 73, 0.9) !important;
  }
`;
