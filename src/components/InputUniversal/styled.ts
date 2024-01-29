import styled from "styled-components";

export const ContainerWrapper = styled.div<{ $isFocused: boolean }>`
  border-radius: 10px;
  display: flex;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  height: 7vh;
  border: ${({ $isFocused }) => ($isFocused ? "1" : "0")}px solid
    ${({ $isFocused }) => ($isFocused ? "green" : "gray")};
  background: ${(props) => (props.$isFocused ? "#ebfaf1" : "#fafafa")};
  overflow: hidden;
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
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  border: 0px;
  width: ${({ $isDefault }) => ($isDefault ? "100" : "85")}%;
  background: ${(props) => (props.$isFocused ? "#ebfaf1" : "#fafafa")};
  &:focus {
    outline: none;
    border: 1px solid blue;
`;
