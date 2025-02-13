import styled, { keyframes } from "styled-components";
import BtnAccount from "../../components/BtnAccount";
import BtnUniversal from "../../components/BtnUniversal";

// Определите анимацию вращения
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Header = styled.h2``;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ClickableText = styled.p`
  color: #06c149;
  margin-left: 5px;
  cursor: pointer;
`;

export const SignUpMessage = styled.p`
  color: #888;
`;

export const ContinueWith = styled.h4`
  margin-bottom: 0px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

export const AccountSelectorBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2em;
  justify-content: center;
  padding-top: 0px;
  padding-bottom: 1vh;
  gap: 2vh;
`;

export const AccountBtn = styled(BtnAccount)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 2vh;
  column-gap: 5px;
  border-color: rgba(0, 0, 0, 0.1);
`;

export const UniversalBtn = styled(BtnUniversal)``;

export const StyledCinemaLogo = styled.img`
  border-radius: 50%;
  transform-origin: center;
  transition: transform 0.5s ease;
  position: relative;

  // /* Псевдоэлемент для эффекта подсветки */
  // &::after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   border-radius: 50%;
  //   background: radial-gradient(
  //     circle,
  //     rgba(0, 255, 0, 0.7) 0%,
  //     /* Увеличьте непрозрачность */ rgba(0, 255, 0, 0.3) 70%
  //       /* Увеличьте радиус */
  //   );
  //   opacity: 0; /* Скрыть по умолчанию */
  //   transition: opacity 0.5s ease; /* Плавный переход для появления */
  //   z-index: -1; /* Поместить за изображением */
  //   filter: blur(10px); /* Добавьте размытие для мягкого свечения */
  // }

  &:hover {
    animation: ${rotateAnimation} 2s linear infinite;

    // &::after {
    //   opacity: 1;
    // }
  }
`;
