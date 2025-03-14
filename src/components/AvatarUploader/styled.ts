import styled from "styled-components";

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 20vh;
  border-radius: 50%;
  background: #f0f0f0;
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: scale(1.4);
`;

export const AvatarPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #888;
  font-size: 14px;
`;

export const HiddenInput = styled.input`
  display: none;
`;
