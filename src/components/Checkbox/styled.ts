import styled from "styled-components";
import { FormCheck } from "react-bootstrap";

export const StyledCheckbox = styled(FormCheck)`
  display: flex;
  justify-content: space-between;
  margin-top: 2vh;
  user-select: none;
  position: relative;

  .form-check-input {
    display: none;
  }

  .form-check-label {
    position: relative;
    padding-left: 35px;
    cursor: pointer;
  }

  /* Чекбокс */
  .form-check-label::before {
    transition: background-color 0.6s ease, border-color 0.6s ease;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 2px solid #06c149;
    background-color: transparent;
    border-radius: 8px;
  }

  /* При нажатии */
  .form-check-input:checked + .form-check-label::before {
    box-shadow: 0px 0px 20px -3px rgba(61, 255, 61, 0.58);
    background-color: #06c149;
    border-color: #06c149;
  }

  /* Галочка */
  .form-check-input:checked + .form-check-label::after {
    content: "✔";
    position: absolute;
    left: 2px;
    top: -7px;
    color: white;
    font-size: 25px;
    animation: scaleUp 0.2s ease-out;
  }

  /* Картинки вместо капель */
  .particles {
    position: absolute;
    top: 5px;
    left: 5px;
    pointer-events: none;
  }

  .particle {
    position: absolute;
    width: 20px;
    height: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("src/assets/icon/main-icon-sharingan.svg"); /* Замените на свою картинку */
    opacity: 0;
    animation: explode 0.6s ease-out;
  }

  @keyframes scaleUp {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes explode {
    0% {
      transform: translate(0, 0) scale(1);
      opacity: 1;
    }
    100% { transform: translate(var(--x), var(--y)) scale(3); opacity: 0; }
    }
  }
`;
